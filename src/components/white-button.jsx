// export default function WhiteButton({theme, setTheme}){

//     const toggleTheme = () => {
        
//         setTheme("light");
//     };
//     return <button onClick={toggleTheme}>Light Theme (Current {theme})</button>
// }
import { useContext } from "react";
import { ThemeContext } from "../context/theme";

export default function WhiteButton(){
    const {theme,setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        
        setTheme("light");
    };
    return <button onClick={toggleTheme}>Light Theme (Current {theme})</button>
}