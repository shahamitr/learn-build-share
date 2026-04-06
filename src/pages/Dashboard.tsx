import { useAuth } from '../context/AuthContext';
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
import { Link, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BookOpen, CheckCircle2, Trophy, Clock, ArrowRight, Flame, Award } from 'lucide-react';
import { motion } from 'motion/react';
import Leaderboard from '../components/Leaderboard';

export default function Dashboard() {
  const { user, loading } = useAuth();
  const { isCompleted } = useProgress();

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  const getCourseProgress = (courseId: string, curriculum: any) => {
    const allModules = curriculum.flatMap((l: any) => l.modules);
    const total = allModules.length;
    const completed = allModules.filter((m: any) => isCompleted(courseId, m.id)).length;
    const timeSpentSeconds = user?.timeSpent?.[courseId] || 0;
    const timeSpentMinutes = Math.floor(timeSpentSeconds / 60);
    return { 
      total, 
      completed, 
      percentage: total === 0 ? 0 : Math.round((completed / total) * 100),
      timeSpentMinutes
    };
  };

  const courses = [
    { id: 'git', title: 'Git Mastery', progress: getCourseProgress('git', gitCurriculum), color: 'orange' },
    { id: 'ai', title: 'AI-Assisted Dev', progress: getCourseProgress('ai', aiCurriculum), color: 'indigo' },
    { id: 'docker', title: 'Docker Fundamentals', progress: getCourseProgress('docker', dockerCurriculum), color: 'blue' },
    { id: 'github', title: 'GitHub Fundamentals', progress: getCourseProgress('github', githubCurriculum), color: 'purple' },
    { id: 'github-actions', title: 'GitHub Actions', progress: getCourseProgress('github-actions', githubActionsCurriculum), color: 'emerald' },
    { id: 'manual-testing', title: 'Manual Testing', progress: getCourseProgress('manual-testing', manualTestingCurriculum), color: 'rose' },
    { id: 'prompt-engineering', title: 'Prompt Engineering', progress: getCourseProgress('prompt-engineering', promptEngineeringCurriculum), color: 'violet' },
    { id: 'cybersecurity', title: 'Cybersecurity Fundamentals', progress: getCourseProgress('cybersecurity', cybersecurityCurriculum), color: 'red' },
    { id: 'antigravity', title: 'Working with Antigravity', progress: getCourseProgress('antigravity', antigravityCurriculum), color: 'cyan' },
    { id: 'gitlab', title: 'GitLab CI/CD', progress: getCourseProgress('gitlab', gitlabCurriculum), color: 'orange' },
    { id: 'kubernetes', title: 'Kubernetes Fundamentals', progress: getCourseProgress('kubernetes', kubernetesCurriculum), color: 'blue' },
    { id: 'rust', title: 'Rust Programming', progress: getCourseProgress('rust', rustCurriculum), color: 'orange' },
    { id: 'linux', title: 'Linux Basics', progress: getCourseProgress('linux', linuxCurriculum), color: 'slate' },
    { id: 'aws', title: 'AWS Cloud Practitioner', progress: getCourseProgress('aws', awsCurriculum), color: 'amber' },
    { id: 'sql', title: 'SQL Basics', progress: getCourseProgress('sql', sqlCurriculum), color: 'sky' },
  ];

  const totalCompletedModules = courses.reduce((acc, course) => acc + course.progress.completed, 0);
  const totalModules = courses.reduce((acc, course) => acc + course.progress.total, 0);
  const overallProgress = totalModules === 0 ? 0 : Math.round((totalCompletedModules / totalModules) * 100);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Profile Header */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-8 flex flex-col md:flex-row items-center gap-8">
          <img src={user.avatar} alt={user.name} className="w-32 h-32 rounded-full border-4 border-indigo-50 shadow-md" />
          <div className="text-center md:text-left flex-1">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome back, {user.name}!</h1>
            <p className="text-slate-500 mb-6">{user.email}</p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div className="bg-orange-50 text-orange-700 px-4 py-2 rounded-xl flex items-center gap-2 font-medium">
                <Flame className="w-5 h-5 text-orange-500" />
                <span>{user.streak || 0} Day Streak</span>
              </div>
              <div className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-xl flex items-center gap-2 font-medium">
                <Trophy className="w-5 h-5 text-indigo-500" />
                <span>{user.score || 0} Points</span>
              </div>
              <div className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-xl flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-5 h-5" />
                <span>{totalCompletedModules} Modules Completed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Course Progress */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Your Learning Paths</h2>
            
            {courses.map((course, index) => (
              <motion.div 
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${course.color}-100 text-${course.color}-600`}>
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{course.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-slate-500">
                        <span>{course.progress.completed} of {course.progress.total} modules</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {course.progress.timeSpentMinutes}m spent</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {course.progress.percentage === 100 && (
                      <Link
                        to={`/certificate/${course.id}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-amber-50 text-amber-700 hover:bg-amber-100"
                      >
                        <Award className="w-4 h-4" />
                        Certificate
                      </Link>
                    )}
                    <Link 
                      to={`/tutorials/${course.id}`}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        course.progress.percentage === 100 
                          ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                          : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                      }`}
                    >
                      {course.progress.percentage === 100 ? 'Review Course' : 'Continue Learning'}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ${
                      course.progress.percentage === 100 ? 'bg-emerald-500' : `bg-${course.color}-500`
                    }`} 
                    style={{ width: `${course.progress.percentage}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar - Stats & Activity */}
          <div className="space-y-6">
            <Leaderboard />

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Overall Progress</h3>
              <div className="relative w-48 h-48 mx-auto mb-4">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#f1f5f9"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#4f46e5"
                    strokeWidth="8"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - overallProgress / 100)}`}
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold text-slate-900">{overallProgress}%</span>
                  <span className="text-sm text-slate-500">Completed</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Logged in</p>
                    <p className="text-xs text-slate-500">Just now</p>
                  </div>
                </div>
                {/* Add more activity items here if you track them in the backend */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Started learning</p>
                    <p className="text-xs text-slate-500">Welcome to the platform!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
