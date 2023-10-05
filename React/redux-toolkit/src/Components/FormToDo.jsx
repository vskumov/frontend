import { useDispatch } from "react-redux";
import { add } from "../store/slices/ToDoSlice";

function FormToDo() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add(e.target.title.value));
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="what to do?" name="title" />
      <button>add</button>
    </form>
  );
}

export default FormToDo;
