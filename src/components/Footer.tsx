import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white text-xs font-bold">
            LBS
          </div>
          <span className="font-semibold text-slate-900">Learn Build Share</span>
        </div>
        <div className="flex gap-8 text-sm text-slate-500">
          <Link to="/code-of-conduct" className="hover:text-indigo-600 transition-colors">Code of Conduct</Link>
          <Link to="/contributing" className="hover:text-indigo-600 transition-colors">Contributing</Link>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors">GitHub</a>
        </div>
        <div className="text-slate-500 text-sm">
          © 2026 Learn Build Share. Open Source.
        </div>
      </div>
    </footer>
  );
}
