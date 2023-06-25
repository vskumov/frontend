function toArray(arg) {
    try {
        return Array.from(arg);
    } catch {
        return [];
    }
}

console.log("object ===>", toArray({ a: 1, b: 2 }));
console.log("array ===>", toArray([3, 4, 5]));
console.log("string ===>", toArray("Roza"));
console.log("number ===>", toArray(56));
console.log("undefined ===>", toArray(undefined));

function addSelector(selector) {
    try {
        const text = document.querySelector(selector);
        return text.textContent;
    } catch {
        return null;
    }
}

console.log(addSelector("div"));
console.log(addSelector("p"));


/////////////////////////////////////////////////////////////////////////////////

// TODO Создать функцию saveCall, которая принимает в качестве аргумента функцию и вызывает её, если это функция. Если не функця, выдаёт в консоль сообщение "это не функция".

function nice() {
    return console.log("Yes!");
};

const saveCall = function (funcArg) {
    try {
        if (typeof funcArg === "function") {
            funcArg();
        } else {
            throw new Error();
        }
    } catch {
        const errorTxt = "это не функция";
        return errorTxt;
    }
}

console.log(saveCall(nice));
console.log(saveCall("nice"));


/////////////////////////////////////////////////////////////////////////////////

// ТОDО Создайте функцию mathDivision. Данная функция получает 6 качестве аргунентов два числа и возвращает результ деления первого на второе. Если второй аргумент равен нулю, по функция должна вызвать исключение с текстом "Делить на ноль нельзя"

function mathDivision(num1, num2) {
    try {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            throw new Error("Делить на ноль нельзя");
        }
    } catch (e) {
        return e.message;
    }
}

console.log(mathDivision(100, 0));
console.log(mathDivision(55, 5));
console.log(mathDivision(22, 2));


/////////////////////////////////////////////////////////////////////////////////

// TODO

async function getPost(id, callBack) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!response.ok) {
            throw new Error("такого поста нет");
        }
        const post = await response.json();
        callBack(post);

    } catch (e) {
        console.error(e.message);
    }
}

getPost(2, (data) => {
    console.log(data);
});

/////////////////////////////////////////////////////////////////////////////////

// TODO Данная функция получает API ссылку и callback функцию. Если по указанной ссылке получилось отправить запрос и получить ответ 200, то необходимо вызвать переданную функцию и в качестве аргумента передать ответ сервера. 

async function api(link, callBack) {
    try {
        const response = await fetch(link);
        if (response.status === 200) {
            const answer = await response.json();
            callBack(answer);
        } else {
            throw new Error("Error");
        }
    } catch (e) {
        console.error(e.message);
    }
}

api('https://jsonplaceholder.typicode.com/posts/', (a) => { console.log(a) });


/////////////////////////////////////////////////////////////////////////////////

// TODO Написать функцию, которая принимает URL изображения и асинхронно загружает изображение. Если загрузка прошла успешно, вызовите переданную callBack функцию с загруженным изображением в качестве аргумента. Пример: https://jsonplaceholder.typicode.com/photos/1

async function getPicture(link, callBack) {
    try {
        const getPic = await fetch(link);
        if (getPic.ok) {
            const picture = await getPic.json();
            callBack(picture);
        } else {
            throw new Error('no picture found');
        }

    } catch (e) {
        console.error(e);
    }
}

// `https://jsonplaceholder.typicode.com/photos/${id}`

getPicture(`https://jsonplaceholder.typicode.com/photos/1`, (data) => {
    const photo = document.createElement("img");
    document.body.append(photo);
    photo.src = data.url;
});


// TODO Написать функцию getUserList, которая асинхронно получает список пользователей с сервера с помощью API. Если запрос выполнен успешно, вызовите callBack функцию, передав ей список пользователей в качестве аргумента.https://jsonplaceholder.typicode.com/users/




async function getUserList(callBack) {
    try {
        const allUsers = await fetch('https://jsonplaceholder.typicode.com/users/');
        if (allUsers.ok) {
            const users = await allUsers.json();
            callBack(users);
        } else {
            throw new Error("not a list of users");
        }
    } catch (e) {
        console.error(e.message);
    }
}

getUserList((data) => {
    const list = document.createElement("ol");
    document.body.append(list);
    data.forEach (element => {
        const user = document.createElement("li");
        user.innerText = element.name;
        list.append(user);
    })
})