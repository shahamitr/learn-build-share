import { Link } from 'react-router-dom';
import { Github, Bot, ArrowRight, Container, Workflow, CheckCircle2, ShieldCheck, Sparkles, Shield, Rocket, Gitlab, Box, Zap } from 'lucide-react';
import { motion } from 'motion/react';
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

export default function TutorialsLanding() {
  const { isCompleted } = useProgress();

  const getCourseProgress = (courseId: string, curriculum: any) => {
    const allModules = curriculum.flatMap((l: any) => l.modules);
    const total = allModules.length;
    const completed = allModules.filter((m: any) => isCompleted(courseId, m.id)).length;
    return { total, completed, percentage: total === 0 ? 0 : Math.round((completed / total) * 100) };
  };

  const gitProgress = getCourseProgress('git', gitCurriculum);
  const aiProgress = getCourseProgress('ai', aiCurriculum);
  const dockerProgress = getCourseProgress('docker', dockerCurriculum);
  const githubProgress = getCourseProgress('github', githubCurriculum);
  const actionsProgress = getCourseProgress('github-actions', githubActionsCurriculum);
  const manualTestingProgress = getCourseProgress('manual-testing', manualTestingCurriculum);
  const promptEngineeringProgress = getCourseProgress('prompt-engineering', promptEngineeringCurriculum);
  const cybersecurityProgress = getCourseProgress('cybersecurity', cybersecurityCurriculum);
  const antigravityProgress = getCourseProgress('antigravity', antigravityCurriculum);
  const gitlabProgress = getCourseProgress('gitlab', gitlabCurriculum);
  const kubernetesProgress = getCourseProgress('kubernetes', kubernetesCurriculum);
  const rustProgress = getCourseProgress('rust', rustCurriculum);
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
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
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
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Github className="w-8 h-8" />
                  </div>
                  {gitProgress.percentage > 0 && (
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-bold text-orange-600">{gitProgress.percentage}%</span>
                      <div className="w-20 h-1.5 bg-orange-100 rounded-full mt-1 overflow-hidden">
                        <div className="h-full bg-orange-500 rounded-full" style={{ width: `${gitProgress.percentage}%` }}></div>
                      </div>
                    </div>
                  )}
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
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Bot className="w-8 h-8" />
                  </div>
                  {aiProgress.percentage > 0 && (
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-bold text-indigo-600">{aiProgress.percentage}%</span>
                      <div className="w-20 h-1.5 bg-indigo-100 rounded-full mt-1 overflow-hidden">
                        <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${aiProgress.percentage}%` }}></div>
                      </div>
                    </div>
                  )}
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
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Container className="w-8 h-8" />
                  </div>
                  {dockerProgress.percentage > 0 && (
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-bold text-blue-600">{dockerProgress.percentage}%</span>
                      <div className="w-20 h-1.5 bg-blue-100 rounded-full mt-1 overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${dockerProgress.percentage}%` }}></div>
                      </div>
                    </div>
                  )}
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
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Github className="w-8 h-8" />
                  </div>
                  {githubProgress.percentage > 0 && (
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-bold text-purple-600">{githubProgress.percentage}%</span>
                      <div className="w-20 h-1.5 bg-purple-100 rounded-full mt-1 overflow-hidden">
                        <div className="h-full bg-purple-500 rounded-full" style={{ width: `${githubProgress.percentage}%` }}></div>
                      </div>
                    </div>
                  )}
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
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Workflow className="w-8 h-8" />
                  </div>
                  {actionsProgress.percentage > 0 && (
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-bold text-emerald-600">{actionsProgress.percentage}%</span>
                      <div className="w-20 h-1.5 bg-emerald-100 rounded-full mt-1 overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${actionsProgress.percentage}%` }}></div>
                      </div>
                    </div>
                  )}
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

          {/* Manual Testing Course */}
          <motion.div variants={item}>
            <Link to="/tutorials/manual-testing" className="group block h-full">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-pink-200 transition-all h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  {manualTestingProgress.percentage > 0 && (
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-bold text-pink-600">{manualTestingProgress.percentage}%</span>
                      <div className="w-20 h-1.5 bg-pink-100 rounded-full mt-1 overflow-hidden">
                        <div className="h-full bg-pink-500 rounded-full" style={{ width: `${manualTestingProgress.percentage}%` }}></div>
                      </div>
                    </div>
                  )}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-pink-600 transition-colors">
                  Manual Testing
                </h2>
                <p className="text-slate-600 mb-6 flex-grow text-lg">
                  Learn the core concepts of software testing, writing test cases, and defect management.
                </p>
                <div className="flex items-center text-pink-600 font-medium text-lg">
                  Start Course <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Prompt Engineering Course */}
          <motion.div variants={item}>
            <Link to="/tutorials/prompt-engineering" className="group block h-full">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-yellow-200 transition-all h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  {promptEngineeringProgress.percentage > 0 && (
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-bold text-yellow-600">{promptEngineeringProgress.percentage}%</span>
                      <div className="w-20 h-1.5 bg-yellow-100 rounded-full mt-1 overflow-hidden">
                        <div className="h-full bg-yellow-500 rounded-full" style={{ width: `${promptEngineeringProgress.percentage}%` }}></div>
                      </div>
                    </div>
                  )}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-yellow-600 transition-colors">
                  Prompt Engineering
                </h2>
                <p className="text-slate-600 mb-6 flex-grow text-lg">
                  Master the art of communicating with LLMs. Learn few-shot prompting and chain-of-thought.
                </p>
                <div className="flex items-center text-yellow-600 font-medium text-lg">
                  Start Course <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Cybersecurity Fundamentals Course */}
          <motion.div variants={item}>
            <Link to="/tutorials/cybersecurity" className="group block h-full">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-red-200 transition-all h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Shield className="w-8 h-8" />
                  </div>
                  {cybersecurityProgress.percentage > 0 && (
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-bold text-red-600">{cybersecurityProgress.percentage}%</span>
                      <div className="w-20 h-1.5 bg-red-100 rounded-full mt-1 overflow-hidden">
                        <div className="h-full bg-red-500 rounded-full" style={{ width: `${cybersecurityProgress.percentage}%` }}></div>
                      </div>
                    </div>
                  )}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                  Cybersecurity Fundamentals
                </h2>
                <p className="text-slate-600 mb-6 flex-grow text-lg">
                  Learn the core concepts of information security, encryption, and web application vulnerabilities.
                </p>
                <div className="flex items-center text-red-600 font-medium text-lg">
                  Start Course <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Antigravity Course */}
          <motion.div variants={item}>
            <Link to="/tutorials/antigravity" className="group block h-full">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-200 transition-all h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-cyan-100 text-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Rocket className="w-8 h-8" />
                  </div>
                  {antigravityProgress.percentage > 0 && (
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-bold text-cyan-600">{antigravityProgress.percentage}%</span>
                      <div className="w-20 h-1.5 bg-cyan-100 rounded-full mt-1 overflow-hidden">
                        <div className="h-full bg-cyan-500 rounded-full" style={{ width: `${antigravityProgress.percentage}%` }}></div>
                      </div>
                    </div>
                  )}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                  Working with Antigravity
                </h2>
                <p className="text-slate-600 mb-6 flex-grow text-lg">
                  Learn the basics of working with the Antigravity framework, routing, and state management.
                </p>
                <div className="flex items-center text-cyan-600 font-medium text-lg">
                  Start Course <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* GitLab Course */}
          <motion.div variants={item}>
            <Link to="/tutorials/gitlab" className="group block h-full">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-orange-200 transition-all h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Gitlab className="w-8 h-8" />
                  </div>
                  {gitlabProgress.percentage > 0 && (
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-bold text-orange-600">{gitlabProgress.percentage}%</span>
                      <div className="w-20 h-1.5 bg-orange-100 rounded-full mt-1 overflow-hidden">
                        <div className="h-full bg-orange-500 rounded-full" style={{ width: `${gitlabProgress.percentage}%` }}></div>
                      </div>
                    </div>
                  )}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                  GitLab CI/CD
                </h2>
                <p className="text-slate-600 mb-6 flex-grow text-lg">
                  Master GitLab for source control and powerful CI/CD pipelines.
                </p>
                <div className="flex items-center text-orange-600 font-medium text-lg">
                  Start Course <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Kubernetes Course */}
          <motion.div variants={item}>
            <Link to="/tutorials/kubernetes" className="group block h-full">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Box className="w-8 h-8" />
                  </div>
                  {kubernetesProgress.percentage > 0 && (
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-bold text-blue-600">{kubernetesProgress.percentage}%</span>
                      <div className="w-20 h-1.5 bg-blue-100 rounded-full mt-1 overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${kubernetesProgress.percentage}%` }}></div>
                      </div>
                    </div>
                  )}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Kubernetes Fundamentals
                </h2>
                <p className="text-slate-600 mb-6 flex-grow text-lg">
                  Learn container orchestration with Kubernetes. Deploy and scale applications with ease.
                </p>
                <div className="flex items-center text-blue-600 font-medium text-lg">
                  Start Course <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Rust Course */}
          <motion.div variants={item}>
            <Link to="/tutorials/rust" className="group block h-full">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-orange-200 transition-all h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-orange-50 text-orange-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap className="w-8 h-8" />
                  </div>
                  {rustProgress.percentage > 0 && (
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-bold text-orange-700">{rustProgress.percentage}%</span>
                      <div className="w-20 h-1.5 bg-orange-100 rounded-full mt-1 overflow-hidden">
                        <div className="h-full bg-orange-600 rounded-full" style={{ width: `${rustProgress.percentage}%` }}></div>
                      </div>
                    </div>
                  )}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-700 transition-colors">
                  Rust Programming
                </h2>
                <p className="text-slate-600 mb-6 flex-grow text-lg">
                  Learn the Rust programming language. Fast, safe, and memory-efficient.
                </p>
                <div className="flex items-center text-orange-700 font-medium text-lg">
                  Start Course <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
