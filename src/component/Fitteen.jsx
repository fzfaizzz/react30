import React from 'react';
import { useTheme } from './Theme';

function Fitteen() {
    const { isdark, toggleTheme } = useTheme();  // Get both isdark and toggleTheme from context
    const themeClass = isdark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800';

    return (
        <div className={`min-h-screen flex flex-col items-center justify-center p-6 transition-all duration-300 ${themeClass}`}>
            <h2 className="text-3xl font-bold mb-4">Welcome to Fitteen</h2>
            <p className="text-lg mb-6 text-center">
                Discover a variety of features designed to enhance your experience!
            </p>
            <button 
                className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded-md transition-colors duration-200 mb-6"
                onClick={toggleTheme}  // Call toggleTheme function on click
            >
                {isdark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}  {/* Change button text based on theme */}
            </button>

            <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold mb-4">Frontend Development Essentials</h3>
                <ul className="list-disc list-inside mb-6 space-y-2">
                    <li>
                        <strong>HTML</strong>: The standard markup language for creating web pages.
                    </li>
                    <li>
                        <strong>CSS</strong>: A style sheet language used for describing the presentation of a document written in HTML.
                    </li>
                    <li>
                        <strong>JavaScript</strong>: A programming language that enables interactive web pages.
                    </li>
                    <li>
                        <strong>React</strong>: A JavaScript library for building user interfaces, especially for single-page applications.
                    </li>
                    <li>
                        <strong>Version Control (Git)</strong>: A system that records changes to files over time.
                    </li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4">Useful Tools & Resources</h3>
                <ul className="list-disc list-inside mb-6 space-y-2">
                    <li>
                        <strong>VSCode</strong>: A powerful code editor with built-in support for JavaScript and many extensions.
                    </li>
                    <li>
                        <strong>Figma</strong>: A web-based app for interface design and prototyping.
                    </li>
                    <li>
                        <strong>Chrome DevTools</strong>: A set of web developer tools built directly into Google Chrome.
                    </li>
                    <li>
                        <strong>MDN Web Docs</strong>: A comprehensive resource for learning web development technologies.
                    </li>
                    <li>
                        <strong>Frontend Mentor</strong>: A platform to practice building real projects.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Fitteen;
