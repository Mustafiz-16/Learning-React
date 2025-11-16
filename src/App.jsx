
import P from "./components/p"
import User from "./components/user"

import { useContext } from "react";
import ThemeButton from "./components/theme-button";
import { ThemeContext } from "./context/theme";
import Effect from "./components/Effect";
import ApiEffect from "./components/Apieffect";

function App() {

  //const kicuEkta = useContext(ThemeContext);
  // console.log(kicuEkta);

  const {theme} = useContext(ThemeContext);
  console.log("Rendering App component");
  return (

    // <div style={{
    //   backgroundColor: theme === 'light' ? "lightblue" : "black",
    //   color: theme === 'light' ? "black" : "white",
    // }}>
    //   <P>Today we will learn context api, useEffect & useEffectEvent</P>
    //   <User />
    //   {/* <h1 className="bg-amber-500">hello world</h1>
    //   <p>how was the time</p> */}
    //   {/* <Button theme={theme} setTheme={setTheme}>Change Theme</Button> */}
    //   {/* <ThemeButton theme={theme} setTheme={setTheme} /> */}
    //   <ThemeButton />
    // </div>


    // <Effect />
    <ApiEffect />


  
  )
}

export default App
