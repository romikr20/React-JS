import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

class Classcompomenu extends Component {
    render() {
        return (
            <>
                <ul>
                    <li><Link to="Classcompointro">Classcompointro</Link></li>
                    <li><Link to="Classcompojsx">Classcompojsx</Link></li>
                    <li><Link to="Classcompoprops">Classcompoprops</Link></li>
                    <li><Link to="Classcompostate">Classcompostate</Link></li>
                    <li><Link to="Statelifecycle">Statelifecycle</Link></li>
                    <li><Link to="Classrendering">Classrendering</Link></li>
                    <li><Link to="ClassUncontrolledCompo">ClassUncontrolledCompo</Link></li>
                    <li><Link to="Classcontrolledcompo">Classcontrolledcompo</Link></li>
                </ul>
                <Outlet></Outlet>
            </>
        )
    }
}
export default Classcompomenu