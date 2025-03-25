import api from './apiService';

const login = async (email, password) => {
  try {
    const response = await api.post('/auth/login', { email, password });

    if (response.data && response.data.token) {
      console.log('Token received:', response.data.token);
      localStorage.setItem('token', response.data.token);   
      return true;
    } else {
      console.error('No token received');
      return false;
    }
  } catch (error) {
    console.error('Login failed:', error);
    return false;
  }
};

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  console.log('Checking auth token:', token);
  return !!token;  
};

const logout = () => {
  localStorage.removeItem('token');  
  console.log('User logged out');
};

export { login, isAuthenticated, logout };
