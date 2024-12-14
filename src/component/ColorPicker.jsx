import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ColorPicker() {
  const [selectColor, setSelectColor] = useState('#000000');

  const handleChange = (e) => {
    setSelectColor(e.target.value);
  };

  return (
  <div>
    <div className="flex flex-col items-center bg-gray-100 p-8 rounded-lg shadow-xl max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6 text-gray-700">Pick a Color</h1>
      <input
        type="color"
        className="w-10 h-10 mb-6 cursor-pointer border-none rounded-full"

        onChange={handleChange}
        value={selectColor}
      />
      <div
        className="w-32 h-32 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
        style={{ backgroundColor: selectColor }}
      ></div>
      <p className="mt-4 text-gray-700 font-medium">Selected Color: {selectColor}</p>
      <Link to="/fifteen" className="mt-6 inline-block bg-green-600 text-white font-semibold py-2 px-6 mx-auto rounded-lg hover:bg-green-700 transition duration-300">
                    Next
                </Link>
    </div>

    </div>
  );
}

export default ColorPicker;
