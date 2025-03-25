import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreateTask.css';

const CreateTask = () => {
  const navigate = useNavigate();
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    deadline: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5003/api/tasks', taskData);
      console.log(response.data);
      alert('Task created successfully!');
      navigate('/');  
    } catch (error) {
      console.error('Error creating task:', error);
      alert('Failed to create task');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6">Create a New Task</h2>

        <label className="block mb-2">Title:</label>
        <input 
          type="text" 
          name="title" 
          value={taskData.title} 
          onChange={handleChange} 
          required 
          className="w-full p-2 border rounded-md mb-4"
        />

        <label className="block mb-2">Description:</label>
        <textarea 
          name="description" 
          value={taskData.description} 
          onChange={handleChange} 
          required 
          className="w-full p-2 border rounded-md mb-4"
        />

        <label className="block mb-2">Deadline:</label>
        <input 
          type="date" 
          name="deadline" 
          value={taskData.deadline} 
          onChange={handleChange} 
          required 
          className="w-full p-2 border rounded-md mb-4"
        />

        <label className="block mb-2">Price:</label>
        <input 
          type="number" 
          name="price" 
          value={taskData.price} 
          onChange={handleChange} 
          required 
          className="w-full p-2 border rounded-md mb-4"
        />

        <button 
          type="submit" 
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
