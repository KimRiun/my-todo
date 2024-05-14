import React, { useState } from "react";
import TodoList from "./list/TodoList";
import SearchBar from "./input/search/SearchBar";
import InputBar from "./input/todo/InputBar";
import "./TodoApp.css";
import { ThemeRadioButton } from "./button/ThemeRadioButton";
import { useTheme } from "./hook/TodoProvider";

export default function TodoApp() {
  const { theme } = useTheme();
  const [keyword, setKeyword] = useState("");

  return (
    <div
      style={{
        height: "100%",
        textAlign: "center",
        overflow: "auto",
        backgroundColor: theme.backgroundColor,
        color: "rgb(82 82 82)",
        padding: "24px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <ThemeRadioButton />
        <SearchBar onClick={setKeyword} />
      </div>
      <h1 className="todo-app-header" style={{ margin: "40px", color: theme.text.primary }}>
        Todo App
      </h1>
      <InputBar />
      <h2 className="todo-app-header" style={{ margin: "40px", color: theme.text.primary, marginTop: "60px" }}>
        Todo Items
      </h2>
      <TodoList keyword={keyword} />
    </div>
  );
}
