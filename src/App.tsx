/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Tutorials from './pages/Tutorials';
import TutorialViewer from './pages/TutorialViewer';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/tutorials/:moduleId" element={<TutorialViewer />} />
      </Routes>
    </BrowserRouter>
  );
}
