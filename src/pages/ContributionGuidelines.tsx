import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContributionGuidelines() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Contribution Guidelines</h1>
          
          <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-indigo-600">
            <p className="lead text-xl text-slate-600 mb-8">
              First off, thank you for considering contributing to Learn Build Share! It's people
              like you that make this community such a great place to learn and grow.
            </p>

            <h2>How Can I Contribute?</h2>
            
            <h3>1. Reporting Bugs</h3>
            <p>
              This section guides you through submitting a bug report. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.
            </p>
            <ul>
              <li>Use a clear and descriptive title for the issue to identify the problem.</li>
              <li>Describe the exact steps which reproduce the problem in as many details as possible.</li>
              <li>Provide specific examples to demonstrate the steps.</li>
            </ul>

            <h3>2. Suggesting Enhancements</h3>
            <p>
              This section guides you through submitting an enhancement suggestion, including completely new features and minor improvements to existing functionality.
            </p>
            <ul>
              <li>Use a clear and descriptive title for the issue to identify the suggestion.</li>
              <li>Provide a step-by-step description of the suggested enhancement in as many details as possible.</li>
              <li>Explain why this enhancement would be useful to most users.</li>
            </ul>

            <h3>3. Your First Code Contribution</h3>
            <p>Unsure where to begin contributing? You can start by looking through these beginner and help-wanted issues:</p>
            <ul>
              <li><strong>Good First Issue:</strong> Issues which should only require a few lines of code, and a test or two.</li>
              <li><strong>Help Wanted:</strong> Issues which should be a bit more involved than beginner issues.</li>
            </ul>

            <h2>Pull Request Process</h2>
            <ol>
              <li><strong>Fork the repo</strong> and create your branch from <code>main</code>.</li>
              <li>If you've added code that should be tested, <strong>add tests</strong>.</li>
              <li>If you've changed APIs, <strong>update the documentation</strong>.</li>
              <li>Ensure the test suite passes.</li>
              <li>Make sure your code lints.</li>
              <li>Issue that pull request!</li>
            </ol>

            <h2>Styleguides</h2>
            <h3>Git Commit Messages</h3>
            <ul>
              <li>Use the present tense ("Add feature" not "Added feature")</li>
              <li>Use the imperative mood ("Move cursor to..." not "Moves cursor to...")</li>
              <li>Limit the first line to 72 characters or less</li>
              <li>Reference issues and pull requests liberally after the first line</li>
            </ul>

            <h3>JavaScript/TypeScript Styleguide</h3>
            <p>
              All JavaScript and TypeScript must adhere to our ESLint and Prettier configurations.
              Run <code>npm run lint</code> to ensure your code matches our style.
            </p>
          </div>
        </motion.div>
      </div>
      </div>
      <Footer />
    </div>
  );
}
