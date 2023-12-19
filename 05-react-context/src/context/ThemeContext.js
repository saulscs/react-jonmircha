import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const initialTheme = "light";

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(initialTheme);

    const handleTheme = (e) => {
        if(e.target.value === "light") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };
    
    const data = {theme, handleTheme};
    
    return <ThemeContext.Provider value={data}> {children}</ThemeContext.Provider>;
};

export const useThemeContext = () => useContext(ThemeContext);