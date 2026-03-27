import { Link } from 'react-router-dom';
import { Github, Bot, ArrowRight, Container, Workflow } from 'lucide-react';
import { motion } from 'motion/react';

export default function TutorialsLanding() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Choose Your Path
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Select a curriculum to start learning.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {/* Git Course */}
          <motion.div variants={item}>
            <Link to="/tutorials/git" className="group block h-full">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-orange-200 transition-all h-full flex flex-col">
                <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Github className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                  Mastering Git
                </h2>
                <p className="text-slate-600 mb-6 flex-grow text-lg">
                  From basic commands to advanced workflows. Learn how to manage version control like a pro.
                </p>
                <div className="flex items-center text-orange-600 font-medium text-lg">
                  Start Course <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* AI Course */}
          <motion.div variants={item}>
            <Link to="/tutorials/ai" className="group block h-full">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all h-full flex flex-col">
                <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Bot className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  AI-Assisted Development
                </h2>
                <p className="text-slate-600 mb-6 flex-grow text-lg">
                  Learn to use AI tools effectively for coding, debugging, testing, and system design.
                </p>
                <div className="flex items-center text-indigo-600 font-medium text-lg">
                  Start Course <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Docker Course */}
          <motion.div variants={item}>
            <Link to="/tutorials/docker" className="group block h-full">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all h-full flex flex-col">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Container className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Docker Fundamentals
                </h2>
                <p className="text-slate-600 mb-6 flex-grow text-lg">
                  Master containers, images, volumes, and networking. Build and deploy applications with Docker.
                </p>
                <div className="flex items-center text-blue-600 font-medium text-lg">
                  Start Course <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* GitHub Course */}
          <motion.div variants={item}>
            <Link to="/tutorials/github" className="group block h-full">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-purple-200 transition-all h-full flex flex-col">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Github className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                  GitHub Fundamentals
                </h2>
                <p className="text-slate-600 mb-6 flex-grow text-lg">
                  Learn how to use GitHub to store code, collaborate with others, and automate workflows.
                </p>
                <div className="flex items-center text-purple-600 font-medium text-lg">
                  Start Course <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* GitHub Actions Course */}
          <motion.div variants={item}>
            <Link to="/tutorials/github-actions" className="group block h-full">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all h-full flex flex-col">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Workflow className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  GitHub Actions
                </h2>
                <p className="text-slate-600 mb-6 flex-grow text-lg">
                  Automate your software workflows with CI/CD. Build, test, and deploy directly from GitHub.
                </p>
                <div className="flex items-center text-emerald-600 font-medium text-lg">
                  Start Course <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
