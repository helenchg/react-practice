import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { TodoRow, Icons, DeleteIcon, EditIcon } from "../Styled/StyledTodo";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <TodoRow isComplete={todo.isComplete} key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <Icons>
        <DeleteIcon
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <EditIcon
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </Icons>
    </TodoRow>
  ));
}

export default Todo;
