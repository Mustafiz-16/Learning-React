function UserCard({ name, age }) {
    console.log("Rendering UserCard component");

    let i = 0;
    while (i < 10000000) {
        i++;
    }

    return (
        <div>
            <h2>User Name: {name}</h2>
            <p>Age: {age}</p>
        </div>
    );
}

export default UserCard;
