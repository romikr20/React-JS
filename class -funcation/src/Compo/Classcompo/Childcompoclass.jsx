import React from "react";
import { Component } from "react";
class Childcompoclass extends Component {
    render() {
        return (
            <>
                <h1>Child compo</h1>
                <h1>{this.props.data}</h1>
                <h1>{this.props.email}</h1>
            </>
        );
    }
}

export default Childcompoclass;