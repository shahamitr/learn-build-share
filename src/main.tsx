import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { AuthProvider } from './context/AuthContext.tsx';
import { ProgressProvider } from './context/ProgressContext.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <ProgressProvider>
        <App />
      </ProgressProvider>
    </AuthProvider>
  </StrictMode>,
);
