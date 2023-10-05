import React, { useState } from "react";

function ButtonNew() {
    
  /* - Задача: Реализация простого кликера с использованием useState. Есть кнопка + и параграф в который выводится значение. Изначально значение равно 0. При нажатии на кнопку значение увеличивается на 1.

  - создаем состояние через хук useState
  - добавляем в верстке кнопку и параграф
  - выводим state в параграфе, а при нажатии на кнопку увеличиваем state через функцию useState */

  const [number, setNumber] = useState(0);

  function clickMe() {
    setNumber((prevNumber) => number + 1);
  }
  return (
    <>
      <button onClick={clickMe}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>

      <p>{number}</p>
    </>
  );
}

export default ButtonNew;
