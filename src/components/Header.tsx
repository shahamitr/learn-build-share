import { Link } from 'react-router-dom';
import { Github, LogOut, User as UserIcon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

export default function Header() {
  const { user, loginWithGoogle, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
              LBS
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">Learn Build Share</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/tutorials" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Courses</Link>
            <Link to="/#community" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Community</Link>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            
            {user ? (
              <div className="relative">
                <button 
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-2 focus:outline-none"
                >
                  <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full border border-slate-200" />
                </button>
                
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-100 py-2 z-50">
                    <div className="px-4 py-2 border-b border-slate-100 mb-2">
                      <p className="text-sm font-bold text-slate-900 truncate">{user.name}</p>
                      <p className="text-xs text-slate-500 truncate">{user.email}</p>
                    </div>
                    <Link 
                      to="/dashboard"
                      className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-2 transition-colors"
                      onClick={() => setShowDropdown(false)}
                    >
                      <UserIcon className="w-4 h-4" /> Dashboard
                    </Link>
                    <button 
                      onClick={() => { logout(); setShowDropdown(false); }}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors"
                    >
                      <LogOut className="w-4 h-4" /> Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button 
                onClick={loginWithGoogle}
                className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
