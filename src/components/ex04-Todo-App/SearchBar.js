import React, { useState } from "react";

export default function SearchBar ({onClick}) {
    const [keyword, setKeyword] = useState('');
    return (
        <div style={{display: 'flex', justifyContent:'center', textAlign: 'center', gap: '4px', margin: '12px'}}>
            <input 
                type="text" 
                placeholder="검색어"
                value={keyword}
                onChange={(e)=>setKeyword(e.target.value)}
                style={{padding:'8px', width:'40%', border: 'none', backgroundColor:'rgb(248 248 248)', borderRadius: '4px'}}
            />
            <button 
                onClick={() => onClick(keyword)}
                style={{padding: '4px', paddingLeft: '12px', paddingRight:'12px', border: 'none', backgroundColor: '#ede8e4', color:'#5c5957', borderRadius: '4px'}}
            >
                검색
            </button>
        </div>
    )
}