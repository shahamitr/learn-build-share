import { motion } from 'motion/react';
import { BookOpen, Hammer, Share2, Github, ArrowRight, Terminal, GitBranch, Shield, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-6 border border-indigo-100">
              Open Source Community
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-slate-900 mb-8">
              Learn together.<br />
              <span className="text-indigo-600">Build faster.</span><br />
              Share with the world.
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              A collaborative ecosystem where developers of all levels come together to master new technologies, build meaningful projects, and share their knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tutorials" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 hover:shadow-indigo-300">
                Start Learning
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/tutorials" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all">
                View Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <BookOpen className="w-6 h-6 text-indigo-600" />,
                title: "Learn",
                description: "Access curated learning paths, interactive tutorials, and expert-led workshops designed to accelerate your growth."
              },
              {
                icon: <Hammer className="w-6 h-6 text-indigo-600" />,
                title: "Build",
                description: "Put your skills to the test by contributing to real-world open source projects and building your portfolio."
              },
              {
                icon: <Share2 className="w-6 h-6 text-indigo-600" />,
                title: "Share",
                description: "Give back to the community by mentoring others, writing articles, and sharing your project insights."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-50 transition-all"
              >
                <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section id="tutorials" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-slate-900 mb-4"
            >
              Start Your Journey
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600"
            >
              Dive into our comprehensive guides and master essential tools.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Beginner Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link to="/tutorials/git/01-intro" className="group block h-full">
                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all h-full flex flex-col">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    Git Essentials
                  </h3>
                  <p className="text-slate-600 mb-6 flex-grow">
                    Start here! Learn the basics of version control, commits, and history.
                  </p>
                  <div className="flex items-center text-emerald-600 font-medium">
                    Start Learning <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Intermediate Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/tutorials/git/11-branching-strategy" className="group block h-full">
                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-200 transition-all h-full flex flex-col">
                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <GitBranch className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                    Branching & Merging
                  </h3>
                  <p className="text-slate-600 mb-6 flex-grow">
                    Master feature branches, merge conflicts, and team workflows.
                  </p>
                  <div className="flex items-center text-amber-600 font-medium">
                    Level Up <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Advanced Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/tutorials/git/21-internals" className="group block h-full">
                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-rose-200 transition-all h-full flex flex-col">
                  <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-rose-600 transition-colors">
                    Advanced Git
                  </h3>
                  <p className="text-slate-600 mb-6 flex-grow">
                    Deep dive into internals, history rewriting, and complex recovery.
                  </p>
                  <div className="flex items-center text-rose-600 font-medium">
                    Go Deep <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* GitHub Fundamentals Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link to="/tutorials/github" className="group block h-full">
                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-purple-200 transition-all h-full flex flex-col">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Github className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                    GitHub Fundamentals
                  </h3>
                  <p className="text-slate-600 mb-6 flex-grow">
                    Collaborate effectively. Master pull requests, issues, and project management.
                  </p>
                  <div className="flex items-center text-purple-600 font-medium">
                    Start Course <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* GitHub Actions Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/tutorials/github-actions" className="group block h-full">
                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all h-full flex flex-col">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Workflow className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    GitHub Actions
                  </h3>
                  <p className="text-slate-600 mb-6 flex-grow">
                    Automate your workflow. Build CI/CD pipelines to test and deploy your code.
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    Start Automating <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-12 sm:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Join our growing community
              </h2>
              <p className="text-slate-400 text-lg mb-10">
                Be part of a diverse group of developers, designers, and creators. 
                Follow our Code of Conduct to ensure a safe space for everyone.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/code-of-conduct" className="px-6 py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-indigo-50 transition-colors">
                  Read Code of Conduct
                </Link>
                <Link to="/contributing" className="px-6 py-3 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-700 transition-colors">
                  Contribution Guidelines
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
