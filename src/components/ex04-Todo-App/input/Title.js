import React from "react";

export default function Title({ title }) {
  return (
    <h1 className="todo-app-header" style={{ margin: "20px" }}>
      {title}
    </h1>
  );
}
