import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db, googleProvider } from '../firebase';

interface User {
  id: string;
  email: string;
  name: string;
  avatar: string;
  streak: number;
  score: number;
  timeSpent?: Record<string, number>;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  loginWithGoogle: () => void;
  logout: () => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Upsert user in Firestore
        const userRef = doc(db, 'users', firebaseUser.uid);
        const publicRef = doc(db, 'public_profiles', firebaseUser.uid);
        const userDoc = await getDoc(userRef);
        const publicDoc = await getDoc(publicRef);
        
        const userData = {
          uid: firebaseUser.uid,
          email: firebaseUser.email || '',
          name: firebaseUser.displayName || 'User',
          avatar: firebaseUser.photoURL || '',
        };

        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
        
        let newStreak = 1;
        let currentScore = 0;

        if (!userDoc.exists()) {
          await setDoc(userRef, {
            ...userData,
            createdAt: serverTimestamp(),
            lastActive: serverTimestamp()
          });
          await setDoc(publicRef, {
            uid: userData.uid,
            name: userData.name,
            avatar: userData.avatar,
            score: 0,
            streak: 1,
            lastActive: serverTimestamp()
          });
        } else {
          const existingPublicData = publicDoc.data();
          const lastActiveTimestamp = existingPublicData?.lastActive?.toMillis?.() || 0;
          const lastActiveDate = new Date(lastActiveTimestamp);
          const lastActiveDay = new Date(lastActiveDate.getFullYear(), lastActiveDate.getMonth(), lastActiveDate.getDate()).getTime();
          
          currentScore = existingPublicData?.score || 0;
          newStreak = existingPublicData?.streak || 1;

          const msInDay = 24 * 60 * 60 * 1000;
          if (today - lastActiveDay === msInDay) {
            newStreak += 1;
          } else if (today - lastActiveDay > msInDay) {
            newStreak = 1;
          }

          await setDoc(userRef, { ...userData, lastActive: serverTimestamp() }, { merge: true });
          await setDoc(publicRef, { 
            uid: userData.uid,
            name: userData.name,
            avatar: userData.avatar,
            streak: newStreak,
            score: currentScore,
            lastActive: serverTimestamp()
          }, { merge: true });
        }

        setUser({
          id: firebaseUser.uid,
          email: userData.email,
          name: userData.name,
          avatar: userData.avatar,
          streak: newStreak,
          score: currentScore,
          timeSpent: userDoc.exists() ? userDoc.data()?.timeSpent || {} : {}
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('OAuth error:', error);
      alert('Failed to initiate login.');
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, loginWithGoogle, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
