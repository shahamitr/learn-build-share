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
import { manualTestingCurriculum } from '../data/manual-testing-curriculum';
import { promptEngineeringCurriculum } from '../data/prompt-engineering-curriculum';
import { cybersecurityCurriculum } from '../data/cybersecurity-curriculum';
import { antigravityCurriculum } from '../data/antigravity-curriculum';
import { gitlabCurriculum } from '../data/gitlab-curriculum';
import { kubernetesCurriculum } from '../data/kubernetes-curriculum';
import { rustCurriculum } from '../data/rust-curriculum';
import { ArrowLeft, Loader2, PanelRightOpen, PanelRightClose, CheckCircle2, Circle, Check, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import { useRef } from 'react';
import Footer from '../components/Footer';
import InteractiveLab from '../components/InteractiveLab';
import 'highlight.js/styles/github-dark.css';

export default function TutorialViewer() {
  const { courseId, moduleId } = useParams();
  const { isCompleted, markCompleted, updateTimeSpent } = useProgress();
  const { user, loginWithGoogle } = useAuth();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showLab, setShowLab] = useState(true);
  const [isRead, setIsRead] = useState(false);
  const [isLabCompleted, setIsLabCompleted] = useState(false);
  const startTimeRef = useRef(Date.now());

  const isModuleCompleted = courseId && moduleId ? isCompleted(courseId, moduleId) : false;

  useEffect(() => {
    // Reset state when module changes
    setIsRead(false);
    setIsLabCompleted(false);
    startTimeRef.current = Date.now();
    
    return () => {
      // When unmounting or changing modules, update time spent
      if (courseId) {
        const timeSpent = Math.floor((Date.now() - startTimeRef.current) / 1000);
        if (timeSpent > 5) { // Only track if spent more than 5 seconds
          updateTimeSpent(courseId, timeSpent);
        }
      }
    };
  }, [courseId, moduleId, updateTimeSpent]);

  useEffect(() => {
    if (isRead && isLabCompleted && courseId && moduleId && !isModuleCompleted) {
      markCompleted(courseId, moduleId);
    }
  }, [isRead, isLabCompleted, courseId, moduleId, isModuleCompleted, markCompleted]);

  let curriculum;
  if (courseId === 'ai') {
    curriculum = aiCurriculum;
  } else if (courseId === 'docker') {
    curriculum = dockerCurriculum;
  } else if (courseId === 'github') {
    curriculum = githubCurriculum;
  } else if (courseId === 'github-actions') {
    curriculum = githubActionsCurriculum;
  } else if (courseId === 'manual-testing') {
    curriculum = manualTestingCurriculum;
  } else if (courseId === 'prompt-engineering') {
    curriculum = promptEngineeringCurriculum;
  } else if (courseId === 'cybersecurity') {
    curriculum = cybersecurityCurriculum;
  } else if (courseId === 'antigravity') {
    curriculum = antigravityCurriculum;
  } else if (courseId === 'gitlab') {
    curriculum = gitlabCurriculum;
  } else if (courseId === 'kubernetes') {
    curriculum = kubernetesCurriculum;
  } else if (courseId === 'rust') {
    curriculum = rustCurriculum;
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
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  if (error || !module) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-screen flex flex-col items-center justify-center gap-4 bg-slate-50"
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
    <div className="h-screen bg-slate-50 flex flex-col overflow-hidden">
      {/* Top Navigation Bar / Dashboard Header */}
      <header className="bg-white border-b border-slate-200 px-6 h-16 flex items-center justify-between shrink-0 z-20 shadow-sm">
        <div className="flex items-center gap-6">
          <Link 
            to={`/tutorials/${courseId}`}
            className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-all"
            title="Back to Curriculum"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
          <div className="hidden sm:flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{courseId?.replace('-', ' ')}</span>
            <span className="text-sm font-bold text-slate-900 truncate max-w-md">
              {module.title}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
            <div className="flex items-center gap-2">
              {isModuleCompleted ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              ) : (
                <Circle className="w-4 h-4 text-slate-300" />
              )}
              <span className="text-xs font-semibold text-slate-600">
                {isModuleCompleted ? 'Module Completed' : 'In Progress'}
              </span>
            </div>
            <div className="w-24 h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-500 ${isModuleCompleted ? 'w-full bg-emerald-500' : 'w-1/3 bg-indigo-500'}`}
              ></div>
            </div>
          </div>

          <button 
            onClick={() => setShowLab(!showLab)}
            className={`flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-xl transition-all ${
              showLab 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' 
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {showLab ? (
              <><PanelRightClose className="w-4 h-4" /> Hide Lab</>
            ) : (
              <><PanelRightOpen className="w-4 h-4" /> Show Lab</>
            )}
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Pane: Markdown Content */}
        <div className={`flex-1 overflow-y-auto transition-all duration-300 bg-white ${showLab ? 'lg:w-1/2 lg:flex-none border-r border-slate-200' : 'w-full'}`}>
          <div className="max-w-4xl mx-auto px-8 py-12">
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="prose prose-slate max-w-none prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-pre:bg-slate-900 prose-pre:text-slate-50 prose-a:text-indigo-600 hover:prose-a:text-indigo-500 prose-img:rounded-2xl prose-img:shadow-lg"
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
              className="mt-20 pt-10 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6"
            >
              <Link to={`/tutorials/${courseId}`} className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:translate-x-[-4px] transition-transform">
                <ArrowLeft className="w-4 h-4" />
                Return to Curriculum
              </Link>
              
              <div className="flex flex-col items-end gap-4">
                <div className="flex items-center gap-4">
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${isRead || isModuleCompleted ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
                    {isRead || isModuleCompleted ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
                    Reading Completed
                  </div>
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${isLabCompleted || isModuleCompleted ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
                    {isLabCompleted || isModuleCompleted ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
                    Lab Completed
                  </div>
                </div>

                <button
                  onClick={() => setIsRead(true)}
                  disabled={isRead || isModuleCompleted}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                    isRead || isModuleCompleted
                      ? 'bg-emerald-100 text-emerald-700 cursor-not-allowed'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg'
                  }`}
                >
                  {(isRead || isModuleCompleted) ? <Check className="w-5 h-5" /> : <BookOpen className="w-5 h-5" />}
                  {(isRead || isModuleCompleted) ? 'Marked as Read' : 'Mark as Read'}
                </button>
                
                {!isModuleCompleted && (
                  <div className="text-sm text-slate-500 italic">
                    Complete both reading and the lab to finish this module.
                  </div>
                )}
              </div>
            </motion.div>
            
            <div className="mt-20">
              <Footer />
            </div>
          </div>
        </div>

        {/* Right Pane: Interactive Lab */}
        <AnimatePresence initial={false}>
          {showLab && (
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '50%', opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="hidden lg:block bg-slate-50 p-6 overflow-hidden"
            >
              <InteractiveLab 
                courseId={courseId || ''} 
                moduleId={moduleId || ''} 
                onComplete={() => setIsLabCompleted(true)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Mobile Lab Overlay */}
      <AnimatePresence>
        {showLab && (
          <motion.div 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="lg:hidden fixed inset-0 z-50 bg-slate-50 pt-16 pb-4 px-4 flex flex-col"
          >
            <div className="absolute top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between">
              <span className="font-bold text-slate-900">Interactive Lab</span>
              <button 
                onClick={() => setShowLab(false)}
                className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all"
              >
                <ArrowLeft className="w-5 h-5 rotate-[-90deg]" />
              </button>
            </div>
            <div className="flex-1 mt-4">
              <InteractiveLab 
                courseId={courseId || ''} 
                moduleId={moduleId || ''} 
                onComplete={() => setIsLabCompleted(true)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
