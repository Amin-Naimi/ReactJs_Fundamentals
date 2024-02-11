import React, { Component } from 'react';

class EventBind extends Component {
    constructor(){
        super()
        this.state = {
            message: 'Hello'
        }
        //3-this.changeMessage = this.changeMessage.bind(this)// binding in the constructor
    }

   /* changeMessage(){
        this.setState({ message: 'Bonjour Mohamed Amin' })
        console.log(this);
    }*/

    // 4- Methode:

    changeMessage = () => {
        this.setState({
            message: "Good Morning"
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message} </div>
                {/* 1- <button onClick={this.changeMessage.bind(this)}>Click</button>*/}
                {/* 2- <button onClick={()=>this.changeMessage()}>Click</button>*/}
                 <button onClick={this.changeMessage}>Click me</button>

            </div>
        );
    }
}

export default EventBind;