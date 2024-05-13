import React, { useState } from "react";
import { useTodo } from "./TodoProvider";
import { XCircle } from "react-bootstrap-icons";

export default function TodoItem({ id, title, color }) {
  const { removeTodo, editTodo } = useTodo();
  const [text, setText] = useState(title);
  const [modifyMode, setModifyMode] = useState(false);

  const handleItemClick = () => {
    setModifyMode((prev) => !prev);
    if (modifyMode) {
      editTodo(id, text);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", gap: "8px" }}>
      <div
        id={id}
        onClick={handleItemClick}
        style={{ width: "100%", backgroundColor: color, padding: "12px", borderRadius: "4px" }}
      >
        {modifyMode ? (
          <input
            type="text"
            autoFocus={modifyMode}
            value={text}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => setText(e.target.value)}
            style={{ width: "80%", backgroundColor: "transparent", border: "none", textAlign: "center" }}
          />
        ) : (
          title
        )}
      </div>
      <button onClick={() => removeTodo(id)} style={{ display: "flex", border: "none", backgroundColor: "white" }}>
        <XCircle size={20} color="rgb(255 205 205)" />
      </button>
    </div>
  );
}
