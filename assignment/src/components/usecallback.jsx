// import  { useCallback, useState, memo } from "react";


// import Child from "./child";

// const MemorizedChild = memo(Child);

// const Parent = () => {
//     const [count, setCount] = useState(0);

//     const increment = useCallback(() => setCount(prev => prev + 1),[]);

//     console.log("Parent render");

//     return (
//         <div>
//             <h1>Count: {count}</h1>
//             <MemorizedChild increment={increment} />
//             <button onClick={() => setCount(count + 1)}>Increment from Parent</button>
//         </div>
//     );
// };

// export default Parent;





import  { useState } from "react";


import Child from "./child";



const Parent = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prev => prev + 1);

    console.log("Parent render");

    return (
        <div>
            <h1>Count: {count}</h1>
            <Child increment={increment} />
            <button onClick={() => setCount(count + 1)}>Increment from Parent</button>
        </div>
    );
};

export default Parent;