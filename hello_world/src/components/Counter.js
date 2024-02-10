import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    // if you try to modify the state directly react will not rerender the component
    // 'setState' other hand will let react know it has to re render the copmponent
    // set state is asynchronous
    /* async increment(){
         await this.setState({counter: this.state.counter + 1})
         console.log(this.state.counter)
     }*/

    // The second parameter in the "setState Methode " is the arrow function where we log the updated state
    increment() {
        /*this.setState(
            { counter: this.state.counter + 1 },
            () => {
                console.log("Callback value: " + this.state.counter)
            }
        )*/

        this.setState((prevState ,props)=>(
            {counter: prevState.counter + 1}
        )
        )
        console.log(this.state.counter)
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    render() {
        return (
            <div>
                count {this.state.counter}
                <br></br>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>

        );
    }
}

export default Counter;