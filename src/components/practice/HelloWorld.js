import React from "react";
import "./HelloWorld.css"
import Style from './HelloWorld.module.css'

export default function HelloWorld() {
    return(
         // <div style={{width: '100%', height:'100%', textAlign:'center', border: 'solid 1px black', color: 'blue'}}> 
        // <div className='hello-world'>
        <div className={Style.HelloWorld}>
            <h1>Hello, World!</h1>
            <p>This is My first React Application</p>
        </div>
    )
}