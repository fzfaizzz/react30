import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Six() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {data ? (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md">
          <h1 className="text-2xl font-bold mb-4">Title: {data.title}</h1>
          <p className="text-gray-700">ID: {data.id}</p>
          <p className={`mt-2 ${data.completed ? 'text-green-600' : 'text-red-600'}`}>
            Status: {data.completed ? "Completed" : "Incomplete"}
          </p>
          {/* Next button to navigate to the next component */}
          <Link
            to="/seven" // Adjust this path according to your routing setup
            className="mt-4 inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Next
          </Link>
        </div>
      ) : (
        <p className="text-lg text-gray-500">Loading...</p>
      )}
    </div>
  );
}

export default Six;
