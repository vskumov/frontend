import React, { useMemo } from "react";

function ProductsList({ products, selectedCategory, sortedProducts }) {
  let filteredProducts = [];

  for (let i = 0; i < products.length; i++) {
    if (selectedCategory === "") {
      filteredProducts.push(products[i]);
    } else if (selectedCategory === products[i].category) {
      filteredProducts.push(products[i]);
    }
  }

  if (sortedProducts === "ascending") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortedProducts === "descending") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  const memoFilteredProducts = useMemo(
    () => filteredProducts,
    [filteredProducts]
  );

  return (
    <ul>
      {memoFilteredProducts.map((product) => (
        <li key={product.id}>
          {product.title} — {product.price}
        </li>
      ))}
    </ul>
  );
}

export default ProductsList;
