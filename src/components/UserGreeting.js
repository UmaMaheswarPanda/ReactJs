import React, { Component } from 'react'

export default class UserGreeting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        return this.state.isLoggedIn && <div>Welcome viswas</div>
        // return this.state.isLoggedIn ? (
        //     <div>
        //         <h1>Welcome sumit</h1>
        //     </div>
        // ) : (
        //     <div>
        //         <h1>Please login to see the greeting</h1>

        //     </div>
        // )

        // let message
        // if (this.state.isLoggedIn) {
        //     message = <h2>Welcome Back, sumit</h2>
        // }
        // else {
        //     message = <h2>Please Login to Continue</h2>
        // }
        // return (
        //     <div>
        //         {message}
        //     </div>
        // )

    }
}
