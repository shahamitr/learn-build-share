import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, Bot, ArrowRight, Container, Workflow, CheckCircle2, ShieldCheck, Sparkles, Shield, Rocket, Gitlab, Box, Zap, Terminal, Cloud, Database, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useProgress } from '../context/ProgressContext';
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
import { linuxCurriculum } from '../data/linux-curriculum';
import { awsCurriculum } from '../data/aws-curriculum';
import { sqlCurriculum } from '../data/sql-curriculum';

export default function TutorialsLanding() {
  const { isCompleted } = useProgress();
  const [searchTerm, setSearchTerm] = useState('');

  const courses = [
    { id: 'git', title: 'Mastering Git', icon: <Github className="w-8 h-8" />, description: 'From basic commands to advanced workflows.', link: '/tutorials/git', bgColor: 'bg-orange-100', textColor: 'text-orange-600', curriculum: gitCurriculum },
    { id: 'ai', title: 'AI-Assisted Development', icon: <Bot className="w-8 h-8" />, description: 'Learn to use AI tools effectively.', link: '/tutorials/ai', bgColor: 'bg-indigo-100', textColor: 'text-indigo-600', curriculum: aiCurriculum },
    { id: 'docker', title: 'Docker Fundamentals', icon: <Container className="w-8 h-8" />, description: 'Master containers and images.', link: '/tutorials/docker', bgColor: 'bg-blue-100', textColor: 'text-blue-600', curriculum: dockerCurriculum },
    { id: 'github', title: 'GitHub Fundamentals', icon: <Github className="w-8 h-8" />, description: 'Learn GitHub for collaboration.', link: '/tutorials/github', bgColor: 'bg-purple-100', textColor: 'text-purple-600', curriculum: githubCurriculum },
    { id: 'github-actions', title: 'GitHub Actions', icon: <Workflow className="w-8 h-8" />, description: 'Automate your workflows.', link: '/tutorials/github-actions', bgColor: 'bg-emerald-100', textColor: 'text-emerald-600', curriculum: githubActionsCurriculum },
    { id: 'manual-testing', title: 'Manual Testing', icon: <ShieldCheck className="w-8 h-8" />, description: 'Core concepts of software testing.', link: '/tutorials/manual-testing', bgColor: 'bg-pink-100', textColor: 'text-pink-600', curriculum: manualTestingCurriculum },
    { id: 'prompt-engineering', title: 'Prompt Engineering', icon: <Sparkles className="w-8 h-8" />, description: 'Master the art of prompting.', link: '/tutorials/prompt-engineering', bgColor: 'bg-yellow-100', textColor: 'text-yellow-600', curriculum: promptEngineeringCurriculum },
    { id: 'cybersecurity', title: 'Cybersecurity Fundamentals', icon: <Shield className="w-8 h-8" />, description: 'Learn core security concepts.', link: '/tutorials/cybersecurity', bgColor: 'bg-red-100', textColor: 'text-red-600', curriculum: cybersecurityCurriculum },
    { id: 'antigravity', title: 'Working with Antigravity', icon: <Rocket className="w-8 h-8" />, description: 'Basics of the Antigravity framework.', link: '/tutorials/antigravity', bgColor: 'bg-cyan-100', textColor: 'text-cyan-600', curriculum: antigravityCurriculum },
    { id: 'gitlab', title: 'GitLab CI/CD', icon: <Gitlab className="w-8 h-8" />, description: 'Master GitLab CI/CD pipelines.', link: '/tutorials/gitlab', bgColor: 'bg-orange-50', textColor: 'text-orange-600', curriculum: gitlabCurriculum },
    { id: 'kubernetes', title: 'Kubernetes Fundamentals', icon: <Box className="w-8 h-8" />, description: 'Container orchestration basics.', link: '/tutorials/kubernetes', bgColor: 'bg-blue-50', textColor: 'text-blue-600', curriculum: kubernetesCurriculum },
    { id: 'rust', title: 'Rust Programming', icon: <Zap className="w-8 h-8" />, description: 'Fast, safe, memory-efficient.', link: '/tutorials/rust', bgColor: 'bg-orange-50', textColor: 'text-orange-700', curriculum: rustCurriculum },
    { id: 'linux', title: 'Linux Basics', icon: <Terminal className="w-8 h-8" />, description: 'Fundamental Linux concepts.', link: '/tutorials/linux', bgColor: 'bg-slate-100', textColor: 'text-slate-700', curriculum: linuxCurriculum },
    { id: 'aws', title: 'AWS Cloud Practitioner', icon: <Cloud className="w-8 h-8" />, description: 'Fundamental cloud concepts.', link: '/tutorials/aws', bgColor: 'bg-amber-100', textColor: 'text-amber-600', curriculum: awsCurriculum },
    { id: 'sql', title: 'SQL Basics', icon: <Database className="w-8 h-8" />, description: 'Relational database basics.', link: '/tutorials/sql', bgColor: 'bg-sky-100', textColor: 'text-sky-600', curriculum: sqlCurriculum },
  ];

  const getCourseProgress = (courseId: string, curriculum: any) => {
    const allModules = curriculum.flatMap((l: any) => l.modules);
    const total = allModules.length;
    const completed = allModules.filter((m: any) => isCompleted(courseId, m.id)).length;
    return { total, completed, percentage: total === 0 ? 0 : Math.round((completed / total) * 100) };
  };

  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold text-slate-900 mb-6"
          >
            Choose Your Path
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto mb-12"
          >
            Select a curriculum to start learning and build your skills.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative max-w-lg mx-auto"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-lg"
            />
          </motion.div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredCourses.map((course) => {
              const progress = getCourseProgress(course.id, course.curriculum);
              return (
                <motion.div 
                  key={course.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -10 }}
                >
                  <Link to={course.link} className="group block h-full">
                    <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all h-full flex flex-col">
                      <div className="flex items-center justify-between mb-8">
                        <div className={`w-16 h-16 ${course.bgColor} ${course.textColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          {course.icon}
                        </div>
                        {progress.percentage > 0 && (
                          <div className="flex flex-col items-end">
                            <span className={`text-sm font-bold ${course.textColor}`}>{progress.percentage}%</span>
                            <div className={`w-20 h-1.5 ${course.bgColor} rounded-full mt-1 overflow-hidden`}>
                              <div className={`h-full ${course.textColor.replace('text-', 'bg-')} rounded-full`} style={{ width: `${progress.percentage}%` }}></div>
                            </div>
                          </div>
                        )}
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                        {course.title}
                      </h2>
                      <p className="text-slate-600 mb-8 flex-grow text-lg">
                        {course.description}
                      </p>
                      <div className={`flex items-center ${course.textColor} font-semibold text-lg`}>
                        Start Course <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
