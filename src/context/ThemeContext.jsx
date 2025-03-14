import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );                                                                                                                                                                                                                                                                                                                                                                                                 



useEffect(() => {
    document.documentElement.classList[theme === "dark" ? "add" : "remove"]("dark");
    localStorage.setItem('theme', theme);
}, [theme])

const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
}

return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
)

}
