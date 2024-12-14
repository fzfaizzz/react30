import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function One() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
        >
          +
        </button>
        <span className="text-2xl font-semibold">{count}</span>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
        >
          -
        </button>
      </div>

      {/* Add the Link component to navigate to another route */}
      <div className=" absolute mt-36">
        <Link 
          to="/two" 
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
        
         Next
        </Link>
      </div>
    </div>
  );
}

export default One;
