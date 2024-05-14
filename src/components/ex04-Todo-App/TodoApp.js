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
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <ThemeRadioButton />
        <SearchBar onClick={setKeyword} />
      </header>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "40px",
          gap: "40px",
          color: theme.text.primary,
        }}
      >
        <InputBar />
        <TodoList keyword={keyword} />
      </main>
    </div>
  );
}
