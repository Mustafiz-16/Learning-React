import { useEffect, useState } from "react"

export default function Effect() {
    const [currentTime, setCurrentTime] = useState(new Date());

    // setInterval (() => {
    //     setCurrentTime(new Date());
    //     console.log('kicho ekta');
    // },1000);

    const [count, setCount] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setCurrentTime(new Date());
            console.log('kicho ekta');
        }, 1000);
        return () => clearInterval(id);
        //console.log("kichu ekta")
    }, [count]);

    return (
        <>
            <div style={{ fontSize: "2rem" }}>
                Current time {currentTime.toString()}
            </div>
            <br />
            <button onClick={() => setCount((prev) => prev - 1)}>-</button>
            <span>{count}</span>
            <button onClick={() => setCount((prev) => prev + 1)}>+</button>
            {/* <div>Effect</div> */}

        </>
    )
}