import React from "react";
import Funcationchild from "./Funcationchild";

const Funcationprops = () => {
    const data = 20
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6 offset-6">
                        <ul>
                            <h2>Funcationprops</h2>
                            <Funcationchild name="Romik Rudakiya" data={data} />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Funcationprops;
