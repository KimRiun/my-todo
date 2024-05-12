import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList ({ modify, remove, todoList, keyword}) {
    const handleModify = (i, text) => {
        modify(i, text);
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column-reverse', marginLeft: '10%', marginRight:'10%', justifyContent:'center', textAlign:'center', gap:'8px'}}>
            {todoList.length > 0 ? 
                (todoList.map((elem, i) => {
                    if(keyword === '') 
                        return <TodoItem key={i} id={i} modify={handleModify} remove={() => remove(i)} title={elem.title} color={elem.color}></TodoItem>;
                    if(elem.title.includes(keyword))
                        return <TodoItem key={i} id={i} modify={handleModify} remove={() => remove(i)} title={elem.title} color={elem.color}></TodoItem>;
                })) 
                :
                (
                    <p style={{color: 'gray'}}>아직 할 일이 없습니다</p>
                ) }
        </div>
    )
} 