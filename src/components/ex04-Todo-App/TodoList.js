import React from "react";
import TodoItem from "./TodoItem";
import { useTodo } from "./TodoProvider";

export default function TodoList({ keyword }) {
  const { todoList } = useTodo();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column-reverse",
        marginLeft: "10%",
        marginRight: "10%",
        justifyContent: "center",
        textAlign: "center",
        gap: "8px",
      }}
    >
      {todoList.length > 0 ? (
        todoList.map((elem, i) => {
          if (elem.title.includes(keyword))
            return <TodoItem key={i} id={i} title={elem.title} color={elem.color}></TodoItem>;
        })
      ) : (
        <p style={{ color: "gray" }}>아직 할 일이 없습니다</p>
      )}
    </div>
  );
}
