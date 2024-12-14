import React from 'react'
import { useTheme } from './Theme';

function DarkMode() {
    const { isdark, toggleTheme } = useTheme(); // Correct destructuring

    return (
        <div>
            <input type="checkbox" checked={isdark} onChange={toggleTheme} className='hidden' />
        </div>
    );
}

export default DarkMode;
