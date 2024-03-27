import React from "react";
import "./style.css"

function Button({
    text="",
    onClick,
    className=""
}){

    return (
        <button className={`button ${className}`} onClick={onClick}>{text}</button>
    )
}

export default Button;