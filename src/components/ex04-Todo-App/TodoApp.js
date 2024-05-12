import React, { useEffect, useState } from "react";
import ColorBar from "./ColorBar";
import InputBar from "./InputBar";
import TodoList from "./TodoList";
import SearchBar from "./SearchBar";
import './TodoApp.css';

export default function TodoApp () {
    const store = window.localStorage;
    const [todo, setTodo] = useState('');
    const [color, setColor] = useState('#e0ffcd');
    const [todoList, setTodoList] = useState(
        store.getItem('todoList') ? 
            JSON.parse(store.getItem('todoList')) : []
    );
    const [keyword, setKeyword] = useState('');
    
    const handleInputChange = (value) => {
        setTodo(value);
    }

    const handleInputTodo = () => {
        if(todo === '') {
            alert('할 일을 입력해주세요');
            return;
        }

        setTodoList((prev) => [...prev, {title: todo, color: color}]);
    }

    const handleChangeColor = (color) => {
        setColor(color);
    }

    const handleSearchTodo = (keyword) => {
        setKeyword(keyword);
    }

    const handleRemoveItem = (idx) => {
        if(window.confirm('삭제하시겠습니까?')) {
            setTodoList((prev) => prev.filter((_, i) => i !== idx));
        }
    }

    const handleModifyItem = (idx, text) => {
        setTodoList((prev) => {
            return prev.map((elem, i) => {
                if(i === idx) elem.title = text;
                return elem;
            })
        });
    }

    useEffect(() => {
        store.setItem('todoList', JSON.stringify(todoList))
    }, [todoList])

    return (
        <div style={{textAlign: 'center', backgroundColor: 'white', color: 'rgb(82 82 82)'}}>
            <div style={{display:'flex', justifyContent:'end'}}>
                <SearchBar onClick={handleSearchTodo}/>
            </div>
            <section>
                <h1 className="TodoAppHeader" style={{margin: '40px'}}>Todo App</h1>
                <InputBar onChange={handleInputChange} onClick={handleInputTodo} color={color}/>
                <ColorBar onClick={handleChangeColor} />
            </section>
            <section>            
                <h2 className="TodoAppHeader" style={{margin: '40px', marginTop: '60px'}}>Todo Items</h2>
                <TodoList modify={handleModifyItem} remove={handleRemoveItem} todoList={todoList} keyword={keyword} />
            </section>
        </div>
    )
}