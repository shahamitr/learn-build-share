import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { AuthProvider } from './context/AuthContext.tsx';
import { ProgressProvider } from './context/ProgressContext.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <ProgressProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ProgressProvider>
    </AuthProvider>
  </StrictMode>,
);
