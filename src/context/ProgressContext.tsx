import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { collection, query, getDocs, doc, setDoc, serverTimestamp, increment, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from './AuthContext';

interface ProgressRecord {
  course_id: string;
  module_id: string;
  completed_at: string;
}

interface ProgressContextType {
  completedModules: Set<string>;
  markCompleted: (courseId: string, moduleId: string) => Promise<void>;
  isCompleted: (courseId: string, moduleId: string) => boolean;
  updateTimeSpent: (courseId: string, timeInSeconds: number) => Promise<void>;
  loading: boolean;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const { user, setUser } = useAuth();
  const [completedModules, setCompletedModules] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setCompletedModules(new Set());
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
      } catch (error) {
        console.error('Failed to fetch progress:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, [user]);

  const markCompleted = async (courseId: string, moduleId: string) => {
    const key = `${courseId}:${moduleId}`;
    
    if (completedModules.has(key)) return; // Already completed

    // Optimistic update
    setCompletedModules(prev => new Set(prev).add(key));

    if (user) {
      try {
        const progressRef = doc(db, 'users', user.id, 'progress', key.replace(':', '_'));
        await setDoc(progressRef, {
          userId: user.id,
          courseId,
          moduleId,
          completedAt: serverTimestamp()
        });

        // Increment score
        const publicRef = doc(db, 'public_profiles', user.id);
        await updateDoc(publicRef, {
          score: increment(10) // 10 points per module
        });

      } catch (error) {
        console.error('Failed to save progress:', error);
        // Revert on failure
        setCompletedModules(prev => {
          const newSet = new Set(prev);
          newSet.delete(key);
          return newSet;
        });
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
    <ProgressContext.Provider value={{ completedModules, markCompleted, isCompleted, updateTimeSpent, loading }}>
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
