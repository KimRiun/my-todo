import React, { useState } from "react";
import InputBar from "./InputBar";
import TodoList from "./TodoList";
import SearchBar from "./SearchBar";
import "./TodoApp.css";

export default function TodoApp() {
  const [keyword, setKeyword] = useState("");

  return (
    <div style={{ textAlign: "center", backgroundColor: "white", color: "rgb(82 82 82)" }}>
      <SearchBar onClick={setKeyword} />
      <h1 className="TodoAppHeader" style={{ margin: "40px" }}>
        Todo App
      </h1>
      <InputBar />
      <h2 className="TodoAppHeader" style={{ margin: "40px", marginTop: "60px" }}>
        Todo Items
      </h2>
      <TodoList keyword={keyword} />
    </div>
  );
}
