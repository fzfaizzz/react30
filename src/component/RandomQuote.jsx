import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Ten() {
    const quotes = [
        "The only way to do great work is to love what you do. – Steve Jobs",
        "Life is what happens when you're busy making other plans. – John Lennon",
        "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
        "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. – Albert Schweitzer",
        "You miss 100% of the shots you don't take. – Wayne Gretzky",
        "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
        "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
        "It does not matter how slowly you go as long as you do not stop. – Confucius",
        "Act as if what you do makes a difference. It does. – William James",
        "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau"
    ];

    const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 to-blue-500 p-5">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center transition-transform transform hover:scale-10">
                <h2 className="text-2xl font-semibold mb-4 text-blue-700">Random Quote</h2>
                <p className="text-lg text-gray-800 italic mb-6">"{quote}"</p>
                <button 
                    onClick={getRandomQuote} 
                    className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Get Another Quote
                </button>
            </div>
            <Link to="/eleven" className="mt-6 inline-block bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300">
                    Next
            </Link>
        </div>
    );
}

export default Ten;
