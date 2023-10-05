import React, { useRef } from "react";

function MovingButton() {
  const btnRef = useRef();

  const handleMouseEnter = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const btnWidth = btnRef.current.offsetWidth;
    const btnHeight = btnRef.current.offsetHeight;

    const maxX = windowWidth - btnWidth;
    const maxY = windowHeight - btnHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    btnRef.current.style.transform = `translate(${randomX}px, ${randomY}px)`;
  };

  return (
    <button
      ref={btnRef}
      style={{ position: "absolute", transition: "transform 0.4s" }}
      onMouseEnter={handleMouseEnter}
    >
      MovingButton
    </button>
  );
}

export default MovingButton;
