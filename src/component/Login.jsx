import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function Twelve() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegistered) {
      // Handle login functionality (find the user from the localStorage)
      const userExists = users.find((user) => user.email === email && user.password === password);
      if (userExists) {
        toast.success('Login successful!',);
      } else {
        toast.error('Invalid email, password', );
      }
    }else {
      // Handle registration and store in localStorage
      const newUser = { email, password };
      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      toast.success('User registered successfully!');
    }
    setEmail('');
    setPassword('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">
          {isRegistered ? 'Login' : 'Register'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input 
              type="email" 
              id="email" 
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input 
              type="password" 
              id="password" 
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            {isRegistered ? 'Login' : 'Register'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          {isRegistered ? 'Don’t have an account?' : 'Already have an account?'}
          <button
            className="underline text-blue-600 ml-1"
            onClick={() => setIsRegistered(!isRegistered)}
          >
            {isRegistered ? 'Register' : 'Log in'}
          </button>
        </p>
        <Link to="/thirteen" className="mt-6 inline-block bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300">
                    Next
            </Link>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Twelve;
