import React, { useState } from "react";

function MouseMove() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  //   event => nativEvent

  function handleMouseMove(e) {
    setCoordinates({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    });
  }

  return (
    <>
      <h3>
        Координаты: x: {coordinates.x}, y: {coordinates.y}{" "}
      </h3>
      <div
        style={{ width: "500px", height: "300px", border: "2px solid salmon" }}
        onMouseMove={handleMouseMove}
      ></div>
    </>
  );
}

export default MouseMove;
