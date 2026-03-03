import { motion } from 'motion/react';
import { BookOpen, Hammer, Share2, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
                LBS
              </div>
              <span className="font-bold text-xl tracking-tight">Learn Build Share</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Features</a>
              <a href="#community" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Community</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

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
              <button className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all">
                View Documentation
              </button>
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
                <a href="#" className="px-6 py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-indigo-50 transition-colors">
                  Read Code of Conduct
                </a>
                <a href="#" className="px-6 py-3 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-700 transition-colors">
                  Contribution Guidelines
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white text-xs font-bold">
              LBS
            </div>
            <span className="font-semibold text-slate-900">Learn Build Share</span>
          </div>
          <div className="text-slate-500 text-sm">
            © 2024 Learn Build Share. Open Source.
          </div>
        </div>
      </footer>
    </div>
  );
}
