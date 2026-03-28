import { Link, useParams, useNavigate } from 'react-router-dom';
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
import { BookOpen, ChevronRight, GitBranch, Terminal, Shield, Zap, Bot, Code, Cpu, Container, Layers, Server, Users, Globe, Lock, Workflow, Play, Settings, Map as MapIcon, List, CheckCircle2, Circle, Clock, Award, ShieldCheck, Sparkles, Rocket, Gitlab, Box } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import AnimatedMindMap from '../components/AnimatedMindMap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';

export default function Tutorials() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const { isCompleted } = useProgress();
  const { user } = useAuth();

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
  } else if (courseId === 'manual-testing') {
    curriculum = manualTestingCurriculum;
    title = 'Manual Testing';
    description = 'Learn the core concepts of software testing, writing test cases, and defect management.';
  } else if (courseId === 'prompt-engineering') {
    curriculum = promptEngineeringCurriculum;
    title = 'Prompt Engineering';
    description = 'Master the art of communicating with LLMs. Learn few-shot prompting and chain-of-thought.';
  } else if (courseId === 'cybersecurity') {
    curriculum = cybersecurityCurriculum;
    title = 'Cybersecurity Fundamentals';
    description = 'Learn the core concepts of information security, encryption, and web application vulnerabilities.';
  } else if (courseId === 'antigravity') {
    curriculum = antigravityCurriculum;
    title = 'Working with Antigravity';
    description = 'Learn the basics of working with the Antigravity framework, routing, and state management.';
  } else if (courseId === 'gitlab') {
    curriculum = gitlabCurriculum;
    title = 'GitLab CI/CD';
    description = 'Master GitLab for source control and powerful CI/CD pipelines.';
  } else if (courseId === 'kubernetes') {
    curriculum = kubernetesCurriculum;
    title = 'Kubernetes Fundamentals';
    description = 'Learn container orchestration with Kubernetes. Deploy and scale applications with ease.';
  } else if (courseId === 'rust') {
    curriculum = rustCurriculum;
    title = 'Rust Programming';
    description = 'Learn the Rust programming language. Fast, safe, and memory-efficient.';
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
    } else if (courseId === 'manual-testing') {
      switch (levelId) {
        case 'beginner': return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
        case 'intermediate': return <ShieldCheck className="w-6 h-6 text-amber-600" />;
        case 'advanced': return <ShieldCheck className="w-6 h-6 text-rose-600" />;
        default: return <ShieldCheck className="w-6 h-6" />;
      }
    } else if (courseId === 'prompt-engineering') {
      switch (levelId) {
        case 'beginner': return <Sparkles className="w-6 h-6 text-emerald-600" />;
        case 'intermediate': return <Sparkles className="w-6 h-6 text-amber-600" />;
        case 'advanced': return <Sparkles className="w-6 h-6 text-rose-600" />;
        default: return <Sparkles className="w-6 h-6" />;
      }
    } else if (courseId === 'cybersecurity') {
      switch (levelId) {
        case 'beginner': return <Shield className="w-6 h-6 text-emerald-600" />;
        case 'intermediate': return <Shield className="w-6 h-6 text-amber-600" />;
        case 'advanced': return <Shield className="w-6 h-6 text-rose-600" />;
        default: return <Shield className="w-6 h-6" />;
      }
    } else if (courseId === 'antigravity') {
      switch (levelId) {
        case 'beginner': return <Rocket className="w-6 h-6 text-emerald-600" />;
        case 'intermediate': return <Rocket className="w-6 h-6 text-amber-600" />;
        case 'advanced': return <Rocket className="w-6 h-6 text-rose-600" />;
        default: return <Rocket className="w-6 h-6" />;
      }
    } else if (courseId === 'gitlab') {
      switch (levelId) {
        case 'beginner': return <Gitlab className="w-6 h-6 text-emerald-600" />;
        case 'intermediate': return <Gitlab className="w-6 h-6 text-amber-600" />;
        case 'advanced': return <Gitlab className="w-6 h-6 text-rose-600" />;
        default: return <Gitlab className="w-6 h-6" />;
      }
    } else if (courseId === 'kubernetes') {
      switch (levelId) {
        case 'beginner': return <Box className="w-6 h-6 text-emerald-600" />;
        case 'intermediate': return <Box className="w-6 h-6 text-amber-600" />;
        case 'advanced': return <Box className="w-6 h-6 text-rose-600" />;
        default: return <Box className="w-6 h-6" />;
      }
    } else if (courseId === 'rust') {
      switch (levelId) {
        case 'beginner': return <Zap className="w-6 h-6 text-emerald-600" />;
        case 'intermediate': return <Zap className="w-6 h-6 text-amber-600" />;
        case 'advanced': return <Zap className="w-6 h-6 text-rose-600" />;
        default: return <Zap className="w-6 h-6" />;
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

  const allModules = curriculum.flatMap(l => l.modules);
  const totalModules = allModules.length;
  const completedModules = allModules.filter(m => isCompleted(courseId || '', m.id)).length;
  const progressPercentage = totalModules === 0 ? 0 : Math.round((completedModules / totalModules) * 100);
  const timeSpentSeconds = user?.timeSpent?.[courseId || ''] || 0;
  const timeSpentMinutes = Math.floor(timeSpentSeconds / 60);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
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

          {/* Progress Overview */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm max-w-md mx-auto mb-8"
          >
            <div className="flex justify-between items-end mb-2">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Course Progress</span>
              <span className="text-2xl font-bold text-indigo-600">{progressPercentage}%</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-2">
              <div className="h-full bg-indigo-500 rounded-full transition-all duration-1000" style={{ width: `${progressPercentage}%` }}></div>
            </div>
            <div className="flex justify-between items-center text-sm text-slate-500">
              <span>{completedModules} of {totalModules} modules completed</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {timeSpentMinutes}m spent</span>
            </div>
            {progressPercentage === 100 && (
              <div className="mt-4 pt-4 border-t border-slate-100 flex justify-center">
                <Link
                  to={`/certificate/${courseId}`}
                  className="inline-flex items-center gap-2 px-6 py-2 bg-amber-50 text-amber-700 rounded-lg font-medium hover:bg-amber-100 transition-colors"
                >
                  <Award className="w-5 h-5" />
                  View Certificate
                </Link>
              </div>
            )}
          </motion.div>

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
                    {level.modules.map((module) => {
                      const completed = isCompleted(courseId || '', module.id);
                      return (
                        <Link 
                          key={module.id} 
                          to={`/tutorials/${courseId}/${module.id}`}
                          className="flex items-center justify-between p-6 hover:bg-slate-50 transition-colors group"
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                              completed ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-500 group-hover:bg-indigo-100 group-hover:text-indigo-600'
                            }`}>
                              {completed ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
                            </div>
                            <span className={`font-medium transition-colors ${completed ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'}`}>
                              {module.title}
                            </span>
                          </div>
                          <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}
