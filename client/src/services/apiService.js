import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5003/api';

const api = axios.create({
  baseURL: API_URL,
});


api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log('Axios Request:', config);  
    return config;
  },
  (error) => {
    console.error(' Axios Request Error:', error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log(' Axios Response:', response); 
    return response;
  },
  (error) => {
    console.error(' Axios Response Error:', error.response || error);
    return Promise.reject(error);
  }
);

export default api;


