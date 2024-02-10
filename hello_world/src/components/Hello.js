import React, {Component} from "react";
class Hello extends  Component{

    render(){
        return <h1>Hello {this.props.name} {this.props.lastName} (class Component)</h1>
    }
}
export default Hello;