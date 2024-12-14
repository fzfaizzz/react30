import React from 'react';
import { Link } from 'react-router-dom';

function Four() {
  const items = ['item1', 'item2', 'item3', 'item4', 'item5'];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <ul className="bg-white shadow-lg rounded-lg p-6 w-80 mb-6">
        {items.map((item, index) => (
          <li
            key={index}
            className="text-lg font-medium text-gray-700 py-2 px-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-100 transition-colors duration-300"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Add the Link component to navigate to the next route */}
      <div>
        <Link 
          to="/five" 
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Next
        </Link>
      </div>
    </div>
  );
}

export default Four;
