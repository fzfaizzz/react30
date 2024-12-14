import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nine() {
    const [bgcolor, setColor] = useState('red');

    const handleColor = () => {
        const newColor = bgcolor === 'red' ? 'lightblue' : 'white';
        setColor(newColor);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div 
            className={`h-96 w-96 rounded-lg shadow-2xl cursor-pointer transition-all duration-500 transform hover:scale-105`} 
            style={{ backgroundColor: bgcolor }} 
            onClick={handleColor}
        >
            <p className="flex items-center justify-center h-full text-2xl font-semibold text-gray-900">
                Click to Change Background
            </p>
        </div>
        <Link to="/ten" className="mt-6 inline-block bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300">
                    Next
            </Link>
        </div>
    );
}

export default Nine;
