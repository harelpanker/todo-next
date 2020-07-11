import React, { useState } from "react";
import TodoEditForm from "./TodoEditForm";

import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

export default function TodoItem({
  id,
  task,
  completed,
  toggleTodo,
  deleteTodo,
  editTodo,
}) {
  const [isEdit, setIsEdit] = useState(false);

  const handleToggleChackbox = () => toggleTodo(id);
  const handleDelete = () => deleteTodo(id);
  const handleToggleEdit = () => setIsEdit(!isEdit);
  return (
    <div>
      {isEdit ? (
        <TodoEditForm
          id={id}
          task={task}
          editTodo={editTodo}
          handleToggleEdit={handleToggleEdit}
        />
      ) : (
        <div className='item-wrapper'>
          <div className='task-checkbox-wrapper'>
            <Checkbox color='primary' onClick={handleToggleChackbox} />
            <p className='completed'>{task}</p>
          </div>
          <div className='icon-wrapper'>
            <IconButton onClick={handleToggleEdit} aria-label='edit'>
              <EditIcon className='icon' color='primary' />
            </IconButton>
            <IconButton onClick={handleDelete} aria-label='delete'>
              <DeleteIcon className='icon' color='secondary' />
            </IconButton>
          </div>
        </div>
      )}

      {/* ----------------------------- */}

      <style jsx>{`
        .completed {
          text-decoration: ${completed ? "line-through" : "none"};
          color: ${completed ? "grey" : "black"};
        }
        .item-wrapper {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }
        .task-checkbox-wrapper {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
