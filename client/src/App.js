import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import CreateTask from './pages/CreateTask';
import TaskPage from './pages/TaskPage';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
        <Route path="/create-task" element={<PrivateRoute><CreateTask /></PrivateRoute>} />
        <Route path="/task/:id" element={<PrivateRoute><TaskPage /></PrivateRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;











