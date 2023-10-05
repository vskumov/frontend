// Задача:
// Создать массив с данными о продуктах (обязательно id, остальное на свой вкус) в компоненте App.
// Передать каждый продукт через пропсы в компонент Product.
// В компоненте Product принять данные из props и отобразить их в JSX.

import React from "react";

function Product({id, price, type}) {
  return (
    <div style={{ backgroundColor: type === "Fruit" ? "whitesmoke" : "white" }}>
      <h1 style={{ color: "black" }}>{type}</h1>
      <p>{price}</p>
    </div>
  );
}

export default Product;
