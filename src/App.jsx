//Normal function
// function App() {
//   return (
//     <>
//       <h1>Hello world</h1>
//     </>
//   );
// }
// export default App;



//Another way to right a Normal function
// export default function App() {
//   return (
//     <>
//       <h1>Hello world</h1>
//     </>
//   );
// }


//Arrow function
// export const App = () => {
//   return <>
//   <h1>hello world</h1>

//   </>;
// }


// import { Fragment } from "react"
// import { Add } from "./components/add"
// import H1 from "./components/h1"
// import H5, { Country, H4 } from "./components/h2"






// export const App = () => {
//   return (
//     <>
//       <H1 name = "Hello, this is my first React code." />
//       <H1 name="Mustafizur" character = "Bad person" />
//       <H1 name="Rahaman" />
//       <Country Country = "Bangladesh"/>
//       <H4 food = "Biriani" />
//       <H5 city = "Comilla" />
//       <Add a= {5} b={6} />
      
//     </>
//   )
// }



import Authinfo from "./components/author_info"
import Blogcontent from "./components/blogcontent"
import { Image } from "./components/blogimage"
import Footer from "./components/footer"
import Header from "./components/header"
import { Subscribe } from "./components/subscribebutton"




export const App = () => {
  return (
    <div>
      <Header title = "Daily Blog" />
      <Authinfo name = "Mustafizur Rahaman" date = "Sep 30, 2025" />
      <Blogcontent text = "This is a sample paragraph for a Medium-style blog post. It demonstrates how multiple React components can work together with props to create a structured, reusable UI." />
      <Footer text = "© 2025 Mustafizur Rahaman Chowdhury" />
      <Image image ="src\assets\istockphoto-887987150-612x612.jpg"/>
      <Subscribe plan = "Subscribe to ProPlan" />

    </div>
  )
}






