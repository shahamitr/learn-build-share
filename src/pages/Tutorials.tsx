import { Link, useParams, useNavigate } from 'react-router-dom';
import { gitCurriculum } from '../data/git-curriculum';
import { aiCurriculum } from '../data/ai-curriculum';
import { dockerCurriculum } from '../data/docker-curriculum';
import { githubCurriculum } from '../data/github-curriculum';
import { githubActionsCurriculum } from '../data/github-actions-curriculum';
import { BookOpen, ChevronRight, GitBranch, Terminal, Shield, Zap, Bot, Code, Cpu, Container, Layers, Server, Users, Globe, Lock, Workflow, Play, Settings, Map as MapIcon, List } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import AnimatedMindMap from '../components/AnimatedMindMap';

export default function Tutorials() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  let curriculum;
  let title;
  let description;

  if (courseId === 'ai') {
    curriculum = aiCurriculum;
    title = 'AI-Assisted Development';
    description = 'Master the art of coding with AI. From prompt engineering to advanced architectural design.';
  } else if (courseId === 'docker') {
    curriculum = dockerCurriculum;
    title = 'Docker Fundamentals';
    description = 'Master containers, images, volumes, and networking. Build and deploy applications with Docker.';
  } else if (courseId === 'github') {
    curriculum = githubCurriculum;
    title = 'GitHub Fundamentals';
    description = 'Learn how to use GitHub to store code, collaborate with others, and automate workflows.';
  } else if (courseId === 'github-actions') {
    curriculum = githubActionsCurriculum;
    title = 'GitHub Actions';
    description = 'Automate your software workflows with CI/CD. Build, test, and deploy directly from GitHub.';
  } else {
    curriculum = gitCurriculum;
    title = 'Git Mastery Curriculum';
    description = 'From your first commit to advanced history rewriting. Master the tool that powers modern software engineering.';
  }

  const handleModuleClick = (moduleId: string) => {
    navigate(`/tutorials/${courseId}/${moduleId}`);
  };

  const getIcon = (levelId: string) => {
    if (courseId === 'ai') {
      switch (levelId) {
        case 'beginner': return <Code className="w-6 h-6 text-emerald-600" />;
        case 'intermediate': return <Cpu className="w-6 h-6 text-amber-600" />;
        case 'advanced': return <Bot className="w-6 h-6 text-rose-600" />;
        default: return <Code className="w-6 h-6" />;
      }
    } else if (courseId === 'docker') {
      switch (levelId) {
        case 'beginner': return <Container className="w-6 h-6 text-emerald-600" />;
        case 'intermediate': return <Layers className="w-6 h-6 text-amber-600" />;
        case 'advanced': return <Server className="w-6 h-6 text-rose-600" />;
        default: return <Container className="w-6 h-6" />;
      }
    } else if (courseId === 'github') {
      switch (levelId) {
        case 'beginner': return <Users className="w-6 h-6 text-emerald-600" />;
        case 'intermediate': return <Globe className="w-6 h-6 text-amber-600" />;
        case 'advanced': return <Lock className="w-6 h-6 text-rose-600" />;
        default: return <Users className="w-6 h-6" />;
      }
    } else if (courseId === 'github-actions') {
      switch (levelId) {
        case 'beginner': return <Play className="w-6 h-6 text-emerald-600" />;
        case 'intermediate': return <Workflow className="w-6 h-6 text-amber-600" />;
        case 'advanced': return <Settings className="w-6 h-6 text-rose-600" />;
        default: return <Workflow className="w-6 h-6" />;
      }
    } else {
      switch (levelId) {
        case 'beginner': return <Terminal className="w-6 h-6 text-emerald-600" />;
        case 'intermediate': return <GitBranch className="w-6 h-6 text-amber-600" />;
        case 'advanced': return <Shield className="w-6 h-6 text-rose-600" />;
        default: return <Terminal className="w-6 h-6" />;
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Link to="/tutorials" className="text-indigo-600 font-medium hover:underline mb-4 inline-block">
            ← Back to Courses
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            {title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto mb-8"
          >
            {description}
          </motion.p>

          {/* View Toggle */}
          <div className="flex justify-center gap-2 mb-8">
            <button
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                viewMode === 'list' 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'bg-white text-slate-600 hover:bg-slate-100'
              }`}
            >
              <List className="w-4 h-4" />
              List View
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                viewMode === 'map' 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'bg-white text-slate-600 hover:bg-slate-100'
              }`}
            >
              <MapIcon className="w-4 h-4" />
              Mind Map
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {viewMode === 'map' ? (
            <motion.div
              key="map"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="mb-12"
            >
              <AnimatedMindMap 
                title={title} 
                data={curriculum} 
                onModuleClick={handleModuleClick}
              />
            </motion.div>
          ) : (
            <motion.div 
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid gap-12"
            >
              {curriculum.map((level, index) => (
                <motion.div 
                  key={level.id} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
                >
                  <div className={`p-6 border-b border-slate-100 ${
                    level.id === 'beginner' ? 'bg-emerald-50/50' :
                    level.id === 'intermediate' ? 'bg-amber-50/50' :
                    'bg-rose-50/50'
                  }`}>
                    <div className="flex items-center gap-3 mb-2">
                      {getIcon(level.id)}
                      <h2 className="text-2xl font-bold text-slate-900">{level.title || level.level}</h2>
                    </div>
                    <p className="text-slate-600">{level.description}</p>
                  </div>
                  
                  <div className="divide-y divide-slate-100">
                    {level.modules.map((module) => (
                      <Link 
                        key={module.id} 
                        to={`/tutorials/${courseId}/${module.id}`}
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
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
