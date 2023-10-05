import React, { useState } from "react";
import ProductsList from "./ProductsList";

function ProductsContainer() {
    const products = [
        { id: 1, title: "Phone", category: "Electronics", price: 10000 },
        { id: 2, title: "T-shirt", category: "Clothes", price: 600 },
        { id: 3, title: "Book1", category: "Books", price: 1000 },
        { id: 4, title: "Book2", category: "Books", price: 1500 },
        { id: 5, title: "PC", category: "Electronics", price: 15000 },
        { id: 6, title: "Headphones", category: "Electronics", price: 2000 },
        { id: 7, title: "Jeans", category: "Clothes", price: 800 },
        { id: 8, title: "Sunglasses", category: "Accessories", price: 1200 },
        { id: 9, title: "Laptop", category: "Electronics", price: 25000 },
        { id: 10, title: "Watch", category: "Accessories", price: 3000 },
      ];
      
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortedProducts, setSortedProducts] = useState("");

  return (
    <div>
      <h1>All products</h1>
      <div>
        <label>
          Category:
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothes">Clothes</option>
            <option value="Books">Books</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Sort:
          <select
            value={sortedProducts}
            onChange={(e) => setSortedProducts(e.target.value)}
          >
            <option value="">-</option>
            <option value="ascending">Low to High</option>
            <option value="descending">High to Low</option>
          </select>
        </label>
      </div>

      <ProductsList
        products={products}
        selectedCategory={selectedCategory}
        sortedProducts={sortedProducts}
      />
    </div>
  );
}

export default ProductsContainer;
