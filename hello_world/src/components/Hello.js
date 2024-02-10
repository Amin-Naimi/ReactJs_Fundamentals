import React, {Component} from "react";
class Hello extends  Component{

    render(){
        const {name, lastName} = this.props;
        const {state1, state2} = this.state;
        
        return <h1>Hello {name} {lastName} (class Component)</h1>
    }
}
export default Hello;