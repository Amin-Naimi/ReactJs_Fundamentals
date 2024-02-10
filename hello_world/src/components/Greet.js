import React from 'react';

/*function Greet(){
    return <h1>Hello Mohamed</h1>
}*/
// named export
export const Greet = props => {
    const {name, lastName} = props;
    return <h1>Greeting {name} {lastName}(function Component)</h1>
}
//export default Greet;



/*export const Greet = ({name, lastName}) => {
    return <h1>Greeting {name} {lastName}(function Component)</h1>
}*/


/*export const Greet = (props) => {
    console.log(props); // This line logs the props object
    return <h1>Greeting {props.name} {props.lastName} {props.children}(function Component)</h1>
}*/