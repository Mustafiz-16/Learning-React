import DarkButton from "./dark-button";
import WhiteButton from "./white-button";


// export default function ThemeButton({theme, setTheme}){
//     return (
//         <div>
//             <DarkButton theme={theme} setTheme={setTheme}/>
//             <WhiteButton theme={theme} setTheme={setTheme}/>
//         </div>
//     )
// }

export default function ThemeButton(){
    return (
        <div>
            <DarkButton/>
            <WhiteButton/>
        </div>
    )
}