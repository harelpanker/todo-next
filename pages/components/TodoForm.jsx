import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

export default function TodoForm({ addTodo }) {
  const [task, setTask] = useState("");

  const newValue = (e) => setTask(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <TextField
        type='text'
        label='Add Todo'
        value={task}
        fullWidth
        onChange={newValue}
      />

      {/* -------------------------- */}

      <style jsx>{`
        form {
          border-bottom: 1px solid gainsboro;
          padding-bottom: 20px;
          margin-bottom: 20px;
        }
      `}</style>
    </form>
  );
}
