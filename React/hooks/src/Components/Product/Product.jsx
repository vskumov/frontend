import React, { useRef } from "react";
import "./Product.css";

function Product() {
  const descRef = useRef(null);

  const handleClick = () => {
    descRef.current.classList.toggle("show");
  };
  return (
    <div>
      <h2>Product Name</h2>
      <button onClick={handleClick}>more</button>
      <div ref={descRef} className="description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          ullam hic voluptatem quasi placeat vel consequuntur totam nulla maxime
          quod, officiis eum rerum ipsa quam numquam! Tempora doloribus
          laudantium illum.
        </p>
      </div>
    </div>
  );
}

export default Product;
