import axios from 'axios';

// Base URL for the backend
const API_BASE_URL = 'http://localhost:5003/api';

// Create an Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add an interceptor to include the token in every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');  // Retrieve token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;  // Attach token
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;

