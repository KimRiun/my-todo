import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { v4 as uuid4 } from "uuid";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const store = window.localStorage;
  const [todoList, setTodoList] = useState(store.getItem("todoList") ? JSON.parse(store.getItem("todoList")) : []);
  const themeInfo = {
    light: {
      name: "light",
      backgroundColor: "white",
      colorBar: ["#e0ffcd", "#fdffcd", "#ffebbb", "#ffcab0"],
      text: {
        primary: "black",
        gray: "gray",
      },
    },
    dark: {
      name: "dark",
      backgroundColor: "rgb(110 110 110)",
      colorBar: ["#c19898", "#d3a284", "#606060", "#58727f"],
      text: {
        primary: "white",
        gray: "rgb(231, 225, 222",
      },
    },
  };
  const [theme, setTheme] = useState(themeInfo.light);

  const addTodo = useCallback(
    (title, colorId) => {
      if (title === "") {
        return;
      }
      setTodoList((prev) => [...prev, { id: uuid4(), title: title, color: colorId }]);
    },
    [todoList],
  );

  const removeTodo = useCallback(
    (id) => {
      if (window.confirm("삭제하시겠습니까?")) {
        setTodoList(todoList.filter((todo) => todo.id !== id));
      }
    },
    [todoList],
  );

  const editTodo = useCallback(
    (id, title) => {
      setTodoList(
        todoList.map((todo) => {
          if (todo.id === id) todo.title = title;
          return todo;
        }),
      );
    },
    [todoList],
  );

  const changeTheme = (theme) => {
    if (theme === "light") setTheme(themeInfo.light);
    else setTheme(themeInfo.dark);
  };

  useEffect(() => {
    store.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <TodoContext.Provider value={{ todoList, addTodo, removeTodo, editTodo, theme, changeTheme }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  const { todoList, addTodo, removeTodo, editTodo } = useContext(TodoContext);
  return { todoList, addTodo, removeTodo, editTodo };
}

export function useTheme() {
  const { theme, changeTheme } = useContext(TodoContext);
  return { theme, changeTheme };
}
