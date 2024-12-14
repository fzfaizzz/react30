import React from 'react';
import { Link } from 'react-router-dom';

function Project() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-gray-100">
      <div className="bg-white shadow-2xl rounded-3xl p-12 max-w-5xl w-full text-center">
        <h1 className="text-5xl font-bold text-blue-900 mb-10 tracking-wide">React Mini Project</h1>
        <p className="text-lg text-gray-500 mb-12">Explore the components in this branded mini project:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Links to components 1 to 30 */}
          <Link to="/one" className="block bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-5 px-8 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300">Counter App</Link>
          <Link to="/two" className="block bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold py-5 px-8 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300">Show User Input</Link>
          <Link to="/four" className="block bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold py-5 px-8 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300">List Of Items</Link>
          <Link to="/five" className="block bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold py-5 px-8 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300">Toggle Switch</Link>
          <Link to="/six" className="block bg-gradient-to-r from-yellow-500 to-yellow-400 text-white font-semibold py-5 px-8 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300">Fetch</Link>
          <Link to="/seven" className="block bg-gradient-to-r from-teal-500 to-teal-400 text-white font-semibold py-5 px-8 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300">Timer</Link>
          <Link to="/eight" className="block bg-gradient-to-r from-pink-500 to-pink-400 text-white font-semibold py-5 px-8 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300">Todo</Link>
          <Link to="/nine" className="block bg-gradient-to-r from-indigo-500 to-indigo-400 text-white font-semibold py-5 px-8 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300">Change BG</Link>
          <Link to="/ten" className="block bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold py-5 px-8 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300">Random Quote</Link>
          <Link to="/eleven" className="block bg-gradient-to-r from-cyan-500 to-cyan-400 text-white font-semibold py-5 px-8 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300">Upload Image</Link>
          <Link to="/twelve" className="block bg-gradient-to-r from-lime-500 to-lime-400 text-white font-semibold py-5 px-8 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300">Login & Register</Link>
          <Link to="/thirteen" className="block bg-gradient-to-r from-gray-600 to-gray-500 text-white font-semibold py-5 px-8 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300">Search States</Link>
          <Link to="/fourteen" className="block bg-gradient-to-r from-yellow-600 to-yellow-500 text-white font-semibold py-5 px-8 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300">Color Picker</Link>
          <Link to="/fifteen" className="block bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-5 px-8 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300">Theme Change</Link>
        </div>
      </div>
    </div>
  );
}

export default Project;
