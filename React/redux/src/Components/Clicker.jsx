import { useSelector, useDispatch } from "react-redux";
import { incrementAction, decrementationAtion } from "../actions/action";

function Clicker() {
  const count = useSelector((state) => state.clicker);

  const dispatch = useDispatch();
  const handlePlus = () => {
    dispatch(incrementAction(count));
  };

  const handleMinus = () => {
    dispatch(decrementationAtion(5))
  }

  return (
    <div>
      <p className="counter">{count}</p>
      <button onClick={handlePlus}> + 1 </button>
      <button onClick={handleMinus}> - 5 </button>
    </div>
  );
}

export default Clicker;
