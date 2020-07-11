import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

export default function TodoEditForm({ id, task, editTodo, handleToggleEdit }) {
  const [value, setValue] = useState(task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(id, value);
    handleToggleEdit();
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <TextField
        label={task}
        autoFocus
        type='text'
        value={value}
        fullWidth
        onChange={handleChange}
      />

      {/* ---------------------------- */}
      <style jsx>{`
        form {
          height: 50px;
          display: flex;
          align-items: center;
          padding: 0 18px;
        }
      `}</style>
    </form>
  );
}
