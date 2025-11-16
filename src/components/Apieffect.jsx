import React, { useEffect, useState } from "react";


export default function ApiEffect() {
    //count er value ta change hoye jawate pora jinish ta abar rerender hocche jar karone fetchUsers() function ta abar call hoitease jar karone bar bar same data ta paitasi tai ei jinish ta ke prevent kora lagbe unneccsary api call hocche r ei jininsh ta ke prevent koarr jonno ei jinish ta ke useEffect er moddhe niyea jamu

    const [count, setCount] = useState(0);

    const [users, setUsers] = useState();
    const [user, setUser] = useState(); //empty array ({}) shodhou ei jinishta ke () undefined bujai
    const [id, setId] = useState();

    // const fetchUsers = async () => {
    //     const response = await fetch("https://jsonplaceholder.typicode.com/users");
    //     const data = await response.json();

    //     console.log({ data });
    //     setUsers(data);
    // }
    // const fetchUser = async () => {
    //     const response = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    //     const data = await response.json();

    //     console.log({ data });
    //     //setUsers(data);
    // }
    //fetchUsers();

    //so ekon unneccessary useEffect ta ke bondo hoye gese
    // useEffect(() => {
    //     fetchUsers();
    // }, []);


    //so ekon jodi useEffect er bitore je dependency array te kichu pass kori eita jodi change hoy tahole bitore je kaj ase eita o reperform korbe 
    // useEffect(() => {
    //     fetchUsers();
    // }, [count]);
    // useEffect(() => {
    //     console.log(id);
    //     fetchUser();
    // }, [id]);


    //jodi empty raki initial rendering er khetre ekbare call hobe then hocche giyea r call hobe nah
    // useEffect(() => {
    //     fetchUsers();
    // }, []);

    //react-18 othoba compaileer use nah korle aro best practice hocche eivabe kora
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();

            console.log({ data });
            setUsers(data);
        }
        fetchUsers();

    }, []);
    
    
    useEffect(() => {
        //console.log(id)
        const fetchUser = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
            const data = await response.json();

            // console.log({ data });
            setUser(data);
        }
        if (id) fetchUser();

    }, [id]);



    return (
        <>
            <div>Apifetch using useEffect</div>
            {/* <button onClick={() => setCount((prev) => prev - 1)}>-</button>
            <span>{count}</span>
            <button onClick={() => setCount((prev) => prev + 1)}>+</button> */}
            <ul style={{ listStyle: "none" }}>
                {users?.map(user =>
                    <li
                        key={user?.id}
                        style={{ cursor: "pointer", margin: "1rem 0", fontWeight: user?.id === id ? 'bold' : 'normal' }}
                        onClick={() => setId(user?.id)}
                    >
                        {user?.name} {user?.email}
                    </li>)}
            </ul>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div>
                {/* optional chaining ei ? questionmark ta hocche giyea jodi kono undefined othoba Null error pai oi error ta ke ignore kore amader prevent kore dei */}
                <p>Name: {user?.name}</p>
                <p>Email: {user?.email}</p>
                <p>Username: {user?.username}</p>
            </div>

        </>
    )


}