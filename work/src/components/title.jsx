
function Title () {
    console.log("Rendering title component");
    let i =0;
    while(i < 10000000){
        i++;
    }
    return <h1>React code optimization</h1>
}
export default Title;