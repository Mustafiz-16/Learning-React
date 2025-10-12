

function Button({ children, ...props }) {
    console.log("Rendering button Component");
    return (
        // <><button style={ props.style} onClick={props.onClick} >{children}</button></>
        <button {...props}>{children}</button>
        // <div>
        //     <button>Button</button>
        // </div>
        


    )
}
export default Button
