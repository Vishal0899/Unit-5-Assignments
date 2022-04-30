import React from "react";
import "../App.css"

export const Counter = ({CoUnt}) =>{
    
    return(
        <div className="btn">
            <button onClick={() => CoUnt(1)}>Inc</button>
            <button onClick={() => CoUnt(2)}>Double</button>
            <button onClick={() => CoUnt(-1)}>Dec</button>
        </div>
    )
}