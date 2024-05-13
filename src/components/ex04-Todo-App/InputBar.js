import React, { useRef, useState } from "react";
import { useTodo } from "./TodoProvider";
import ColorBar from "./ColorBar";
import { PlusCircleFill } from "react-bootstrap-icons";

export default function InputBar() {
  const { addTodo } = useTodo();
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#e0ffcd");
  const inputRef = useRef(null);

  const handleAddTodo = () => {
    if (title === "") {
      inputRef.current.classList.add("bounce");
      setTimeout(() => {
        inputRef.current.classList.remove("bounce");
      }, 500);
      return;
    }

    addTodo(title, color);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", textAlign: "center", gap: "4px", margin: "12px" }}>
        <input
          ref={inputRef}
          type="text"
          placeholder="할 일이 무엇인가요?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => {
            e.key === "Enter" && handleAddTodo();
          }}
          style={{
            backgroundColor: color,
            padding: "12px",
            paddingLeft: "16px",
            width: "40%",
            border: "none",
            borderRadius: "4px",
          }}
        />
        <button
          onClick={handleAddTodo}
          style={{
            padding: "4px",
            paddingLeft: "12px",
            paddingRight: "12px",
            border: "none",
            backgroundColor: "transparent",
            color: "#5c5957",
            borderRadius: "4px",
          }}
        >
          <PlusCircleFill size={24} color="rgb(226 226 226)" />
        </button>
      </div>
      <ColorBar onClick={setColor} />
    </div>
  );
}
