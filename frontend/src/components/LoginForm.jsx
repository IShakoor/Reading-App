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
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 bg-[#F9F7F3] rounded-2xl shadow-md space-y-6 font-[Spectral]">
      <h2 className="text-3xl text-center text-[#4B4B4B] font-semibold">Login</h2>

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-[#E6E1DC] bg-[#FAFAFA] text-[#4B4B4B] text-center focus:outline-none focus:ring-2 focus:ring-[#B4D8C1] transition duration-400"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-[#E6E1DC] bg-[#FAFAFA] text-[#4B4B4B] text-center focus:outline-none focus:ring-2 focus:ring-[#B4D8C1] transition duration-400"
      />

      <button type="submit" className="w-full bg-[#A8CABA] hover:bg-[#8FBD9B] text-white text-2xl py-3 rounded-lg transition duration-300 transform hover:scale-[1.05]">
        Login
      </button>

      {error && <p className="text-[#C32F27] text-center">{error}</p>}
    </form>
  );
};

export default LoginForm;
