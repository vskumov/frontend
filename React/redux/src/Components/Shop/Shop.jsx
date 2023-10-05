import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../actions/cart";

function Shop() {
  const products = useSelector((state) => state.cart.products);

  const dispatch = useDispatch();

  function handleAddToCart(id) {
    dispatch(addItem(id));
  }

  return (
    <div>
      <h1>Shop</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button onClick={() => handleAddToCart(product.id)}>Add</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
