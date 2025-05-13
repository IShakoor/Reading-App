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
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-md space-y-4">
      <h2 className="text-2xl font-semibold text-center text-black ">Register</h2>

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        className="w-full border text-center text-black bg-gray-200 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      />
      {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border text-center text-black bg-gray-200 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full border text-center text-black bg-gray-200 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      />
      <input
        type="password"
        name="password2"
        placeholder="Confirm Password"
        value={formData.password2}
        onChange={handleChange}
        className="w-full border text-center text-black bg-gray-200 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      />
      {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

      <button type="submit" className="w-full bg-black-500 text-white py-2 rounded">
        Register
      </button>

      {success && <p className="text-green-600 text-center">Registration successful!</p>}
    </form>
  );
};

export default RegisterForm;
