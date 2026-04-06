import { useState, useEffect } from 'react';
import { Save, StickyNote } from 'lucide-react';

interface NotesProps {
  courseId: string;
  moduleId: string;
}

export default function Notes({ courseId, moduleId }: NotesProps) {
  const [notes, setNotes] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  const storageKey = `notes-${courseId}-${moduleId}`;

  useEffect(() => {
    const savedNotes = localStorage.getItem(storageKey);
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, [storageKey]);

  const handleSave = () => {
    localStorage.setItem(storageKey, notes);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className="mt-12 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <StickyNote className="w-5 h-5 text-indigo-600" />
          <h3>My Notes</h3>
        </div>
        <button
          onClick={handleSave}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            isSaved ? 'bg-emerald-100 text-emerald-700' : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
          }`}
        >
          <Save className="w-3.5 h-3.5" />
          {isSaved ? 'Saved!' : 'Save Notes'}
        </button>
      </div>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="w-full h-32 p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
        placeholder="Jot down key takeaways or questions..."
      />
    </div>
  );
}
