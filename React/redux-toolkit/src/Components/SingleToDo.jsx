import React, { useEffect } from "react";
import { getSingleToDo } from "../store/slices/ToDoSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ToDoItem from "./ToDoItem";

function SingleToDo() {
  const { todoId } = useParams();
  const todo = useSelector((state) => state.todo.currentToDo);
  const status = useSelector((state) => state.todo.toDoStatus);
  const error = useSelector((state) => state.todo.toDoError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleToDo(todoId));
  }, [todoId, dispatch]);

  if (status === "loading") {
    return (
      <img
        src="https://static.demilked.com/wp-content/uploads/2016/06/gif-animations-replace-loading-screen-14.gif"
        alt="loading..."
      />
    );
  }

  if (status === "rejected") {
    return <h1>{error}</h1>;
  }

  return <ToDoItem {...todo} />;
}

export default SingleToDo;
