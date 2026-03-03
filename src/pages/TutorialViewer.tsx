import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { gitCurriculum } from '../data/git-curriculum';
import { ArrowLeft, Loader2 } from 'lucide-react';
import 'highlight.js/styles/github-dark.css'; // You might need to add this to index.html or import differently if not available

export default function TutorialViewer() {
  const { moduleId } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const module = gitCurriculum
    .flatMap(l => l.modules)
    .find(m => m.id === moduleId);

  useEffect(() => {
    if (!module) {
      setError('Tutorial not found');
      setLoading(false);
      return;
    }

    fetch(module.path)
      .then(res => {
        if (!res.ok) throw new Error('Failed to load content');
        return res.text();
      })
      .then(text => {
        setContent(text);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Failed to load tutorial content. Please try again later.');
        setLoading(false);
      });
  }, [module]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  if (error || !module) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold text-slate-900">Oops!</h1>
        <p className="text-slate-600">{error}</p>
        <Link to="/tutorials" className="text-indigo-600 hover:underline">
          Back to Tutorials
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          to="/tutorials" 
          className="inline-flex items-center text-sm text-slate-500 hover:text-indigo-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Curriculum
        </Link>
        
        <article className="prose prose-slate max-w-none prose-headings:font-bold prose-h1:text-4xl prose-pre:bg-slate-900 prose-pre:text-slate-50">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]} 
            rehypePlugins={[rehypeHighlight]}
          >
            {content}
          </ReactMarkdown>
        </article>

        <div className="mt-12 pt-8 border-t border-slate-200 flex justify-between">
          <Link to="/tutorials" className="text-indigo-600 font-medium hover:underline">
            Complete Curriculum
          </Link>
        </div>
      </div>
    </div>
  );
}
