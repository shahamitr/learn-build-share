import { useState, useEffect } from 'react';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { Trophy, Medal } from 'lucide-react';

interface LeaderboardUser {
  id: string;
  name: string;
  avatar: string;
  score: number;
  streak: number;
}

export default function Leaderboard() {
  const [leaders, setLeaders] = useState<LeaderboardUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const q = query(
          collection(db, 'public_profiles'),
          orderBy('score', 'desc'),
          limit(10)
        );
        const snapshot = await getDocs(q);
        const fetchedLeaders: LeaderboardUser[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          fetchedLeaders.push({
            id: doc.id,
            name: data.name,
            avatar: data.avatar,
            score: data.score || 0,
            streak: data.streak || 0
          });
        });
        setLeaders(fetchedLeaders);
      } catch (error) {
        console.error('Failed to fetch leaderboard:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaders();
  }, []);

  if (loading) {
    return <div className="animate-pulse flex space-x-4 p-4"><div className="flex-1 space-y-4 py-1"><div className="h-4 bg-slate-200 rounded w-3/4"></div><div className="space-y-2"><div className="h-4 bg-slate-200 rounded"></div><div className="h-4 bg-slate-200 rounded w-5/6"></div></div></div></div>;
  }

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="w-6 h-6 text-yellow-500" />
        <h3 className="text-lg font-bold text-slate-900">Leaderboard</h3>
      </div>
      <div className="space-y-4">
        {leaders.map((leader, index) => (
          <div key={leader.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-8 text-center font-bold text-slate-400">
                {index === 0 ? <Medal className="w-6 h-6 text-yellow-500 mx-auto" /> : 
                 index === 1 ? <Medal className="w-6 h-6 text-slate-400 mx-auto" /> : 
                 index === 2 ? <Medal className="w-6 h-6 text-amber-600 mx-auto" /> : 
                 `#${index + 1}`}
              </div>
              <img src={leader.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + leader.name} alt={leader.name} className="w-10 h-10 rounded-full border border-slate-200" />
              <div>
                <p className="font-semibold text-slate-900">{leader.name}</p>
                <p className="text-xs text-slate-500">{leader.streak} day streak</p>
              </div>
            </div>
            <div className="font-mono font-bold text-indigo-600">
              {leader.score} pts
            </div>
          </div>
        ))}
        {leaders.length === 0 && (
          <p className="text-center text-slate-500 py-4">No leaders yet. Start learning to get on the board!</p>
        )}
      </div>
    </div>
  );
}
