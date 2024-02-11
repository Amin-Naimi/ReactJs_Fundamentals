import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(params) {
        super(params);
        this.state = {
            parentName: "Parent",
        }
        this.helloParent = this.helloParent.bind(this)
    }
    
    helloParent(childName ) {
        alert(`Hello ${this.state.parentName} from ${childName}` )
    }
    render() {
        // passing the method as props to the child component
        return (
            <div>
                <ChildComponent helloHandler={this.helloParent} ></ChildComponent>
            </div>
        );
    }
}

export default ParentComponent;