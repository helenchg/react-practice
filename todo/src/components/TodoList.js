// REACT TODO LIST TUTORIAL FROM https://www.youtube.com/watch?v=E1E08i2UJGI

import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

export function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    // remove all spaces
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    // new array takes the current todo and spread the rest of the previos todos.
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(todo, ...todos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Today's Todos</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} />
    </div>
  );
}
