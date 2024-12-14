import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Search({ items }) {
  const [search, setSearch] = useState('');

  const filterItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-10">
            <Link to="/fourteen" className="mb-6 mr-10 inline-block bg-green-600 text-white font-semibold py-2 px-6 mx-auto rounded-lg hover:bg-green-700 transition duration-300">
                    Next
                </Link>
      <h1 className="text-2xl font-bold mb-4 text-gray-700">Search indianStates</h1>
      <input
        type="text"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 mb-5"
        onChange={(e) => setSearch(e.target.value)}
        
        placeholder="Search States"
      />
      <ul className="w-full space-y-3">
        {filterItems.length > 0 ? (
          filterItems.map((item, index) => (
            <li
              key={index}
              className="p-4 bg-white rounded-lg shadow hover:bg-blue-50 transition duration-200 text-center text-gray-700 font-medium"
            >
              {item}
            </li>
          ))
        ) : (
          <li className="text-gray-500 text-center">No results found</li>
        )}
      </ul>

    </div>
  );
}

export default Search;
