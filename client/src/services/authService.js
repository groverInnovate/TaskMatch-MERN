import api from './apiService';

const login = async (email, password) => {
  try {
    const response = await api.post('/auth/login', { email, password });

    if (response.data && response.data.token) {
      console.log('Token received:', response.data.token);  // Log the token
      localStorage.setItem('token', response.data.token);   // ✅ Save token in localStorage
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
  console.log('Checking auth token:', token);  // ✅ Log the token
  return !!token;  // Returns true if token exists
};

export { login, isAuthenticated };
