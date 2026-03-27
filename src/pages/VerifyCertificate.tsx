import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle2, XCircle, Loader2, ArrowLeft, Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function VerifyCertificate() {
  const { certId } = useParams();
  const [loading, setLoading] = useState(true);
  const [certData, setCertData] = useState<any>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    async function verify() {
      if (!certId) return;
      try {
        const certRef = doc(db, 'certificates', certId);
        const certSnap = await getDoc(certRef);
        
        if (certSnap.exists()) {
          setCertData(certSnap.data());
        } else {
          setError('Certificate not found.');
        }
      } catch (err) {
        console.error('Error verifying certificate:', err);
        setError('An error occurred while verifying the certificate.');
      } finally {
        setLoading(false);
      }
    }
    verify();
  }, [certId]);

  const getCourseName = (id: string) => {
    switch (id) {
      case 'ai': return 'AI-Assisted Development';
      case 'docker': return 'Docker Fundamentals';
      case 'github': return 'GitHub Fundamentals';
      case 'github-actions': return 'GitHub Actions';
      case 'git': return 'Git Mastery';
      case 'manual-testing': return 'Manual Testing';
      case 'prompt-engineering': return 'Prompt Engineering';
      case 'cybersecurity': return 'Cybersecurity Fundamentals';
      case 'antigravity': return 'Working with Antigravity';
      default: return id;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-indigo-600 font-medium mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center"
          >
            {loading ? (
              <div className="flex flex-col items-center py-8">
                <Loader2 className="w-10 h-10 text-indigo-600 animate-spin mb-4" />
                <p className="text-slate-600">Verifying certificate...</p>
              </div>
            ) : error ? (
              <div className="flex flex-col items-center py-4">
                <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mb-4">
                  <XCircle className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Verification Failed</h2>
                <p className="text-slate-600 mb-6">{error}</p>
                <p className="text-sm text-slate-500">Please check the certificate ID and try again.</p>
              </div>
            ) : (
              <div className="flex flex-col items-center py-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Certificate Verified</h2>
                <p className="text-slate-600 mb-8">This is a valid DevLearn certificate.</p>
                
                <div className="w-full bg-slate-50 rounded-xl p-6 border border-slate-100 text-left space-y-4">
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Recipient</p>
                    <p className="text-lg font-medium text-slate-900">{certData.userName}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Course</p>
                    <p className="text-lg font-medium text-slate-900">{getCourseName(certData.courseId)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Issue Date</p>
                    <p className="text-lg font-medium text-slate-900">
                      {certData.issueDate?.toDate().toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Certificate ID</p>
                    <p className="text-sm font-mono text-slate-600">{certData.certId}</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
