import React from "react";
import { observer } from "mobx-react-lite";
import todostate from "../../state/todostate";
import ToDoItem from "./ToDoItem";

const ToDoContainer = observer(() => {
  return (
    <div>
      {todostate.list.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
});

export default ToDoContainer;
