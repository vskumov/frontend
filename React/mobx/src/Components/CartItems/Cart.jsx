import React from "react";
import { observer } from "mobx-react-lite";
import cartStore from "../../state/cartStore";
import CartItem from "./CartItem";

const Cart = observer(() => {
  return (
    <div>
      <h2>Cart</h2>
      {cartStore.cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <p>Total price: € {cartStore.getTotalPrice()}</p>
    </div>
  );
});

export default Cart;