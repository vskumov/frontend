import React, { useState } from "react";

// TODO
// Задача: создать компонен, в котором есть div с размерами 500х500. Когда на него попадает курсор, цвет фона меняется на рандомный. Шаги: создаём div, функцию рандомного цвета, состояние, которое принимае в качестве начального значения случайный цвет, обработчик событий и привязываем его на события onMouseOut, onMouseOver

function Colors() {
  const [backgroundColor] = useState("whitesmoke");

  function randColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  function handleMouse(e) {
    return (e.target.style.backgroundColor = randColor());
  }

  return (
    <div>
      <div
        style={{
          backgroundColor: backgroundColor,
          width: "500px",
          height: "500px",
        }}
        onMouseOver={handleMouse}
        // onMouseOut={handleMouse}
      >
        {" "}
      </div>
    </div>
  );
}

export default Colors;
