import { useState } from 'react';
import { loginUser } from '../api/auth';
import { useNavigate } from 'react-router-dom';

// login form creation
const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  // form data change handling
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // submit handling
  const handleSubmit = async e => {
    e.preventDefault();
    const res = await loginUser(formData);

    // on success
    if (res.success) {
      localStorage.setItem('access', res.data.access);
      localStorage.setItem('refresh', res.data.refresh);
      setError('');
      navigate('/dashboard'); // CHANGE TO LANDING PAGE
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  // form details with styling
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-md space-y-4">
      <h2 className="text-2xl font-semibold text-center text-black ">Login</h2>

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        className="w-full border text-center text-black bg-gray-200 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full border text-center text-black bg-gray-200 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      />

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Login
      </button>

      {error && <p className="text-red-500 text-center">{error}</p>}
    </form>
  );
};

export default LoginForm;
