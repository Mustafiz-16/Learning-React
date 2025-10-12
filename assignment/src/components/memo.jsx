import { useState, memo } from "react";
import UserCard from "./usercard";


const MemorizedUserCard = memo(UserCard);


function MemoPractice() {

    const [count, setCount] = useState(0);
    const [user, setUser] = useState({ name: "Fizz", age: 22 });

    console.log("Rendering MemoPractice component");

    return (
        <div>
            {/* <UserCard /> */}
            <MemorizedUserCard name={user.name} age={user.age} />

            <p>Counter is {count}</p>
            <button onClick={() => setCount(prev => prev + 1)}>Increment Counter</button>

            <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
                Increase Age
            </button>
        </div>
    );
}

export default MemoPractice;
