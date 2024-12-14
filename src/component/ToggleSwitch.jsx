import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Five() {
  const [isToggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!isToggle);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center space-y-4">
        <button
          onClick={handleToggle}
          className={`px-6 py-3 font-bold text-lg rounded-lg transition-all duration-300 ease-in-out ${
            isToggle ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          {isToggle ? 'Turn Off' : 'Turn On'}
        </button>
        <div
          className={`text-2xl font-semibold transition-colors duration-300 ${
            isToggle ? 'text-green-600' : 'text-gray-400'
          }`}
        >
          {isToggle ? 'On' : 'Off'}
        </div>
      </div>

      {/* Add the Link component to navigate to the next route */}
      <div className="mt-6">
        <Link 
          to="/six" 
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Next
        </Link>
      </div>
    </div>
  );
}

export default Five;
