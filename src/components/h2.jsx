


//react e export er kaj hocche kono file er bitore function,variable,component onno file e use korar jonno export kora
//export ---> ei function/variable/components onno file e use kora jabe
//import-----> onno file theke ei function/variable/components ansi ei file e use korar jonno 
 export const Country = ((props) => {
    return <p>My Country Name is {props.Country}</p>
})
export const H4 = ((props) => {
    return <h2>I like to eat {props.food}</h2>
})

export default function H5(props) {
    return <h2>I live in {props.city}</h2>
}