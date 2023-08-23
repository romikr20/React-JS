import React from "react";
import { useState } from "react";

const Usestate = () => {
    const [count, setCount] = useState(0)
    const [Item, setItem] = useState(10)
    const [text, setText] = useState("Romikkkk")
    return (<>
        <div className="container">
            <div className="row">
                <div className="col-6 offset-6">
                    <h1>Userstate</h1>
                    <h2>{count}</h2>
                    <h2>{Item}</h2>
                    <h2>{text}</h2>
                    <button onClick={() => setCount(count + 1)}>update</button>
                    <button onClick={() => setItem(Item * 2)}>update</button>
                    <button onClick={() => setText("Romi")}>update</button>

                </div>
            </div>
        </div>
    </>);
}

export default Usestate;
