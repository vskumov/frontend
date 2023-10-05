import React from "react";
import { Link } from "react-router-dom";

function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Фикус",
      price: 135.5,
      description:
        "Фикус - растение-древовидный кустарник семейства тутовых. Он имеет сложную структуру корней, которая позволяет растению восстанавливаться после полного высыхания. Фикус может расти до 2,5 м в высоту и имеет блестящие темно-зеленые листья. Он не только красив, но и очищает воздух от токсинов.",
      image:
        "https://images.unsplash.com/photo-1597055181300-e3633a917c9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    },
    {
      id: 2,
      name: "Спатифиллум",
      price: 99.99,
      description:
        "Спатифиллум - одно из самых популярных домашних растений. Оно имеет яркие зеленые листья и красивые белые цветы. Растение обладает способностью очищать воздух от токсинов, таких как бензол и формальдегид. Спатифиллум также помогает увлажнять воздух в вашем доме.",
      image:
        "https://images.unsplash.com/photo-1621923164562-21d3118adae4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
    },
    {
      id: 3,
      name: "Синдапсус",
      price: 115.0,
      description:
        "Синдапсус - это растение семейства ароидных, которое обладает большой декоративностью. Оно имеет крупные сердцевидные листья зеленого цвета с белыми пятнами и может достигать высоты до 2,5 метров. Синдапсус хорошо растет в тенистых местах и является отличным очистителем воздуха от токсинов.",
      image:
        "https://images.unsplash.com/photo-1655382277815-a109943ead8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
    },
    {
      id: 4,
      name: "Алоказия",
      price: 150.0,
      description:
        "Алоказия - это крупное декоративное растение семейства Ароидные, которое может достигать высоты до 1,5 метров. Оно имеет красивые зеленые листья с серебристыми жилками. Алоказия очищает воздух от токсинов и способствует увлажнению воздуха в помещении.",
      image:
        "https://images.unsplash.com/photo-1617778611332-49f79abf4c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    },
  ];

  return (
    <div className="container">
      <h1 className="first-element">Our flowers</h1>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} className="preview" alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <Link to={`/products/${product.id}`}>read more</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
