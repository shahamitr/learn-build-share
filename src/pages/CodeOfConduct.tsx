import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CodeOfConduct() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <div className="flex-1 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
        <Link to="/" className="inline-flex items-center text-sm text-indigo-600 hover:underline mb-8">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Home
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Code of Conduct</h1>
          
          <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-indigo-600">
            <h2>Our Pledge</h2>
            <p>
              We as members, contributors, and leaders pledge to make participation in our
              community a harassment-free experience for everyone, regardless of age, body
              size, visible or invisible disability, ethnicity, sex characteristics, gender
              identity and expression, level of experience, education, socio-economic status,
              nationality, personal appearance, race, religion, or sexual identity
              and orientation.
            </p>
            <p>
              We pledge to act and interact in ways that contribute to an open, welcoming,
              diverse, inclusive, and healthy community.
            </p>

            <h2>Our Standards</h2>
            <p>Examples of behavior that contributes to a positive environment for our community include:</p>
            <ul>
              <li>Demonstrating empathy and kindness toward other people</li>
              <li>Being respectful of differing opinions, viewpoints, and experiences</li>
              <li>Giving and gracefully accepting constructive feedback</li>
              <li>Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience</li>
              <li>Focusing on what is best not just for us as individuals, but for the overall community</li>
            </ul>

            <p>Examples of unacceptable behavior include:</p>
            <ul>
              <li>The use of sexualized language or imagery, and sexual attention or advances of any kind</li>
              <li>Trolling, insulting or derogatory comments, and personal or political attacks</li>
              <li>Public or private harassment</li>
              <li>Publishing others' private information, such as a physical or email address, without their explicit permission</li>
              <li>Other conduct which could reasonably be considered inappropriate in a professional setting</li>
            </ul>

            <h2>Enforcement Responsibilities</h2>
            <p>
              Community leaders are responsible for clarifying and enforcing our standards of
              acceptable behavior and will take appropriate and fair corrective action in
              response to any behavior that they deem inappropriate, threatening, offensive,
              or harmful.
            </p>

            <h2>Scope</h2>
            <p>
              This Code of Conduct applies within all community spaces, and also applies when
              an individual is officially representing the community in public spaces.
              Examples of representing our community include using an official e-mail address,
              posting via an official social media account, or acting as an appointed
              representative at an online or offline event.
            </p>
          </div>
        </motion.div>
      </div>
      </div>
      <Footer />
    </div>
  );
}
