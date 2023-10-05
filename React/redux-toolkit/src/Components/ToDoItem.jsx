import React from "react";
import { useDispatch } from "react-redux";
import { remove, changeDone } from "../store/slices/ToDoSlice";
import { useNavigate } from "react-router-dom";

function ToDoItem({ id, title, done }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/todos/${id}`)}>
      <p style={{ color: done ? "gray" : "black" }}>{title}</p>
      <input
        type="checkbox"
        checked={done}
        onChange={() => dispatch(changeDone(id))}
      />
      <button onClick={() => dispatch(remove(id))}>delete</button>
    </div>
  );
}

export default ToDoItem;
