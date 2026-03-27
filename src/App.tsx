/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Tutorials from './pages/Tutorials';
import TutorialsLanding from './pages/TutorialsLanding';
import TutorialViewer from './pages/TutorialViewer';
import ChatBot from './components/ChatBot';

export default function App() {
  return (
    <BrowserRouter basename="/learn-build-share">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tutorials" element={<TutorialsLanding />} />
        <Route path="/tutorials/:courseId" element={<Tutorials />} />
        <Route path="/tutorials/:courseId/:moduleId" element={<TutorialViewer />} />
      </Routes>
      <ChatBot />
    </BrowserRouter>
  );
}
