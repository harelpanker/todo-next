import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import uuid from "react-uuid";

export default function TodoApp() {
  const initialTodos = [
    { id: uuid(), task: "Learn Next.js", completed: false },
    { id: uuid(), task: "Master React", completed: false },
  ];
  // State
  const [todos, setTodos] = useState(initialTodos);
  // Add Todo
  const addTodo = (newTodoTask) => {
    setTodos([...todos, { id: uuid(), task: newTodoTask, completed: false }]);
  };
  // Toggle Todo
  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };
  // Delete Todo
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  // Edit Todo
  const editTodo = (id, newTask) => {
    const updatedtodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task: newTask } : todo
    );
    setTodos(updatedtodos);
  };

  return (
    <div className='container'>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />

      {/* ------------------------------- */}

      <style jsx>{`
        .container {
          width: 550px;
          max-width: 90%;
          background-color: ghostwhite;
          border-radius: 7px;
          box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
          padding: 20px 30px;
          margin-right: 10px;
          margin-left: 10px;
        }
        @media only screen and (max-width: 600px) {
          .container {
            width: 350px;
          }
        }
      `}</style>
    </div>
  );
}
