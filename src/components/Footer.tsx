import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white text-sm font-bold">
              LBS
            </div>
            <span className="font-bold text-lg text-slate-900">Learn Build Share</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600">
            <Link to="/code-of-conduct" className="hover:text-indigo-600 transition-colors">Code of Conduct</Link>
            <Link to="/contributing" className="hover:text-indigo-600 transition-colors">Contributing</Link>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors">GitHub</a>
          </div>

          <div className="text-slate-500 text-sm">
            © 2026 Learn Build Share.
          </div>
        </div>
      </div>
    </footer>
  );
}
