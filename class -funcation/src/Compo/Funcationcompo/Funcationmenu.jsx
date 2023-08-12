import React from "react";
import { Link, Outlet } from "react-router-dom";
const Funcationmenu = () => {
    return (<>
        <div className="container">
            <div className="row">
                <div className="col-6 offset-6">
                    <ul>
                        <li><Link to="Funcationcompointro">Funcationcompointro</Link></li>
                        <li><Link to="Funcationprops">Funcationprops</Link></li>
                        <li><Link to="Usestate">Usestate</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <Outlet></Outlet>
    </>
    );
}

export default Funcationmenu;


