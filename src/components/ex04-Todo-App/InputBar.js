import React from "react";

export default function InputBar ({onChange, onClick, color}) {
    return (
        <div style={{display: 'flex', justifyContent:'center', textAlign: 'center', gap: '4px', margin: '12px'}}>
            <input 
                type="text" 
                placeholder="할 일이 무엇인가요?"
                onChange={(e) => onChange(e.target.value)} 
                style={{backgroundColor: color, padding:'8px', width:'40%', border: 'none', borderRadius: '4px'}}
            />
            <button 
                onClick={onClick}
                style={{padding: '4px', paddingLeft: '12px', paddingRight:'12px', border: 'none', backgroundColor: '#ede8e4', color:'#5c5957', borderRadius: '4px'}}
            >
                등록
            </button>
        </div>
    )
}