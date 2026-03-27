/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Tutorials from './pages/Tutorials';
import TutorialsLanding from './pages/TutorialsLanding';
import TutorialViewer from './pages/TutorialViewer';
import CodeOfConduct from './pages/CodeOfConduct';
import ContributionGuidelines from './pages/ContributionGuidelines';
import Dashboard from './pages/Dashboard';
import ChatBot from './components/ChatBot';
import Certificate from './pages/Certificate';
import VerifyCertificate from './pages/VerifyCertificate';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tutorials" element={<TutorialsLanding />} />
        <Route path="/tutorials/:courseId" element={<Tutorials />} />
        <Route path="/tutorials/:courseId/:moduleId" element={<TutorialViewer />} />
        <Route path="/certificate/:courseId" element={<Certificate />} />
        <Route path="/verify/:certId" element={<VerifyCertificate />} />
        <Route path="/code-of-conduct" element={<CodeOfConduct />} />
        <Route path="/contributing" element={<ContributionGuidelines />} />
        
        {/* Handle anchor links that might be interpreted as routes by HashRouter */}
        <Route path="/features" element={<Navigate to="/" replace />} />
        <Route path="/community" element={<Navigate to="/" replace />} />
        
        {/* Catch-all route to redirect back to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <ChatBot />
    </HashRouter>
  );
}
