import React, { useEffect, useState } from "react";

export default function TodoItem ({id, modify, remove, title, color}) {
    const [text, setText] = useState(title);
    const [modifyMode, setModifyMode] = useState(false);

    const handleItemClick = () => {
        setModifyMode(prev => !prev);
        if(modifyMode) {
            modify(id, text);
        }
    }

    return (
        <div style={{display: 'flex', justifyContent:'space-around', alignItems: 'center', gap: '8px'}}>
            <div
                id={id}
                onClick={handleItemClick}
                style={{width:'100%', backgroundColor: color, padding: '8px', borderRadius: '4px'}}
            >
                {modifyMode ? (
                    <input 
                        type='text'
                        value={text}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => setText(e.target.value)}
                    />
                ) : title}
            </div>
            <button 
                onClick={remove}
                style={{display: 'flex', justifyContent: 'center', textAlign: 'center', width: '20px', height: '20px', border: 'solid', backgroundColor: 'white', borderColor:'rgb(255 205 205)', color:'rgb(255 205 205)', borderRadius: '100%', fontWeight: 'bold'}}
            >X
            </button>
        </div>
    )
}