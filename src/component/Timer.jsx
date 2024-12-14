import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Seven() {
    const [time, setTime] = useState(60);

    useEffect(() => {
        if (time > 0) {
            const timer = setTimeout(() => setTime(time - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [time]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full text-center">
                <h1 className="text-3xl font-bold text-blue-600 mb-4">Timer</h1>
                <p className="text-xl text-gray-700 mb-6">Time left: <span className="font-semibold text-red-600">{time}</span> seconds</p>
                {time === 0 ? (
                    <p className="text-green-500 text-lg font-semibold">Time's up!</p>
                ) : (
                    <p className="text-gray-500">Please wait...</p>
                )}
                <Link to="/eight" className="mt-6 block bg-blue-600 text-white font-semibold py-3 px-5 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                    Next
                </Link>
            </div>
        </div>
    );
}

export default Seven;
