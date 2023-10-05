// Создайте компонент для отображения случайных фактов при нажатии на кнопку.
// 1.	Создайте компонент RandomFacts, который будет содержать элемент для отображения факта и кнопку "Случайный факт".
// 2.	Создайте массив с различными фактами.
// 3.	Создайте состояние currentFactIndex, которое будет хранить индекс текущего факта.
// 4.	Создайте функцию getRandomFact, которая будет выбирать случайный факт из массива и обновлять состояние currentFactIndex.
// 5.	Отображайте текущий факт и кнопку "Случайный факт".

import React, { useState } from "react";

function RandomFacts() {
  const facts = [
    { text: "Fact 1" },
    { text: "Fact 2" },
    { text: "Fact 3" },
    { text: "Fact 4" },
    { text: "Fact 5" },
  ];
  const [currentFactIndex, newFactIndex] = useState(0);

  function getRandomFact() {
    let index = Math.floor(Math.random() * facts.length);
    newFactIndex(index);
  }

  return (
    <>
      <button onClick={getRandomFact}>random me</button>
      <p>{facts[currentFactIndex].text}</p>
    </>
  );
}

export default RandomFacts;
