import React from "react";
import { Component } from "react";

class Classrendering extends Component {
    constructor() {
        super()
        this.state = {
            login: false
        }
    }
    render() {

        return this.state.login && <h1>welcome to romikk</h1>


        this.state.login ?
            <h1>welcome to Romikk</h1> :
            <h1>welcome to Guest</h1>





        // if (this.state.login) {
        //     return <> <h1>Welcome Romik</h1></>
        // }
        // else {
        //     return <> <h1>Welcome Guest</h1></>

        // }
    }
}

export default Classrendering;