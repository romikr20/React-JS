import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Classcompomenu from "./Classcompomenu";
import Classcompointro from "./01Classcompointro";
import Classcompojsx from "./02Classcompojsx";
import Classcompoprops from "./03Classcompoprops";
import Classcompostate from "./04Classcompostate";
import Statelifecycle from "./05Statelifecycle";
import Classrendering from "./06Classrendering";
import ClassUncontrolledCompo from "./07ClassUncontrolledCompo";
import Classcontrolledcompo from "./08Classcontrolledcompo";
import Classlistkeys from "./09Classlistandkey";
import Othercompo from "./Statelifting/Othercompo";
import Statelifting from "./Statelifting/Statelifting";
import Hoc from "./HOC/Hoc";

class Classcomporoutes extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Classcompomenu />}>
                    <Route path="Classcompointro" element={<Classcompointro />} />
                    <Route path="Classcompojsx" element={<Classcompojsx />} />
                    <Route path="CLasscompoprops" element={<Classcompoprops />} />
                    <Route path="Classcompostate" element={<Classcompostate />} />
                    <Route path="Statelifecycle" element={<Statelifecycle />} />
                    <Route path="Classrendering" element={<Classrendering />} />
                    <Route path="ClassUncontrolledCompo" element={<ClassUncontrolledCompo />} />
                    <Route path="Classcontrolledcompo" element={<Classcontrolledcompo />} />
                    <Route path="Classlistkeys" element={<Classlistkeys />} />
                    <Route path="Othercompo" element={<Othercompo />} />
                    <Route path="Statelifting" element={<Statelifting />} />
                    <Route path="Hoc" element={<Hoc />} />
                </Route>
            </Routes>
        )
    }

}
export default Classcomporoutes