

// import React from 'react'

// export default function App() {
//   return (
//     <div>
//       <h1 className='text-2xl'>Hello world</h1>

//     </div>
//   )
// }

// function App() {
//   let count = 0;

//   return (
//     <>
//       <h1>Count is {count}</h1>
//       <button
//         onClick={() => {
//           count++;
//           console.log(count);
//         }} className="px-4 py-2 bg-red-400 text-white rounded ml-2">Increment</button >
//       <button
//         onClick={() => {
//           count--;
//           console.log(count);
//         }} className="px-4 py-2 bg-red-400 text-white rounded ml-2">Decrement</button>
//     </>
//   );
// }
// export default App;



// import { useState } from "react";  //usestate keyword

// function App() {
//   // const hook = useState(0);
//   let [count,setCount] = useState(0); //destruting array
//   // console.log({ hook });

//   return (
//     <>
//       {/* <h1>Count is {hook[0]}</h1> */}
//       <h1>Count is {count}</h1>
//       <button
//         onClick={() => {
//           // hook[1](16)

//           //normal function
//           // count++;
//           // console.log(count);
//           // setCount(count);

//           setCount((prev) => {
//             prev++;
//             return prev;
//           });
//         }}
//          className="px-4 py-2 bg-red-400 text-white rounded ml-2">
//         Increment
//       </button >
//       <button
//         onClick={() => {
//           //normal function
//           // count--;
//           // console.log(count);
//           // setCount(count);

//           setCount((prev) => {
//             prev--;
//             return prev;
//           });


//         }} className="px-4 py-2 bg-red-400 text-white rounded ml-2">
//         Decrement
//       </button>
//     </>
//   );
// }
// export default App;



import { useState } from "react";

function App() {
  let [age, setAge] = useState(15); //destruting array

  // if(age > 18) return <p>You are an adult</p> 
  // else 
  return (
    <>
      <h1>Age is {age}</h1>
      <button
        onClick={() => {
          setAge((prev) => {
            prev += 5;
            return prev;
          });
        }}

        className="px-4 py-2 bg-red-400 text-white rounded ml-2">
        Increment
      </button >
      <button
        onClick={() => {
          setAge((prev) => {
            prev -= 5;
            return prev;
          });

        }} className="px-4 py-2 bg-red-400 text-white rounded ml-2">
        Decrement
      </button>
      {/* { jsx er moddhe hocche if-else diyea condition dile error ashbe tai ternary operator use korte hobe} */}
      <p>
        You are an { age < 6 ? "baby" : (age > 40 ? "old" : (age > 18 ? "Adult" : "child"))} </p> 


      {/* Html render */}
      {/* {age < 6 ? (<p>You are a baby</p>) : (age > 40 ? (<p>You are an old Man</p>) : (age > 18 ? (<p>You are an Adult</p>) : (<p>You are a child</p>) ))} */}
    </>
  );
}
export default App;
