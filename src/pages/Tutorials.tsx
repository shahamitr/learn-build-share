import { Link } from 'react-router-dom';
import { gitCurriculum } from '../data/git-curriculum';
import { BookOpen, ChevronRight, GitBranch, Terminal, Shield, Zap } from 'lucide-react';

export default function Tutorials() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Git Mastery Curriculum</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From your first commit to advanced history rewriting. Master the tool that powers modern software engineering.
          </p>
        </div>

        <div className="grid gap-12">
          {gitCurriculum.map((level) => (
            <div key={level.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className={`p-6 border-b border-slate-100 ${
                level.id === 'beginner' ? 'bg-emerald-50/50' :
                level.id === 'intermediate' ? 'bg-amber-50/50' :
                'bg-rose-50/50'
              }`}>
                <div className="flex items-center gap-3 mb-2">
                  {level.id === 'beginner' && <Terminal className="w-6 h-6 text-emerald-600" />}
                  {level.id === 'intermediate' && <GitBranch className="w-6 h-6 text-amber-600" />}
                  {level.id === 'advanced' && <Shield className="w-6 h-6 text-rose-600" />}
                  <h2 className="text-2xl font-bold text-slate-900">{level.level}</h2>
                </div>
                <p className="text-slate-600">{level.description}</p>
              </div>
              
              <div className="divide-y divide-slate-100">
                {level.modules.map((module) => (
                  <Link 
                    key={module.id} 
                    to={`/tutorials/${module.id}`}
                    className="flex items-center justify-between p-6 hover:bg-slate-50 transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-mono text-sm group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">
                        {module.title.split('.')[0]}
                      </div>
                      <span className="font-medium text-slate-700 group-hover:text-slate-900">
                        {module.title.split('. ')[1]}
                      </span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
