import React from 'react';

/*function Greet(){
    return <h1>Hello Mohamed</h1>
}*/
// named export
export const Greet = (props) => {
    console.log(props); // This line logs the props object
    return <h1>Greeting {props.name} {props.lastName} {props.children}(function Component)</h1>
}
//export default Greet;