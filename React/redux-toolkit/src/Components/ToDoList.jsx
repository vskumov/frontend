import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";

function ToDoList() {
  const list = useSelector((state) => state.todo.list);
  // console.log(state);

  const status = useSelector((state) => state.todo.status);
  const error = useSelector((state) => state.todo.error);

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

  return (
    <div>
      <h2>All ToDos</h2>
      {list.map((todo) => (
        <ToDoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
}

export default ToDoList;
