import React, { useEffect, useState } from "react";
import { useTheme, useTodo } from "../hook/TodoProvider";
import { XCircle } from "react-bootstrap-icons";

export default function TodoItem({ todo }) {
  const { removeTodo, editTodo } = useTodo();
  const { theme } = useTheme();
  const [text, setText] = useState(todo.title);

  const handleEdit = () => {
    if (text === "") {
      setText(todo.title);
      return;
    }

    editTodo(todo.id, text);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", gap: "8px" }}>
      <div
        style={{
          width: "100%",
          color: theme.text.primary,
          backgroundColor: theme.colorList[todo.color],
          padding: "12px",
          borderRadius: "4px",
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={handleEdit}
          style={{
            width: "80%",
            color: theme.text.primary,
            backgroundColor: "transparent",
            border: "none",
            textAlign: "center",
            outline: "none",
          }}
        />
      </div>
      <button
        onClick={() => removeTodo(todo.id)}
        style={{ display: "flex", border: "none", backgroundColor: theme.backgroundColor }}
      >
        <XCircle size={20} color="rgb(255 205 205)" />
      </button>
    </div>
  );
}
