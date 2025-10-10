
import { useState, memo } from "react";
import Title from "./title";
import Button from "./button";

const MemorizedTitle = memo(Title);

//eikhane ei memo component render er jonno hocche title component bar bar rendering kortese ojotha tai eita jate render nah kore tai hocche amra MemorizedTitle er moddhe hocche title ta ke save kore raksi r tai ki hocche eibar jodi dehke je title ta ekbar render hoye gese thokhon r eita ke render korai nah jar karone hocche amader r ekon ojotha title ta render hobe nah...ei karone amra memo name er function ta te Title ta component ta ke wrap kore disi r jehtu eita memory te save kora ase tai eita ke r render kortese nah


//so,jeigulu heavy-task component eigula ke amra memory te rakhbo like eikhane Memo functin er moddhe amra shodhou Title ta ke memo te raksi karon eitate hocche onek heavy task hocche like while loop ta onno khetre hocche amader je button components ase eitate themon kono heavy task hocche nah tai eita ke amra memo te raki nai 

//Heavy-task---> memo
//heavy-task nah hole --->memory te rakbo nah (tai button ke memo te raktesi nah)

function Memo()  {

    // const[count, setCount] = useState(0);
    const[color, setColor] = useState(0);
    console.log("Rendering memo component");
    return (
        <div>
            {/* <Title /> */}
            <MemorizedTitle />
            <Button />
            <p>color is {color}</p>
            {/* <p>{count}</p>
            <button onClick={()=>setCount((prev) => prev +1)}>Increment</button> */}
            <input type="color" onChange={e=> setColor(e.target.value)}/>
        </div>
    )
}

export default Memo;