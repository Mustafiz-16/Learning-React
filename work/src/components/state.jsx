import { useState } from "react"

function State() {
    const [count, setCount] = useState(0)


    const handleIncrement = () => {
        // setCount(count + 1);
        // console.log(1);
        // setCount(count + 1);
        // setCount(count + 1); 


        //prev er moddhe hocche current value 0 ta ase then hocche prev+1 thokon prev er moddhe hocche 1(0+1) tarpor hocche ()
        setCount((prev) => prev + 1); //(0) => 0+1 =1
        setCount((prev) => prev + 1); //(1) => 1 +1 =2
        setCount((prev) => prev + 1); //(2) => 2+1 = 3
        //then loop ta ekbar cholar por hocche 3 hobe 
        //then Next click korle abar first theke start hoye 6 hobe
    };
    return (
        <>

            <p>{count}</p>
            <button onClick={handleIncrement}>Increment</button>

        </>
    )
}

export default State;
