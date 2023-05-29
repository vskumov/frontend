// Создайте HTML-страницу с двумя полями ввода: "Название книги" и "Автор". Разместите под этими полями две кнопки: "Добавить в библиотеку" и "Показать библиотеку".
// Когда пользователь заполняет поля и нажимает кнопку "Добавить в библиотеку", вы должны создать объект JavaScript, содержащий информацию из полей ввода (название книги и автор), и добавить этот объект в массив, который хранится в localStorage.
// Когда пользователь нажимает кнопку "Показать библиотеку", вы должны извлечь массив из localStorage и вывести каждую книгу (название и автор) на страницу.


const form = document.querySelector("#book-form");
const nameInput = document.querySelector("#name");
const bookInput = document.querySelector("#book");
const list = document.querySelector("#books-list");
const btnShowAll = document.querySelector("#show-books");

let library = [];

function addProuct(name, book) {
  library.push({ name, book });
}

function updateLibrary() {
  list.innerHTML = "";
  library.forEach((book) => {
    const item = document.createElement("li");
    item.innerText = `${book.name} - ${book.book}`;
    list.appendChild(item);
  });
}

function setArray(key, array) {
  const newBooks = JSON.stringify(array);
  localStorage.setItem(key, newBooks);
  console.log(newBooks);
}

function getArray(key) {
  const objectsLocalStorage = localStorage.getItem(key);
  if(objectsLocalStorage) {
    const listBooks = JSON.parse(objectsLocalStorage);
    library = listBooks;
    // updateLibrary();
  };
}

form.onsubmit = (e) => {
  e.preventDefault();
  const nameAutor = nameInput.value;
  const nameBook = bookInput.value;
  addProuct(nameAutor, nameBook);
//   updateLibrary();
  setArray("library", library);
  nameInput.value = "";
  bookInput.value = "";
}


getArray("library");


btnShowAll.onclick = () => {
    updateLibrary(library)
  }
  