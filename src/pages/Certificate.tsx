import { useParams, Link, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import { gitCurriculum } from '../data/git-curriculum';
import { aiCurriculum } from '../data/ai-curriculum';
import { dockerCurriculum } from '../data/docker-curriculum';
import { githubCurriculum } from '../data/github-curriculum';
import { githubActionsCurriculum } from '../data/github-actions-curriculum';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Award, Download, ArrowLeft, CheckCircle2, Link as LinkIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { db } from '../firebase';
import { collection, query, where, getDocs, setDoc, doc, serverTimestamp } from 'firebase/firestore';

export default function Certificate() {
  const { courseId } = useParams();
  const { user, loading: authLoading } = useAuth();
  const { isCompleted } = useProgress();
  const certificateRef = useRef<HTMLDivElement>(null);
  const [certData, setCertData] = useState<{ certId: string; issueDate: Date } | null>(null);
  const [loadingCert, setLoadingCert] = useState(true);

  useEffect(() => {
    async function fetchOrGenerateCertificate() {
      if (!user || !courseId) return;
      
      try {
        const certsRef = collection(db, 'certificates');
        const q = query(certsRef, where('userId', '==', user.id), where('courseId', '==', courseId));
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
          const docData = querySnapshot.docs[0].data();
          setCertData({
            certId: docData.certId,
            issueDate: docData.issueDate?.toDate() || new Date()
          });
        } else {
          // Generate new certificate
          const newCertId = `CERT-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
          const newCertRef = doc(certsRef, newCertId);
          await setDoc(newCertRef, {
            certId: newCertId,
            userId: user.id,
            userName: user.name,
            courseId: courseId,
            issueDate: serverTimestamp()
          });
          setCertData({
            certId: newCertId,
            issueDate: new Date()
          });
        }
      } catch (error) {
        console.error("Error fetching/generating certificate:", error);
      } finally {
        setLoadingCert(false);
      }
    }

    if (user && courseId) {
      fetchOrGenerateCertificate();
    }
  }, [user, courseId]);

  if (authLoading || loadingCert) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  let curriculum;
  let title;

  if (courseId === 'ai') {
    curriculum = aiCurriculum;
    title = 'AI-Assisted Development';
  } else if (courseId === 'docker') {
    curriculum = dockerCurriculum;
    title = 'Docker Fundamentals';
  } else if (courseId === 'github') {
    curriculum = githubCurriculum;
    title = 'GitHub Fundamentals';
  } else if (courseId === 'github-actions') {
    curriculum = githubActionsCurriculum;
    title = 'GitHub Actions';
  } else if (courseId === 'git') {
    curriculum = gitCurriculum;
    title = 'Git Mastery';
  } else {
    return <Navigate to="/dashboard" />;
  }

  const allModules = curriculum.flatMap((l: any) => l.modules);
  const total = allModules.length;
  const completed = allModules.filter((m: any) => isCompleted(courseId || '', m.id)).length;
  const isCourseCompleted = total > 0 && completed === total;

  if (!isCourseCompleted) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center max-w-md">
            <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Keep Going!</h2>
            <p className="text-slate-600 mb-6">You need to complete all modules in {title} to earn your certificate.</p>
            <Link to={`/tutorials/${courseId}`} className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors">
              Continue Learning
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleDownload = async () => {
    if (certificateRef.current) {
      try {
        const canvas = await html2canvas(certificateRef.current, {
          scale: 2,
          backgroundColor: '#ffffff',
        });
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = `${user.name.replace(/\s+/g, '_')}_${title.replace(/\s+/g, '_')}_Certificate.png`;
        link.click();
      } catch (error) {
        console.error('Error generating certificate:', error);
        alert('Failed to generate certificate image.');
      }
    }
  };

  const currentDate = certData?.issueDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) || new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const verifyUrl = `${window.location.origin}/#/verify/${certData?.certId}`;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      
      <div className="flex-1 max-w-5xl mx-auto w-full px-4 py-12 flex flex-col items-center">
        <div className="w-full flex justify-between items-center mb-8">
          <Link to="/dashboard" className="inline-flex items-center gap-2 text-slate-600 hover:text-indigo-600 font-medium transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
          <button 
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-sm"
          >
            <Download className="w-4 h-4" /> Download Certificate
          </button>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="w-full overflow-x-auto pb-8"
        >
          <div 
            ref={certificateRef}
            className="min-w-[800px] w-full max-w-[1000px] aspect-[1.414] mx-auto bg-white relative p-12 shadow-xl border border-slate-200"
            style={{
              backgroundImage: 'radial-gradient(circle at center, #ffffff 0%, #f8fafc 100%)'
            }}
          >
            {/* Decorative Border */}
            <div className="absolute inset-4 border-2 border-indigo-100 rounded-lg pointer-events-none"></div>
            <div className="absolute inset-6 border border-indigo-50 rounded pointer-events-none"></div>
            
            {/* Corner Ornaments */}
            <div className="absolute top-8 left-8 w-16 h-16 border-t-4 border-l-4 border-indigo-600 pointer-events-none"></div>
            <div className="absolute top-8 right-8 w-16 h-16 border-t-4 border-r-4 border-indigo-600 pointer-events-none"></div>
            <div className="absolute bottom-8 left-8 w-16 h-16 border-b-4 border-l-4 border-indigo-600 pointer-events-none"></div>
            <div className="absolute bottom-8 right-8 w-16 h-16 border-b-4 border-r-4 border-indigo-600 pointer-events-none"></div>

            <div className="h-full flex flex-col items-center justify-center text-center px-16 relative z-10">
              <div className="mb-8 flex items-center justify-center">
                <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center border-2 border-indigo-100">
                  <Award className="w-10 h-10 text-indigo-600" />
                </div>
              </div>
              
              <h1 className="text-5xl font-serif text-slate-900 mb-4 tracking-tight">Certificate of Completion</h1>
              <p className="text-lg text-slate-500 uppercase tracking-widest mb-12 font-medium">This is to certify that</p>
              
              <h2 className="text-4xl font-bold text-indigo-900 mb-12 border-b-2 border-indigo-100 pb-4 px-12 inline-block">
                {user.name}
              </h2>
              
              <p className="text-lg text-slate-600 mb-4">has successfully completed the course</p>
              <h3 className="text-3xl font-bold text-slate-800 mb-16">{title}</h3>
              
              <div className="w-full flex justify-between items-end mt-auto px-12">
                <div className="text-center">
                  <p className="text-slate-800 font-bold text-lg border-b border-slate-300 pb-2 mb-2 px-8">{currentDate}</p>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-medium">Date</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-2 text-emerald-600 mb-2">
                    <CheckCircle2 className="w-6 h-6" />
                    <span className="font-bold">Verified</span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono">ID: {certData?.certId}</p>
                  <p className="text-[10px] text-slate-400 mt-1">Verify at: {verifyUrl}</p>
                </div>

                <div className="text-center">
                  <p className="text-slate-800 font-bold text-lg border-b border-slate-300 pb-2 mb-2 px-8 font-serif italic">DevLearn Platform</p>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-medium">Issuer</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
}
