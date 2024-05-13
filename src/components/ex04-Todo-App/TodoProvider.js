import React, { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const store = window.localStorage;
  const [todoList, setTodoList] = useState(store.getItem("todoList") ? JSON.parse(store.getItem("todoList")) : []);

  const [alertMessage, setAlertMessage] = useState("");
  const [show, setShow] = useState(false);

  const addTodo = (title, color) => {
    if (title === "") {
      return;
    }
    setTodoList((prev) => [...prev, { title: title, color: color }]);
  };

  const removeTodo = (idx) => {
    if (window.confirm("삭제하시겠습니까?")) {
      setTodoList((prev) => prev.filter((_, i) => i !== idx));
    }
  };

  const editTodo = (idx, title) => {
    setTodoList((prev) => {
      return prev.map((elem, i) => {
        if (i === idx) elem.title = title;
        return elem;
      });
    });
  };

  useEffect(() => {
    store.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <TodoContext.Provider value={{ todoList, addTodo, removeTodo, editTodo }}>
      {alertMessage && <div className="alert alert-warning fade show ">{alertMessage}</div>}
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  const { todoList, addTodo, removeTodo, editTodo } = useContext(TodoContext);
  return { todoList, addTodo, removeTodo, editTodo };
}
