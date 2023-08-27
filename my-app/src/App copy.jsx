import React from "react";
import Name from "./Components/Name";
import Post from "./Components/Post";
import Todo from "./Components/Todo";
import Posts from "./Components/Posts";
import Product from "./Components/Product";
import Countries from "./Components/Countries"

function App() {


  // Задача: Создать массив с данными о делах в компоненте App и сгенерируйте по нему компоненты Todo
  // разбор задачи:
  // - генерация массива (не забудьте про ID)
  // - генерация компонентов с использованием метода map (не забудьте про пропс key)

  const todoList = [
    {
      id: 1,
      taskTitle: "homework 1",
      taskDescription: "Прочитать книгу и сделать 10 программ",
      doneFlg: true,
    },
    {
      id: 2,
      taskTitle: "homework 2",
      taskDescription: "Прочитать книгу и сделать 20 программ",
      doneFlg: true,
    },
    {
      id: 3,
      taskTitle: "homework 3",
      taskDescription: "Прочитать книгу и сделать 30 программ",
      doneFlg: false,
    },
  ];

  const products = [
    {
      id: 1,
      type: "Fruit",
      price: "10",
    },
    {
      id: 2,
      type: "Banana",
      price: "5",
    },
    {
      id: 3,
      type: "Fruit",
      price: "10",
    },
    {
      id: 4,
      type: "Vegetable",
      price: "10",
    },
  ];

  //   Создать массив с данными о странах в компоненте App.Передать каждую страну через пропсы в компонент Country. В компоненте Country принять данные из props и отобразить их в JSX с применением стилей.

  const countries = [
    { id: 1, name: "France", language: "French", population: 67.41 },
    { id: 2, name: "USA", language: "English", population: 331.45 },
    { id: 3, name: "Poland", language: "Polish", population: 38.43 },
    { id: 4, name: "Germany", language: "German", population: 83.78 },
    { id: 5, name: "Japan", language: "Japanese", population: 125.41 },
    { id: 6, name: "Spain", language: "Spanish", population: 46.94 },
    { id: 7, name: "Italy", language: "Italian", population: 60.36 },
  ];

  const objPost = {
    title: "Book",
    text: "Kafkaa",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Kafka1906_cropped.jpg/274px-Kafka1906_cropped.jpg",
    marked: false,
  };

  // const objTodo = {
  //   taskTitle: "Сделать домашку",
  //   taskDescription: "Прочитать книгу и сделать 10 программа",
  //   doneFlg: "true",
  // };

  //   - Задача: Перенести данные о посте в компонент App и сформировать в виде объекта
  //   - Передать этот объект в Todo компонент и при помощи деструктуризации достаньте необходимые значения

  // разбор задачи
  //   - переносим данные из переменных компонента Todo в объект компонента App
  //   - передаем в Todo через пропс
  //   - проверяем работу

  return (
    <>
      {/* <Post post={objPost}></Post> */}
      {/* <Todo {...objTodo}></Todo> */}

      {/* <Name />

    <Name></Name>

    <Post></Post> */}

      {/* <Todo></Todo>     */}

      {/* <Posts></Posts> */}

      {todoList.map((todo) => (
        <Todo {...todo} key={todo.id}></Todo>
      ))}

      {products.map((product) => (
        <Product {...product} key={product.id}></Product>
      ))}

      {countries.map(countrie => (
        <Countries {...countrie} key={countrie.id}></Countries>
      ))}
    </>
  );
}

export default App;

// rfce
