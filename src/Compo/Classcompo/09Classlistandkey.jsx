import React from "react";
import { Component } from "react";

class Classlistkeys extends Component {
    constructor() {
        super()
        this.state = {
            items: [1, 2, 3, 4, 5, 6]
        }
    }
    add() {
        console.log("add");
        this.setState({
            items: [1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13,]

        })
    }
    render() {
        // const items = [1, 2, 3, 4, 5, 6]
        const Lisitems = this.state.items.map((item) => <li key={item.toString}>{item}</li>)
        return (
            <>
                <h1>Classlistkeys</h1>
                <ul>
                    {Lisitems}
                </ul>
                <button onClick={() => this.add()}>Add</button>
            </>
        );
    }
}

export default Classlistkeys;