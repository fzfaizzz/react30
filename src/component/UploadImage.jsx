import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

function Eleven() {
    const [file, setFile] = useState(null);

    const handleFile = (e) => {
        const selectedFile = e.target.files[0]; // Fix: e.target.files instead of e.target.file
        setFile(selectedFile);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full text-center">
                <h2 className="text-2xl font-bold text-gray-700 mb-4">Upload an Image</h2>
                
                <label 
                    htmlFor="fileUpload" 
                    className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg cursor-pointer hover:bg-blue-700 transition duration-300 mb-6"
                >
                    Choose a File
                </label>
                <input 
                    id="fileUpload" 
                    type="file" 
                    accept="image/*" 
                    onChange={handleFile} 
                    className="hidden"
                />

                {file ? (
                    <div className="mt-4">
                        <img 
                            src={URL.createObjectURL(file)} 
                            alt="Uploaded" 
                            className="max-w-full max-h-72 rounded-lg shadow-md"
                        />
                        <p className="mt-3 text-gray-600">File: {file.name}</p>
                    </div>
                ) : (
                    <p className="text-gray-500 mt-5">No file selected</p>
                )}

                {/* Next button to route to another page */}

            </div>
            <Link to="/twelve" className="mt-6 inline-block bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300">
                    Next
                </Link>
        </div>
    );
}

export default Eleven;
