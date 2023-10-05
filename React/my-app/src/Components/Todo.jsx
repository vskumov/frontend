import React, { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Orange", done: true },
    { id: 2, text: "Banana", done: true },
    { id: 3, text: "Apple", done: false },
    { id: 4, text: "Carrot", done: false },
    { id: 5, text: "Pumpkin", done: false },
  ]);

  function changeDone(id) {
    setTodos((prevTodo) => {
      return prevTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
    });
  }

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h3
            style={{
              color: todo.done ? "orange" : "gray",
            }}
          >
            {todo.text}
          </h3>
          <button onClick={() => changeDone(todo.id)}>+</button>
        </div>
      ))}
    </>
  );
}

export default Todo;
