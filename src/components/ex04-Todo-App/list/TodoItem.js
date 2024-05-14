import React, { useEffect, useState } from "react";
import { useTheme, useTodo } from "../hook/TodoProvider";
import { XCircle } from "react-bootstrap-icons";

export default function TodoItem({ todo }) {
  const { removeTodo, editTodo } = useTodo();
  const { theme } = useTheme();
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const handleEdit = () => {
    if (title.trim() === "") {
      setTitle(todo.title);
      setEditMode(false);
      return;
    }
    setEditMode(false);
    editTodo(todo.id, title.trim());
  };

  return (
    <li style={{ display: "flex", justifyContent: "space-around", alignItems: "center", gap: "8px" }}>
      <div
        style={{
          width: "100%",
          color: theme.text.primary,
          backgroundColor: theme.colorBar[todo.color],
          padding: "12px",
          borderRadius: "4px",
        }}
      >
        {editMode ? (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onDoubleClick={(e) => {
              e.stopPropagation();
              setEditMode(true);
            }}
            autoFocus
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
        ) : (
          <div
            onDoubleClick={(e) => {
              e.stopPropagation();
              setEditMode(true);
            }}
          >
            {todo.title}
          </div>
        )}
      </div>
      <button
        onClick={() => removeTodo(todo.id)}
        style={{ display: "flex", border: "none", backgroundColor: theme.backgroundColor }}
      >
        <XCircle size={20} color="rgb(255 205 205)" />
      </button>
    </li>
  );
}
