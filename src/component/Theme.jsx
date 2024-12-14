import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [isdark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark((prevMode) => !prevMode);
    };

    return (
        <ThemeContext.Provider value={{ isdark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const useTheme = () => {
    return useContext(ThemeContext);
};

export { ThemeProvider, useTheme };
