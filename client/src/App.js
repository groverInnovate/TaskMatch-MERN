import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateTask from './pages/CreateTask';
import TaskPage from './pages/TaskPage';
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { isAuthenticated } from './services/authService';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            
            <Route path="/" element={<Navigate to={isAuthenticated() ? "/home" : "/login"} />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/home" element={isAuthenticated() ? <HomePage /> : <Navigate to="/login" />} />
            <Route path="/create" element={isAuthenticated() ? <CreateTask /> : <Navigate to="/login" />} />
            <Route path="/tasks/:id" element={isAuthenticated() ? <TaskPage /> : <Navigate to="/login" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;






