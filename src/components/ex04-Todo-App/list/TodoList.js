import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { useTheme, useTodo } from "../hook/TodoProvider";
import Title from "../input/Title";

export default function TodoList({ keyword }) {
  const { theme } = useTheme();
  const { todoList } = useTodo();
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    setFilteredList(todoList.filter((todo) => todo.title.includes(keyword)));
  }, [keyword]);

  return (
    <div>
      <Title title="Todo Items" />
      <ul
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
        {keyword.length === 0 ? (
          todoList.length > 0 ? (
            todoList.map((todo) => <TodoItem key={todo.id} todo={todo}></TodoItem>)
          ) : (
            <p style={{ color: theme.text.gray }}>아직 할 일이 없습니다</p>
          )
        ) : filteredList.length > 0 ? (
          filteredList.map((todo) => <TodoItem key={todo.id} todo={todo}></TodoItem>)
        ) : (
          <p style={{ color: theme.text.gray }}>검색 결과가 없습니다</p>
        )}
      </ul>
    </div>
  );
}
