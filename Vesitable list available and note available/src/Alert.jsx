import React from "react";

function MyButton() {
    
    function handleClick() {
        alert('You clicked me!');
    }

    return (
        <button onClick={handleClick} className="button_css">
            Click me
        </button>
    );
}
export default MyButton