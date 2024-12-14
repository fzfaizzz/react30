import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';

function Eight() {
    const [input, setInput] = useState("");
    const [todo, setTodo] = useState([]);
    
    const addTodo = () => {
        if (input.trim() !== '') {
            setTodo([...todo, input]);
            setInput("");
        }
    }

    const removeTodo = (index) => {
        const updatedTodos = todo.filter((_, i) => i !== index);
        setTodo(updatedTodos);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Todo List</h1>
                
                <div className="flex mb-6">
                    <input 
                        type="text" 
                        value={input} 
                        placeholder="Add Todo" 
                        onChange={(e) => setInput(e.target.value)} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring- focus:ring-blue-500"
                    />
                    <button 
                        onClick={addTodo} 
                        className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700 transition duration-300 flex items-center"
                    >
                        <FaPlus className="mr-2" />
                        Add
                    </button>
                </div>

                <ul className="list-disc px-2 space-y-2">
                    {todo.map((todo, index) => (
                        <li key={index} className="flex justify-between items-center bg-gray-50 p-3 rounded-md shadow hover:bg-gray-100 transition duration-200">
                            <span className="text-gray-800">{todo}</span>
                            <button 
                                onClick={() => removeTodo(index)} 
                                className="text-red-500 hover:text-red-700 focus:outline-none"
                            >
                                <FaTrashAlt />
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Display message if no todos are available */}
                {todo.length === 0 && <p className="text-gray-500 text-center mt-4">No todos added yet</p>}

                {/* Next button */}
                <Link 
                    to="/nine" 
                    className="block bg-blue-600 text-white text-center font-semibold py-3 px-5 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 mt-6"
                >
                    Next
                </Link>
            </div>
        </div>
    );
}

export default Eight;
