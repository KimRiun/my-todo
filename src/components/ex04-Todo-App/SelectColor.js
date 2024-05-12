import React from "react";

export default function SelectColor ({ onClick, color}) {

    return (
        <div
            onClick= {() => onClick(color)}
            style= {{width:'20px', height: '20px', borderRadius: '100%', backgroundColor: color}}
         >     
        </div>
    )
}