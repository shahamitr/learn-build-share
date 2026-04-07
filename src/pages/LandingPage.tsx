import { motion } from 'motion/react';
import { BookOpen, Hammer, Share2, Github, ArrowRight, Terminal, GitBranch, Shield, Workflow, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight">
              Turn learning into <span className="text-indigo-600">public assets.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto">
              A developer-first platform to document, build, and showcase real-world learning—especially in security & systems. Build your public developer portfolio automatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tutorials" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-indigo-600 rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 hover:shadow-indigo-300">
                🚀 Start Sharing Your Learning
              </Link>
              <Link to="/tutorials" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-700 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all">
                📚 Browse Learning Paths
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learn / Share Sections */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              {
                icon: <BookOpen className="w-8 h-8 text-indigo-600" />,
                title: "📘 Learn",
                description: "Master new technologies with curated learning paths, interactive tutorials, and expert-led workshops."
              },
              {
                icon: <Share2 className="w-8 h-8 text-indigo-600" />,
                title: "🌍 Share",
                description: "Give back to the community by mentoring others, writing articles, and sharing your project insights."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-50 transition-all"
              >
                <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-8">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
