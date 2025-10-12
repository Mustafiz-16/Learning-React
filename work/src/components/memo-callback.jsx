import { memo, useState } from "react"
import Button from "./button";
import Title from "./title";
import { useCallback } from "react";
import { useMemo } from "react";

const MemorizedTitle = memo(Title);
const MemorizedButton = memo(Button);

//memo boltese je props unchanged thakle rerender skip korbe
//use diye ja kicho start hoy react oigula ke hook bole react e

function MemoCallback() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);



    // console.log("Render Memocallback Component");


    //useCallback(fn, dependencies);
    //usecallback hocche kono ekta function ke casch e dore rakte pare
    const handleIncrement = useCallback(() => setCount(prev => prev + 1), [])
    // const handleIncrement = useCallback(() => setCount(count + 1), [count]); //dependency array te
    const handleDecrement = useCallback(() => setCount(prev => prev - 1), [])


    // const isEven = () => {
    //     let i = 0;
    //     while (i < 1000000000) {
    //         i++;
    //     }
    //     return count % 2 === 0;
    // }
    const isEven = useMemo(() => {  //usememo use kori function er khetre r memo use kori component er khetre
        let i = 0;
        while (i < 1000000000) {
            i++;
        }
        return count % 2 === 0;
    }, [count]);


    return (
        <div>
            <MemorizedTitle />
            <p>{count}</p>
            {/* <Button style={{background: "red"}} onClick ={handleIncrement} >
                +
                </Button>
            <Button style ={{background: "red"}} onClick = {handleDecrement}>-</Button> */}
            {/* accha eikhane hocche giyea jokhon ami memo te Button ta raksi tarpor o render hoitechilo amar react  memo boltese je props unchanged thakle rerender skip korbe */}



            {/* <MemorizedButton style={{ background: "red" }} onClick={handleIncrement} >
                +
            </MemorizedButton>
            <MemorizedButton style={{ background: "red" }} onClick={handleDecrement}>-</MemorizedButton> */}


            {/* <p> {isEven() ? 'Even' : 'odd'} </p> */}
            <p> {isEven ? 'Even' : 'odd'} </p>



            <MemorizedButton onClick={handleIncrement} >+</MemorizedButton>
            <MemorizedButton onClick={handleDecrement}>-</MemorizedButton>



            {/* eikhane theke style theke sorai deya karon e (Rendering button Component) eita r render hocche nah r amra handleincrement r decrement memory te save kore raktesi */}




            {/* first e hocche amra title component ta re call korlam then title ta ke div er moddhe  raklam r button ta ke o raklam amra jani hocche kono ekta component othoba state e change hoy tahole or bitor ja kicho sob hocche rerender hobe so jokhon button click kori thokon (Render Memocallback Component) then (Rendering title component) abar (Rendering button Component) eita o rerender hocche jar karone sob dehkaitese but sobgulu amader bar bar rerender korar dorakar nai...dhora jahk je button, title eigula onek heavy component eigula ke bar bar rerender korar dorkar nai eigula ke bar bar rerender korle codebase slow hoye jabe so eita prevent korar jonno ki kortesi sob kicho hocche constant tai eigula memo(title) diyea raika dilam memory te save kore so erpor johon button click kortesei (Rendering title component) eita ek bar render hocche ekon r bar bar hocche nah so eita te Memorizedtitle e jehtu kono props pass kortesi nah unchanged ase sobkicho tai eita r dorkar nai rerender korar tik samevabe memory te save kore raklam button ta ke so MemorizedButton ta ke props pass kore raklam(onclick e handleincrement/handledecrement ei 2ta function ke pass kore raklam) ekon ami mone kortesi je title moto button ta o kaj korbe kinto jokhon click kortesi thokon hocche (Rendering button component) eita rerender kortese ei jinish ta karon hocche (memo doc file)  memo doc file onujai dehksi je props jodi unchanged thake rrender kore nah but MemorizedButton e toh props pass korsi eita kore ki jokhon setcount ta  state change hocche eita ei handleincrement/handledecrement function ta ke abar create kore so jar previous state e je function ta r current state e je function eita reference change hoye gese...so jehtu refeernence change hoye gese tai eita dhore niche handleIncrement/handledecrement ei 2ta function er props change hoye gese dhore nicche memory jehtu eder memory refence changed hoyse jar karone MemorizedButton ta abar rerender hocche tai (Rendering button component) ta rerender hocche amra dehktesi  so ei jinish prevent kora jaito jodi hocche amra memo er moto  cache ta dore rakha jai so eirokam kono ekta function ke cache e dhore rakte chaile amra use kori usecallback eita ki kore jokhon first render kore jinishgula thokon hocche cache er moddhe handleIncrement/handledecrement function ta ke save kore rakhe jar karone hocche amra r (Rendering button Component) ke render hoite dehki nah jethu eita save hoye ase cache r hocche giyea props gula o unchanged ase tai amra memo doc file onujai jani je(props jodi unchanged thake rrender kore nah) .....so finally ekon r title r button rerender kore nah*/}


            <hr />
            <p>{count2}</p>
            <p>{count2 % 2 === 0 ? "Even" : "odd"}</p>
            <button onClick={() => setCount2(prev => prev + 1)}>+</button>
            <button onClick={() => setCount2(prev => prev + 1)}>-</button>


            {/* mainly kono ekta state jokhon change hoy thokon oi state er moddhe ja kicho ase sob hocche ek bar kore rerender kore so jokhon count2 ke change kortesi thokon MemoCallback() ei function er sobkicho rerender hoitase ekbar kore*/}

            {/* khhokhon memo use kormu khkohon usememo use kormu  jokhon hocche component hocche render hoite time nibe othoba heavy shodhou matro oishob khetre thokon hocche memo use kormu  function er khetre hocche usememo use kormu.....so jokhon mone hobe je component othoba function time nibe oigula hocche wrap kore nibo*/}


        </div>
    )
}

export default MemoCallback;


