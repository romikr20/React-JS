import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Funcationmenu from "./Funcationmenu";
import Funcationcompointro from "./01Funcationcompointro";
import Funcationprops from "./02Funcationprops";
import Usestate from "./03Usestate";
const Funcationroutes = () => {
    return (<>
        <Routes>
            <Route path="/" element={<Funcationmenu />}>
                <Route path="Funcationcompointro" element={<Funcationcompointro />} />
                <Route path="Funcationprops" element={<Funcationprops />} />
                <Route path="Usestate" element={<Usestate />} />

            </Route>
        </Routes>
    </>);
}

export default Funcationroutes;