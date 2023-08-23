import { Component } from "react";
// import React{ Component } from "react";

class Classcompostate extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    Icrement = () => {
        console.log("Icrement");
        this.setState({ count: this.state.count + 10 })
    }
    Decriment = () => {
        console.log("Decriment");
        this.setState({ count: this.state.count -10 })
    }
    render() {
        let a = 100
        return (
            <>
                <h1>{this.state.count}</h1>
                <button onClick={this.Icrement}>Icrement</button>
                <button onClick={this.Decriment}>Icrement</button>
            </>
        );
    }
}

export default Classcompostate;