import React, { useState } from "react";

// useState() => [state, setState]

function Button() {
  const [backgroundColor, setBackgroundColor] = useState("blue");

  function randColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  return (
    <button
      style={{ backgroundColor: backgroundColor }}
      onClick={() => setBackgroundColor(randColor())}
    >
      {backgroundColor}
    </button>
  );
}

export default Button;
