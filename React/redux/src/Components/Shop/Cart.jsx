import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../actions/cart";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cartList = useSelector((state) => state.cart.cartList);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleDeleteFromCart(id) {
    dispatch(deleteItem(id));
  }

  return (
    <div>
      <h1>Cart</h1>

      <button onClick={() => navigate("/")}>Back</button>

      <div>
        {cartList.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.quantity}</p>
            <button onClick={() => handleDeleteFromCart(product.id)}>
              Add
            </button>
          </div>
        ))};
      </div>
    </div>
  );
}

export default Cart;
