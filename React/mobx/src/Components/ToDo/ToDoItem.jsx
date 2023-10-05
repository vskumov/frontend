import React from "react";
import { observer } from "mobx-react-lite";
import todostate from "../../state/todostate";

const ToDoItem = observer(({ todo }) => {
  return (
    <div>
      <h4
        style={{
          color: todo.done ? "lightgray" : "black",
          textDecoration: todo.done ? "line-through" : "none",
        }}
      >
        {todo.title}
      </h4>
      <button onClick={() => todostate.remove(todo.id)}>remove</button>
      <button onClick={() => todostate.changeDone(todo.id)}>done</button>
    </div>
  );
});

export default ToDoItem;
