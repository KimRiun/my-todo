import React from "react";
import SelectColor from "./SelectColor";

export default function ColorBar ({onClick}) {
    const colorArr = ['#e0ffcd', '#fdffcd', '#ffebbb', '#ffcab0'];

    return (
        <div style={{display: 'flex', justifyContent: 'center', gap: '4px'}}>
            {colorArr.map((color, i) => {
                return <SelectColor key={i} onClick={onClick} color={color}/>
            })}
        </div>
    )
}