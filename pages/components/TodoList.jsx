import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleTodo, deleteTodo, editTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem
            {...todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        </li>
      ))}

      {/* ------------------------ */}

      <style jsx>{`
        ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
      `}</style>
    </ul>
  );
}
