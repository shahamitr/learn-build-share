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
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-6 border border-indigo-100"
            >
              🚀 Open Source Community
            </motion.span>
            <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight">
              Learn together.<br />
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-indigo-600"
              >
                Build faster.
              </motion.span><br />
              Share with the world.
            </h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto">
              A collaborative ecosystem where developers of all levels come together to master new technologies, build meaningful projects, and share their knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/tutorials" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-indigo-600 rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 hover:shadow-indigo-300">
                  Start Learning
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
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
                icon: <BookOpen className="w-8 h-8 text-indigo-600" />,
                title: "Learn",
                description: "Access curated learning paths, interactive tutorials, and expert-led workshops designed to accelerate your growth."
              },
              {
                icon: <Hammer className="w-8 h-8 text-indigo-600" />,
                title: "Build",
                description: "Put your skills to the test by contributing to real-world open source projects and building your portfolio."
              },
              {
                icon: <Share2 className="w-8 h-8 text-indigo-600" />,
                title: "Share",
                description: "Give back to the community by mentoring others, writing articles, and sharing your project insights."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-50 transition-all"
              >
                <div className="w-16 h-16 bg-white rounded-2xl border border-slate-200 flex items-center justify-center mb-8 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
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
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
              Start Your Journey
            </h2>
            <p className="text-xl text-slate-600">
              Dive into our comprehensive guides and master essential tools.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Terminal className="w-6 h-6" />,
                title: "Git Essentials",
                description: "Start here! Learn the basics of version control, commits, and history.",
                link: "/tutorials/git/01-intro",
                bgColor: "bg-emerald-100",
                textColor: "text-emerald-600",
                buttonText: "Start Learning"
              },
              {
                icon: <GitBranch className="w-6 h-6" />,
                title: "Branching & Merging",
                description: "Master feature branches, merge conflicts, and team workflows.",
                link: "/tutorials/git/11-branching-strategy",
                bgColor: "bg-amber-100",
                textColor: "text-amber-600",
                buttonText: "Level Up"
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Advanced Git",
                description: "Deep dive into internals, history rewriting, and complex recovery.",
                link: "/tutorials/git/21-internals",
                bgColor: "bg-rose-100",
                textColor: "text-rose-600",
                buttonText: "Go Deep"
              },
              {
                icon: <Github className="w-6 h-6" />,
                title: "GitHub Fundamentals",
                description: "Collaborate effectively. Master pull requests, issues, and project management.",
                link: "/tutorials/github",
                bgColor: "bg-purple-100",
                textColor: "text-purple-600",
                buttonText: "Start Course"
              },
              {
                icon: <Workflow className="w-6 h-6" />,
                title: "GitHub Actions",
                description: "Automate your workflow. Build CI/CD pipelines to test and deploy your code.",
                link: "/tutorials/github-actions",
                bgColor: "bg-blue-100",
                textColor: "text-blue-600",
                buttonText: "Start Automating"
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -10 }}
              >
                <Link to={card.link} className="group block h-full">
                  <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all h-full flex flex-col">
                    <div className={`w-16 h-16 ${card.bgColor} ${card.textColor} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                      {card.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 mb-8 flex-grow text-lg">
                      {card.description}
                    </p>
                    <div className={`flex items-center ${card.textColor} font-semibold text-lg`}>
                      {card.buttonText} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-12 sm:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-5xl font-extrabold text-white mb-8">
                Join our growing community
              </h2>
              <p className="text-slate-400 text-xl mb-12 leading-relaxed">
                Be part of a diverse group of developers, designers, and creators. 
                Follow our Code of Conduct to ensure a safe space for everyone.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/code-of-conduct" className="px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold text-lg hover:bg-indigo-50 transition-colors">
                  Read Code of Conduct
                </Link>
                <Link to="/contributing" className="px-8 py-4 bg-slate-800 text-white rounded-xl font-semibold text-lg hover:bg-slate-700 transition-colors">
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
