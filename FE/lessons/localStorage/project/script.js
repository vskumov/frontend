// Задача: Создание интерактивной библиотеки книг
// Подзадачи:
// 1.	HTML структура. Создать HTML-форму с полями для ввода информации о книге: название, автор, год издания и количество страниц. Добавить кнопку для отправки формы.
// 2.	Отображение книг. Написать функцию JavaScript, которая будет создавать элемент списка для каждой книги и добавлять его в список на странице.
// 3.	Добавление книг. Добавить обработчик событий для формы, который будет считывать информацию из полей ввода и добавлять новую книгу в список.
// 4.	Поиск книг. Добавить поле для поиска и написать функцию, которая будет фильтровать книги(по названию) в списке по введенному тексту.
// 5.	Сортировка книг. Добавить элемент select для выбора сортировки. Написать функцию, которая будет сортировать книги в списке в зависимости от выбранного варианта. (варианты придумайте сами).
// 6.	Хранение книг. Использовать localStorage для сохранения книг между сессиями браузера. Должны сохраняться все книги.
// 7. Удаление книг. Добавить кнопку удаления рядом с каждой книгой. При нажатии на кнопку книга должна удаляться из списка и localStorage.

const form = document.querySelector("#library-form");
const authorInput = document.querySelector("#name");
const bookInput = document.querySelector("#book");
const yearInput = document.querySelector("#year");
const pagesInput = document.querySelector("#pages");

const books = document.querySelector("#library-list");

const showBtn = document.querySelector("#show-all");
const cleanBtn = document.querySelector("#clean-all");
const searchBooks = document.querySelector("#search-books");
const sortBooks = document.querySelector("#sort-books")

let library = [];

form.onsubmit = (e) => {
  e.preventDefault();

  const bookName = bookInput.value;
  const authorName = authorInput.value;
  const year = yearInput.value;
  const pages = pagesInput.value;
  const bookID = Date.now();

  addBook(bookID, bookName, authorName, year, pages);
  updateBooks();
  writeLocal();

  bookInput.value = "";
  authorInput.value = "";
  yearInput.value = "";
  pagesInput.value = "";
}

function addBook(id, name, author, year, pages) {
  library.push({ id, name, author, year, pages });
}

function updateBooks(array = library) {
  books.innerHTML = "";
  array.forEach((book) => {
    const item = document.createElement('li');
    const title = document.createElement('h3');
    title.classList.add('book-details');
    const icon = document.createElement('i');
    icon.classList.add('las', 'la-book');
    title.appendChild(icon);
    title.append(` ${book.name}`);

    const author = document.createElement('h4');
    author.classList.add('author-details');
    author.innerText = book.author;

    const details = document.createElement('div');
    details.classList.add('details');
    details.textContent = `${book.year} год, ${book.pages} стр.`;

    // const year = document.createElement('p');
    // year.innerHTML = `Год выпуска: ${book.year}`;
    // const pages = document.createElement('p');
    // pages.innerHTML = `Количество страниц: ${book.pages}`;

    const btn = document.createElement('button');
    btn.innerHTML = '<i class="las la-times"></i>';
    btn.classList.add('close');

    item.onmouseover = () => {
      btn.style.opacity = "1";
    }

    item.onmouseleave = () => {
      btn.style.opacity = "0";
    }

    btn.onclick = () => {
      const index = library.findIndex((bookItem) => bookItem.id === book.id);
      if (index > -1) {
        library.splice(index, 1);
        writeLocal();
        updateBooks();
      }
    }

    item.append(title, author, details, btn);
    books.appendChild(item);
  });
}

function writeLocal(array = library) {
  const object = JSON.stringify(library);
  localStorage.setItem("library", object);
}

const savedBooks = JSON.parse(localStorage.getItem("library"));
if (savedBooks) {
  library = savedBooks;
  updateBooks();
}

sortBooks.onchange = () => {
  switch (sortBooks.value) {
    case "author-a-z":
      library.sort((a, b) => a.author.localeCompare(b.author));
      break;
    case "author-z-a":
      library.sort((a, b) => b.author.localeCompare(a.author));
      break;
    case "book-a-z":
      library.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "book-z-a":
      library.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "year-up":
      library.sort((a, b) => a.year - b.year);
      break;
    case "year-down":
      library.sort((a, b) => b.year - a.year);
      break;
  }
  updateBooks();
}

showBtn.onclick = () => {
  library = myBooks;
  writeLocal();
  updateBooks();
}

cleanBtn.onclick = (e) => {
  e.preventDefault();
  localStorage.removeItem("library");
  library = [];
  updateBooks();
}

function filterBooks() {
  const value = searchBooks.value.toLowerCase();
  const findedBooks = library.filter((book) => book.name.toLowerCase().includes(value));
  updateBooks(findedBooks);
}

searchBooks.oninput = filterBooks;

const myBooks = [
  { id: 1, name: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, pages: 281 },
  { id: 2, name: "1984", author: "George Orwell", year: 1949, pages: 328 },
  { id: 3, name: "Animal Farm", author: "George Orwell", year: 1945, pages: 141 },
  { id: 4, name: "Brave New World", author: "Aldous Huxley", year: 1932, pages: 311 },
  { id: 5, name: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, pages: 277 },
  { id: 6, name: "The Grapes of Wrath", author: "John Steinbeck", year: 1939, pages: 464 },
  { id: 7, name: "Pride and Prejudice", author: "Jane Austen", year: 1813, pages: 279 },
  { id: 8, name: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, pages: 180 },
  { id: 9, name: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez", year: 1967, pages: 417 },
  { id: 10, name: "The Old Man and the Sea", author: "Ernest Hemingway", year: 1952, pages: 127 }
];

