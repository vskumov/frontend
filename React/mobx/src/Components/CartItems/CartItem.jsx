import React from "react";
import { observer } from "mobx-react-lite";
import cartStore from "../../state/cartStore";

const CartItem = observer(({ item }) => {
  const handleRemove = () => {
    cartStore.removeItem(item.id);
  };

  return (
    <div>
      <h3>
        {item.title}{" "}
        <span style={{ fontSize: "14px", fontWeight: "200" }}>
          — € {item.price}{" "}
          <button
            onClick={handleRemove}
            style={{
              fontSize: "12px",
              borderRadius: "50%",
              aspectRatio: "1/1",
              border: "1px solid salmon",
            }}
          >
            -
          </button>
        </span>{" "}
      </h3>
    </div>
  );
});

export default CartItem;
