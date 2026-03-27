import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { gitCurriculum } from '../data/git-curriculum';
import { aiCurriculum } from '../data/ai-curriculum';
import { dockerCurriculum } from '../data/docker-curriculum';
import { githubCurriculum } from '../data/github-curriculum';
import { githubActionsCurriculum } from '../data/github-actions-curriculum';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';
import 'highlight.js/styles/github-dark.css';

export default function TutorialViewer() {
  const { courseId, moduleId } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  let curriculum;
  if (courseId === 'ai') {
    curriculum = aiCurriculum;
  } else if (courseId === 'docker') {
    curriculum = dockerCurriculum;
  } else if (courseId === 'github') {
    curriculum = githubCurriculum;
  } else if (courseId === 'github-actions') {
    curriculum = githubActionsCurriculum;
  } else {
    curriculum = gitCurriculum;
  }

  const module = curriculum
    .flatMap(l => l.modules)
    .find(m => m.id === moduleId);

  useEffect(() => {
    if (!module) {
      setError('Tutorial not found');
      setLoading(false);
      return;
    }

    const baseUrl = import.meta.env.BASE_URL.endsWith('/') 
      ? import.meta.env.BASE_URL.slice(0, -1) 
      : import.meta.env.BASE_URL;
    const fetchPath = `${baseUrl}${module.path}`;

    setLoading(true);
    fetch(fetchPath)
      .then(res => {
        if (!res.ok) throw new Error('Failed to load content');
        const contentType = res.headers.get('content-type');
        if (contentType && contentType.includes('text/html')) {
          throw new Error('Content coming soon');
        }
        return res.text();
      })
      .then(text => {
        if (text.trim().startsWith('<!doctype html>') || text.trim().startsWith('<!DOCTYPE html>')) {
             throw new Error('Content coming soon');
        }
        setContent(text);
        setLoading(false);
      })
      .catch(err => {
        console.warn(err);
        setError(err.message === 'Content coming soon' ? 'This tutorial is currently being written. Check back soon!' : 'Failed to load tutorial content.');
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
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-screen flex flex-col items-center justify-center gap-4"
      >
        <h1 className="text-2xl font-bold text-slate-900">Oops!</h1>
        <p className="text-slate-600">{error}</p>
        <Link to={`/tutorials/${courseId}`} className="text-indigo-600 hover:underline">
          Back to Curriculum
        </Link>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          to={`/tutorials/${courseId}`}
          className="inline-flex items-center text-sm text-slate-500 hover:text-indigo-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Curriculum
        </Link>
        
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-slate max-w-none prose-headings:font-bold prose-h1:text-4xl prose-pre:bg-slate-900 prose-pre:text-slate-50"
        >
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]} 
            rehypePlugins={[rehypeHighlight]}
          >
            {content}
          </ReactMarkdown>
        </motion.article>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-slate-200 flex justify-between"
        >
          <Link to={`/tutorials/${courseId}`} className="text-indigo-600 font-medium hover:underline">
            Complete Curriculum
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
