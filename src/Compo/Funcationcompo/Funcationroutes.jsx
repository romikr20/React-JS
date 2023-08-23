import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Funcationmenu from "./Funcationmenu";
import Funcationcompointro from "./01Funcationcompointro";
import Funcationprops from "./02Funcationprops";
import Usestate from "./03Usestate";
import Useeffect from "./04Useeffect";
const Funcationroutes = () => {
    return (<>
        <Routes>
            <Route path="/" element={<Funcationmenu />}>
                <Route path="Funcationcompointro" element={<Funcationcompointro />} />
                <Route path="Funcationprops" element={<Funcationprops />} />
                <Route path="Usestate" element={<Usestate />} />
                <Route path="Useeffect" element={<Useeffect />} />

            </Route>
        </Routes>
    </>);
}

export default Funcationroutes;
