import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function CreateAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [experience, setExperience] = useState('');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');

  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!experience) {
      newErrors.experience = 'Experience is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Proceed with form submission (e.g., send data to server)
      console.log('Form submitted successfully');
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    evaluatePasswordStrength(newPassword);
  };

  const evaluatePasswordStrength = (password) => {
    // This is just a simple example and we can add other factors such as combinations etc...
    if (password.length < 6) {
      setPasswordStrength('Weak');
    } else if (password.length < 10) {
      setPasswordStrength('Medium');
    } else {
      setPasswordStrength('Strong');
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-center mb-2">Create Account</h2>
      <p className="text-center mb-6">Create your account in a second to receive our latest news</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email}</p>
          )}
        </div>
        <div className="mb-4 relative">
          <label className="block text-gray-700">Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={password}
            onChange={handlePasswordChange}
          />
          <span className="absolute right-3 top-10 text-gray-500 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
          <p className="text-gray-600 text-sm">At least 6 characters</p>
          {errors.password && (
            <p className="text-red-600 text-sm">{errors.password}</p>
          )}
          <div className="mt-2">
            <p className={`text-sm ${passwordStrength === 'Weak' ? 'text-red-600' : passwordStrength === 'Medium' ? 'text-yellow-500' : 'text-green-500'}`}>
              Password Strength: {passwordStrength}
            </p>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Year of Experience</label>
          <select
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          >
            <option value="">Please Select</option>
            <option value="<1">Less than 1 year</option>
            <option value="<5">Less than 5 years</option>
            <option value="<10">Less than 10 years</option>
          </select>
          {errors.experience && (
            <p className="text-red-600 text-sm">{errors.experience}</p>
          )}
        </div>
        <div className="mb-4 flex items-center">
          <input type="checkbox" className="mr-2" id="rememberMe" />
          <label htmlFor="rememberMe" className="text-gray-700 cursor-pointer">Remember Me</label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default CreateAccount;
