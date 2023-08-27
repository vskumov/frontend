// - - - - Задача 1. Простое размещение и обработка промиса - - - - - 
// Создайте промис, который разрешается через 1 секунду и возвращает строку "промис выполнен" 


const newProm = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise success")
    }, 5000)
});

newProm.then((suc) => {
    console.log(suc);
}).finally();


// - - - - Задача 2. Создайте два промиса, которые разрешаются через случайное количество времени. Дождитесь их выполнения и выведите результаты одновременно. 

const prOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("prOne success")
    }, Math.random() * 1000)
});

const prTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("prOne success")
    }, Math.random() * 1000)
});

Promise.all([prOne, prTwo]).then((suc) => {
    console.log(suc);
});

// Метод all возвращает массив со всеми ответами. 


// - - - - Задача 3. Создайте функцию, которая использует Fetch API для получения даных из общедоступнойго API (например, JSONplaceholder) и записывает ответы в консоль. 

function data() {
    fetch("https://jsonplaceholder.typicode.com/posts/1").then((d) =>
        d.json()
    ).then((dt) =>
        console.log(dt)
    )
};

data();

// - - - - Задача 4. Создайте функцию, которая получает список постов из API и динамечески отображает их на web-странице. 

const postsDiv = document.querySelector("#posts");

// function listPosts() {
//     fetch("https://jsonplaceholder.typicode.com/posts/").then((d) =>
//         d.json()
//     ).then((dt) =>
//         dt.forEach(element => {
//             const id = document.createElement("h3");
//             id.innerText = element.id;

//             const text = document.createElement("p");
//             text.innerText = element.body;
//             postsDiv.append(id, text);
//         })
//     )
// }

// listPosts();


// - - - - Задача 5. async, await

async function getPosts() {
    try {
        const postsR = await fetch("https://jsonplaceholder.typicode.com/posts/");
        const postsD = await postsR.json();
        postsD.forEach(element => {
            const header = document.createElement("h3");
            const text = document.createElement("p");

            header.innerText = element.title;
            text.innerText = element.body;
            postsDiv.append(header, text);

        });
    } catch (e) {
        console.log(e.message);
    }
}

getPosts();

// - - - - Задача 6. Создайте функцию, которая получает список задач для определённого пользователя и отображает их.
// https://jsonplaceholder.typicode.com/users/1/todos


async function listToDos(userId) {

    const list = document.querySelector("#todo-list");
    const toDoList = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
    const todos = await toDoList.json();

    const listYes = document.createElement("ul");
    const listNo = document.createElement("ul");

    todos.forEach(user => {
        if (user.completed) {
            const item = document.createElement("li");
            item.innerText = user.title;
            listYes.append(item);
        } else if (!user.completed) {
            const item = document.createElement("li");
            item.innerText = user.title;
            listNo.append(item);
        }
    });

    list.append(listYes, listNo);
}

listToDos(2);


// - - - - Задача 7. Создайте функцию, которая получает id пользователя и возвращает данные о пользователе и все посты пользователя. Данные должны быть в виде объекта
// https://jsonplaceholder.typicode.com/users/<id пользователя>
// https://jsonplaceholder.typicode.com/posts?userId=<id пользователя>


async function getInfoAndPosts(userId) {

    const [user, posts] = await Promise.all([fetch(`https://jsonplaceholder.typicode.com/users/${userId}`), fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)]);

    const userInfo = await user.json();
    const userPosts = await posts.json();

    return ([userInfo, userPosts]);

};


getInfoAndPosts(3).then(result => console.log(result));
