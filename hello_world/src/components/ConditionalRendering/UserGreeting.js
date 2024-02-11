import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor(params) {
        super(params);

        this.state = {
            isLoggedIn: true
        }
        this.loggin = this.loggin.bind(this)
        this.logOut = this.logOut.bind(this)
    }
    loggin() {
        this.setState({ isLoggedIn: true })
    }
    logOut() {
        this.setState({ isLoggedIn: false })
    }
    render() {
        {/* fourth Methode : Short circuit operator approche:*/ }
        return(
            this.state.isLoggedIn && <div>Welcome Mohamed</div>
        )

        {/* Third Methode : Ternary Conditional operator approche :*/ }

        /*return(
            this.state.isLoggedIn ? <div>Welcome Mohamed</div> : <div>Welcome Gueste</div>
        )*/


        {/* Seconde Methode : elements variables approche:*/ }
        /*let message
        if (this.state.isLoggedIn) {
            message = <div>Welcome Mohamed</div>
        }
        else {
            message = <div>Welcome Guest</div>
        }
        return <div>
            <button onClick={this.loggin}>LogIn</button>
            {message}
            <button onClick={this.logOut}>LogOut</button>
        </div>*/

        {/* First Methode: if else approche:*/ }
        /*if (this.state.isLoggedIn) {
            return (
                <div>
                    Welcome Mohamed
                </div>
            )
        } else{
            return (
                <div>Welcome Guest</div>
            );}*/

    }
}

export default UserGreeting;