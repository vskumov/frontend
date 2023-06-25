

// ... дописать

// Создать форму в интерфейсе, которая принимает title, body userid и с этими данными | отправляет запрос на сервер. Запрос можно взять из прошлого примера. Ответ сервера вывести в консоль. 

const form = document.querySelector("#form");
const titleInput = document.querySelector("title");
const bodyInput = document.querySelector("body");
const userIdInput = document.querySelector("#userId");
const btn = document.querySelector("#btn");

form.onsubmit = (e) => {
    e.preventDefault();

    const postData = {
        title: titleInput.value,
        body: bodyInput.value,
        userId: userIdInput.value
    }

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(postData),
    })
        .then((response) => response.json())
        .then((data) => console.log(data))

    form.reset();
}


//! Создать функцию, которая генерирует карточку с постом и использовать её для отображения данных, пришедших с сервера. В качестве запроса на сервер https://jsonplaceholder.typicode.com/posts API.

function postCard(object) {
    const cards = document.querySelector("#container");
    const card = document.createElement("div");
    const title = document.createElement("h3");
    const text = document.createElement("p");

    title.innerText = object.title;
    text.innerText = object.body;

    card.append(title, text);
    cards.append(card);
}

fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => response.json())
.then((data) => data.forEach(element => postCard(element)))
