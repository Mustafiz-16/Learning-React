import { useState } from "react";

let i = 0;



const Form = () => {
    // const [name, setName] = useState("Fizz"); //usestate diyea amra value store kori
    // const [age, setAge] = useState(0);
    // const [gender, setGender] = useState("");

    const [input, setInput] = useState({
        name:'', 
        age: '0',
        gender: '',
    });


    // const handlechange = (setState, value) => {
    //     setState(value);
    // }
    const handleChange = (e) => {
        // console.log(e);


        // if(e.target.name === "name"){
        //     // input.name = e.target.value;
        //     setInput({...input, name: e.target.value});
        // }
        // else if(e.target.name === "age"){
        //     setInput({...input, age: e.target.value});
        // }
        // else if(e.target.name === "gender"){
        //     setInput({...input, gender: e.target.value});
        // }

        setInput(prevInput => {
            // console.log(prevInput);
            return {
                ...prevInput,
                [e.target.name]:e.target.value,
            };
        });
        
    }
    // console.log(i++);
    return (
        <>
            <input
                type="text"
                name="name"
                //ei jinish ta ke comment kore dile thokon eita hoye jabe uncontrolled mane react thokon eita control kore
                // value={name}
                value={input.name}
                // onChange={(e) => {
                //     console.log(e.target.value); //last word khali capture hoitase
                //     setName(e.target.value);
                // }}
                // onChange={(e) => handleChange(e)}
                onChange={handleChange}
            ////jokhon uncomment kore dimu thokon hoye jabe controlled mane amra thokon eita control korte parmu
            />
            <input
                type="number"
                name="age"
                // value={age}
                value={input.age}
                // onChange={(e) => {
                //     setAge(e.target.value);
                // }}
                // onChange={(e) => handlechange(setAge, e.target.value)}
                // onChange={(e) => handleChange(e)}
                onChange={handleChange}

            //efficently korar jonno use kori eivabe use kori
            />
            <select
                // value={gender}
                value={input.gender}
                name="gender"
                //onchange eita hocche read only hoye jabe comment kore dile
                // onChange={(e) => {
                //     setGender(e.target.value);
                // }}
                // onChange={(e) => handlechange(setGender, e.target.value)}
                // onChange={(e) => handleChange(e)}
                onChange={handleChange}
                // onChange={(e) => handleChange(e)} //immediate kono function jodi call kora lage
            >
                <option value="">select</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
            </select>
            {/* <p>My name is {name}  My age is {age} I am {gender}</p> */}
            <p>My name is {input.name}  My age is {input.age} I am {input.gender}</p>


        </>
    );
};
export default Form;
//export { Form };