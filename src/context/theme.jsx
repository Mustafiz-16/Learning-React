import { createContext, useState } from "react";

export const ThemeContext = createContext();


export const ThemeProvider = ({children}) =>{
    const [theme, setTheme] = useState("Light");

    console.log("Rendering Theme provider");

    return (
        <ThemeContext.Provider value={{theme, setTheme}} >
            {/* <h1>Context</h1> */}
            {children}
        </ThemeContext.Provider>

    );
}