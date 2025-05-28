import { useState } from 'react';
import { registerUser } from '../api/auth';

// register form creation
const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // handle changed form data
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // submit handling
  const handleSubmit = async e => {
    e.preventDefault();
    const response = await registerUser(formData);
    if (response.success) {
      setSuccess(true);
      setErrors({});
    } else {
      setErrors(response.errors || {});
    }
  };

  // form details with styling
  return (
  <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 bg-[#F9F7F3] rounded-2xl shadow-md space-y-6 font-[Spectral]">
    <h2 className="text-3xl text-center text-[#4B4B4B] font-semibold">Create Your Account</h2>

    <input
      type="text"
      name="username"
      placeholder="Username"
      value={formData.username}
      onChange={handleChange}
      className="w-full px-4 py-3 rounded-lg border border-[#E6E1DC] bg-[#FAFAFA] text-[#4B4B4B] text-center focus:outline-none focus:ring-2 focus:ring-[#B4D8C1] transition duration-400"
    />
    {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}

    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      className="w-full px-4 py-3 rounded-lg border border-[#E6E1DC] bg-[#FAFAFA] text-[#4B4B4B] text-center focus:outline-none focus:ring-2 focus:ring-[#B4D8C1] transition duration-400"
    />
    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

    <input
      type="password"
      name="password"
      placeholder="Password"
      value={formData.password}
      onChange={handleChange}
      className="w-full px-4 py-3 rounded-lg border border-[#E6E1DC] bg-[#FAFAFA] text-[#4B4B4B] text-center focus:outline-none focus:ring-2 focus:ring-[#B4D8C1] transition duration-400"
    />

    <input
      type="password"
      name="password2"
      placeholder="Confirm Password"
      value={formData.password2}
      onChange={handleChange}
      className="w-full px-4 py-3 rounded-lg border border-[#E6E1DC] bg-[#FAFAFA] text-[#4B4B4B] text-center focus:outline-none focus:ring-2 focus:ring-[#B4D8C1] transition duration-400"
    />
    {errors.password && <p className="text-[#C32F27] text-sm">{errors.password}</p>}

    <button
      type="submit"
      className="w-full bg-[#A8CABA] hover:bg-[#8FBD9B] text-white text-2xl py-3 rounded-lg transition duration-300 transform hover:scale-[1.05]"
    >
      Register
    </button>

    {success && <p className="text-[#A8CABA] text-center text-sm">Registration successful!</p>}
  </form>

  );
};

export default RegisterForm;
