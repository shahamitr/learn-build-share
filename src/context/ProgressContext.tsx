import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { collection, query, getDocs, doc, setDoc, serverTimestamp, increment, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from './AuthContext';

interface ProgressRecord {
  course_id: string;
  module_id: string;
  completed_at: string;
}

interface ProgressContextType {
  completedModules: Set<string>;
  markCompleted: (courseId: string, moduleId: string, xp: number) => Promise<void>;
  isCompleted: (courseId: string, moduleId: string) => boolean;
  updateTimeSpent: (courseId: string, timeInSeconds: number) => Promise<void>;
  loading: boolean;
  xp: number;
  level: number;
  streak: number;
  badges: string[];
  challenges: string[];
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const { user, setUser } = useAuth();
  const [completedModules, setCompletedModules] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [streak, setStreak] = useState(0);
  const [badges, setBadges] = useState<string[]>([]);
  const [challenges, setChallenges] = useState<string[]>([]);

  useEffect(() => {
    if (!user) {
      setCompletedModules(new Set());
      setXp(0);
      setLevel(1);
      setStreak(0);
      setBadges([]);
      setChallenges([]);
      setLoading(false);
      return;
    }

    const fetchProgress = async () => {
      try {
        const q = query(collection(db, 'users', user.id, 'progress'));
        const querySnapshot = await getDocs(q);
        const completedSet = new Set<string>();
        
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          completedSet.add(`${data.courseId}:${data.moduleId}`);
        });
        
        setCompletedModules(completedSet);

        // Fetch XP and Streak
        const profileDoc = await getDoc(doc(db, 'public_profiles', user.id));
        if (profileDoc.exists()) {
          const data = profileDoc.data();
          setXp(data.xp || 0);
          setLevel(Math.floor((data.xp || 0) / 1000) + 1);
          setStreak(data.streak || 0);
          setBadges(data.badges || []);
          setChallenges(data.challenges || []);
        }
      } catch (error) {
        console.error('Failed to fetch progress:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, [user]);

  const markCompleted = async (courseId: string, moduleId: string, xp: number) => {
    const key = `${courseId}:${moduleId}`;
    
    if (completedModules.has(key)) return; // Already completed

    // Optimistic update
    setCompletedModules(prev => new Set(prev).add(key));
    setXp(prev => {
      const newXp = prev + xp;
      setLevel(Math.floor(newXp / 1000) + 1);
      return newXp;
    });

    if (user) {
      try {
        const progressRef = doc(db, 'users', user.id, 'progress', key.replace(':', '_'));
        await setDoc(progressRef, {
          userId: user.id,
          courseId,
          moduleId,
          completedAt: serverTimestamp()
        });

        // Increment score and update streak
        const publicRef = doc(db, 'public_profiles', user.id);
        const lastActivity = new Date().toISOString().split('T')[0];
        const profileDoc = await getDoc(publicRef);
        const profileData = profileDoc.data();
        
        let newStreak = 1;
        if (profileData?.lastActivity === new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().split('T')[0]) {
            newStreak = (profileData.streak || 0) + 1;
        } else if (profileData?.lastActivity === lastActivity) {
            newStreak = profileData.streak || 1;
        }

        await updateDoc(publicRef, {
          xp: increment(xp),
          streak: newStreak,
          lastActivity: lastActivity
        });
        setStreak(newStreak);

      } catch (error) {
        console.error('Failed to save progress:', error);
        // Revert on failure
        setCompletedModules(prev => {
          const newSet = new Set(prev);
          newSet.delete(key);
          return newSet;
        });
        setXp(prev => prev - xp);
      }
    }
  };

  const updateTimeSpent = async (courseId: string, timeInSeconds: number) => {
    if (!user) return;
    
    // Optimistic update
    setUser(prev => {
      if (!prev) return prev;
      return {
        ...prev,
        timeSpent: {
          ...prev.timeSpent,
          [courseId]: (prev.timeSpent?.[courseId] || 0) + timeInSeconds
        }
      };
    });

    try {
      const userRef = doc(db, 'users', user.id);
      await setDoc(userRef, {
        timeSpent: {
          [courseId]: increment(timeInSeconds)
        }
      }, { merge: true });
    } catch (error) {
      console.error('Failed to update time spent:', error);
      // Revert optimistic update on failure
      setUser(prev => {
        if (!prev) return prev;
        return {
          ...prev,
          timeSpent: {
            ...prev.timeSpent,
            [courseId]: (prev.timeSpent?.[courseId] || 0) - timeInSeconds
          }
        };
      });
    }
  };

  const isCompleted = (courseId: string, moduleId: string) => {
    return completedModules.has(`${courseId}:${moduleId}`);
  };

  return (
    <ProgressContext.Provider value={{ completedModules, markCompleted, isCompleted, updateTimeSpent, loading, xp, level, streak, badges, challenges }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
