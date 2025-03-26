import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';  // Import AuthProvider
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>          {/* ✅ Wrap the entire app */}
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);






