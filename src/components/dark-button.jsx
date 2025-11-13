import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/theme";

// export default function Button({theme, setTheme}){

//     const toggleTheme = () => {
//         setTheme(theme === "light" ? "dark" : "light");
//     };
//     return <button onClick={toggleTheme}>Change Theme (Current {theme})</button>
// }

export default function DarkButton(){
    const {theme, setTheme} = useContext(ThemeContext);


    const toggleTheme = () => {
        setTheme("dark");
    };
    return <button onClick={toggleTheme}>Dark Theme (Current {theme})</button>
}