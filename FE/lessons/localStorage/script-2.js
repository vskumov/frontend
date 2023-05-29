// Задача. Добавьте еще одну кнопку "Загрузить". При нажатии на эту кнопку, данные, сохраненные в localStorage, должны загружаться обратно в поле ввода.

// Задача. Добавить кнопку, которая очищает localStorage.

// const form = document.querySelector('form');
// const inputField = document.querySelector('#inputField');
// const btn = document.querySelector('#restoreBtn');
// const cleanBtn = document.querySelector('#cleanBtn');

// form.onsubmit = (e) => {
//   e.preventDefault();
//   const inputFieldValue = inputField.value;
//   localStorage.setItem('inputValue', inputFieldValue);
//   inputField.value = '';
// }; 

// btn.onclick = () => {
//     inputField.value = localStorage.getItem('inputValue');
// };

// cleanBtn.onclick = () => {
//     localStorage.removeItem('inputValue');
// };



// const swithBtn = document.querySelector('#toggle');
// const body = document.body;

// swithBtn.onclick = () => {
//     if(body.classList.contains('light-mode')) {
//         body.classList.replace('light-mode', 'dark-mode');
//         localStorage.setItem('mode', 'dark')
//     } else {
//         body.classList.replace('dark-mode', 'light-mode');
//         localStorage.setItem('mode', 'light')
//     }
// };

// const mode = localStorage.getItem('mode');
// if(mode === 'dark') body.classList.replace('light-mode', 'dark-mode');


// // Задача. Создать каунтер. Страница с двумя кнопками “+” и “-” и при нажатии на какую-либо число должно меняться в соответствующую сторону. Значение counter не должно слетать при перезагрузке страницы.


// const value = document.querySelector("#value");
// const plusBtn = document.querySelector("#plus");
// const minusBtn = document.querySelector("#minus");
// const savedValue = localStorage.getItem('savedValue');

// // if(savedValue) {
// //     value.textContent = savedValue;
// // }

// plusBtn.addEventListener("click", () => {
//   value.textContent = Number(value.textContent) + 1;
//   savedValue = value.textContent;
//   localStorage.setItem('savedValue', savedValue);
// });

// minusBtn.addEventListener("click", () => {
//   value.textContent = Number(value.textContent) - 1;
//   savedValue = value.textContent;
//   localStorage.setItem('savedValue', savedValue);
// });



// 25.05.2023

// const person = { id: 1, name: "Joe" };
// const jsonString = JSON.stringify(person);
// console.log(jsonString);

// localStorage.setItem("objectStringify", jsonString);

// const newObject = localStorage.getItem("objectStringify");
// const object = JSON.parse(newObject);
// console.log(object);


// Преобразовать строку в массив, добавить несколько чисел, преобразовать обратно в строку.

// const array = "[1,2,3]"

// const newArray = JSON.parse(array);
// newArray.push(4, 5, 6);
// const newString = JSON.stringify(newArray);
// console.log(newArray);
// console.log(newString);


// // Функции с localStorage

// function setObject(key, object) {
//   const newObject = JSON.stringify(object);
//   localStorage.setItem(key, newObject);
// }

// setObject("user", {name: "Joe", age: 23});

// function getObject(key) {
//   const result = localStorage.getItem(key);
//   if(result) {
//     const object = JSON.parse(result);
//     return object;
//   }
//   return null;
// };


const form = document.querySelector("#product-form");
const nameInput = document.querySelector("#name");
const priceInput = document.querySelector("#price");
const list = document.querySelector("#product-list");

let products = [];

function addProuct(name, price) {
  products.push({ name, price });
}

function updateProducts() {
  list.innerHTML = "";
  products.forEach((product) => {
    const item = document.createElement("li");
    item.innerText = `${product.name} - ${product.price}$`;
    list.appendChild(item);
  });
}

function setArray(key, array) {
  const newProducts = JSON.stringify(array);
  localStorage.setItem(key, newProducts);
  console.log(newProducts);
}

function getArray(key) {
  const objectsLocalStorage = localStorage.getItem(key);
  if(objectsLocalStorage) {
    const listProducts = JSON.parse(objectsLocalStorage);
    products = listProducts;
    updateProducts();
  };
}

form.onsubmit = (e) => {
  e.preventDefault();
  const nameProduct = nameInput.value;
  const priceProduct = priceInput.value;
  addProuct(nameProduct, priceProduct);
  updateProducts();
  setArray("products", products);
  nameInput.value = "";
  priceInput.value = "";
}


getArray("products");


// Создайте HTML-страницу с двумя полями ввода: "Название книги" и "Автор".
// Разместите под этими полями две кнопки: "Добавить в библиотеку" и "Показать библиотеку".
// Когда пользователь заполняет поля и нажимает кнопку "Добавить в библиотеку", вы должны создать объект JavaScript, содержащий информацию из полей ввода (название книги и автор), и добавить этот объект в массив, который хранится в localStorage.
// Когда пользователь нажимает кнопку "Показать библиотеку", вы должны извлечь массив из localStorage и вывести каждую книгу (название и автор) на страницу.
