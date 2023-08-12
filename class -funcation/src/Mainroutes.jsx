import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./contact";
import Product from "./Product";
import Shop from "./Shop";
import Support from "./Support";
import Header from "./com-comp/Header"
import Example from "./Example";

const Classcomporoutes = React.lazy(() => import("./Compo/Classcompo/Classcomporoutes"))
const Funcationroutes = React.lazy(() => import("./Compo/Funcationcompo/Funcationroutes"))
const Mainroutes = createBrowserRouter([
    {
        path: "/",
        element: <><Header /><Home /></>
    },
    {
        path: "about",
        element: <><Header /><About /></>
    },
    {
        path: "contact",
        element: <><Header /><Contact /></>
    },
    {
        path: "product",
        element: <><Header /><Product /></>
    },
    {
        path: "shop",
        element: <><Header /><Shop /></>
    },
    {
        path: "support",
        element: <><Header /><Support /></>
    },
    {
        path: "example",
        element: <><Header /><Example /></>,
        children: [
            {
                path: "Classcompo/*",
                element: <Suspense fallback={<h2>Loading....</h2>}><Classcomporoutes /></Suspense>
            },
            {
                path: "Funcationcompo/*",
                element: <Suspense fallback={<h2>Loading....</h2>}><Funcationroutes /></Suspense>
            }
        ]
    }
]);
export default Mainroutes