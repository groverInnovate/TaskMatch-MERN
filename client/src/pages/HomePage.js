import React, { useEffect, useState } from 'react';
import api from '../services/apiService';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem('token');  
        if (!token) {
          throw new Error('No token found. Please log in.');
        }

        const response = await api.get('/tasks', {
          headers: { Authorization: `Bearer ${token}` }
        });

        setTasks(response.data);
      } catch (err) {
        console.error('API Error:', err);  
        setError(err.response ? err.response.data : err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="home-container">
      <h1>Task List</h1>
      <button onClick={() => {
        localStorage.removeItem('token');
        navigate('/');
      }} className="logout-btn">Logout</button>
      <Link to="/create">Create New Task</Link>
      <div className="task-list">
        {tasks.map(task => (
          <div key={task._id} className="task-card">
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>Price: ${task.price}</p>
            <p>Deadline: {new Date(task.deadline).toLocaleString()}</p>
            <Link to={`/tasks/${task._id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

