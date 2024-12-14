import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Two() {
  const [input, setInput] = useState('');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-purple-100">
      <div className="bg-white shadow-xl rounded-lg p-8 w-96 space-y-6">
        <input
          type="text"
          placeholder="Enter your input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 transition-all duration-300 ease-in-out transform focus:scale-105"
        />
        <p className={`text-xl font-semibold text-center ${input ? 'text-gray-800' : 'text-gray-400'}`}>
          {input || "Your input will appear here"}
        </p>

        {/* Add the Link component to navigate to the next route */}
        <div className="flex justify-center">
          <Link 
            to="/four" 
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Two;
