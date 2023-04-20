// 1) Написать скрипт, который выводит списки с товарами в интерфейс (на основе массива с объектами). Внизу каждого списка выводится итоговая сумма товара. А так же в самом конце выводится итоговая сумма и количество всех товаров.

const headCars = document.createElement("h1");
headCars.innerHTML = "1) Cars";
document.body.appendChild(headCars);

const cars = [
    {
        title: "BMW",
        price: "40000",
        count: "15"
    },

    {
        title: "Toyota",
        price: "20000",
        count: "13"
    },

    {
        title: "Ford",
        price: "30000",
        count: "20"
    },

    {
        title: "Chevrolet",
        price: "60000",
        count: "9"
    },

    {
        title: "Volkswagen",
        price: "30000",
        count: "13"
    },
]

let totalPrice = 0;
let totalCount = 0;

for (let i = 0; i < cars.length; i++) {

    const carsByType = cars[i];

    totalPrice += carsByType.price * carsByType.count;
    totalCount += Number(carsByType.count);

    const carTitle = document.createElement("li");
    carTitle.innerHTML = carsByType.title;

    const carPrice = document.createElement("li");
    carPrice.innerHTML = carsByType.price;

    const carCount = document.createElement("li");
    carCount.innerHTML = carsByType.count;

    const list = document.createElement("ul");
    list.append(carTitle, carPrice, carCount);
    document.body.appendChild(list);

    const carsPrice = document.createElement("p");
    carsPrice.innerHTML = `Стоимость всех ${carsByType.title}: $${carsByType.price * carsByType.count}`;
    document.body.appendChild(carsPrice);

    console.log(totalPrice);
    console.log(totalCount);
}

const summary = document.createElement("h3");
summary.innerHTML = `Стоимость всех ${totalCount} авто равна $${totalPrice}`;

document.body.append(summary);


// 2) Напишите скрипт, который выводит в интерфейс следующую таблицу (html должен быть пустым, все элементы создаются строго с помощью скриптов):

const itGuys = document.createElement("h1");
itGuys.innerHTML = "2) IT guys";
document.body.appendChild(itGuys);

const persons = [
    {
        num: "No.",
        name: "Full Name",
        position: "Position",
        salary: "Salary",
    },

    {
        num: "1",
        name: "Bill Gates",
        position: "Founder Microsoft",
        salary: "$1000",
    },

    {
        num: "2",
        name: "Steve Jobs",
        position: "Founder Apple",
        salary: "$1200",
    },

    {
        num: "3",
        name: "Larry Page",
        position: "Founder Google",
        salary: "$1100",
    },

    {
        num: "4",
        name: "Mark Zuckeberg",
        position: "Founder Facebook",
        salary: "$1300",
    }
]

const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
const trHead = document.createElement("tr");

for (let key in persons[0]) {
    const th = document.createElement("th");
    th.innerText = persons[0][key];
    trHead.appendChild(th);
}

thead.appendChild(trHead);
table.appendChild(thead);

for (let i = 1; i < persons.length; i++) {
    const trBody = document.createElement("tr");

    // const person = persons[i];

    // const num = document.createElement("td");
    // num.innerHTML = person.num;

    // const name = document.createElement("td");
    // name.innerHTML = person.name;

    // const position = document.createElement("td");
    // position.innerHTML = person.position;

    // const salary = document.createElement("td");
    // salary.innerHTML = person.salary;

    // trBody.append (num, name, position, salary);

    for (const key in persons[i]) {
        const td = document.createElement("td");
        td.innerText = persons[i][key];
        trBody.appendChild(td);
    }

    tbody.appendChild(trBody);
}

table.appendChild(tbody);

document.body.appendChild(table);

// 3) Дан массив из объектов, в котором хранятся породы собак и их возраст. Напишите цикл, который создаст для каждого объекта параграфы (Пример как должен выглядеть вывод первого объекта: golden retriever's age is 7 ) и добавит в body.

const headDogs = document.createElement("h1");
headDogs.innerHTML = "3) Dogs";
document.body.appendChild(headDogs);

const dogs = [
    {
        breed: "golden retriever",
        age: 7,
    },
    {
        breed: "labrador retriever",
        age: 4,
    },
    {
        breed: "french bulldog",
        age: 12,
    },
    {
        breed: "beagle",
        age: 6,
    },
    {
        breed: "german shepherd dog",
        age: 2,
    },
    {
        breed: "poodle",
        age: 3,
    },
    {
        breed: "bulldog",
        age: 4,
    },
];

for (let i = 0; i < dogs.length; i++) {

    const dog = dogs[i];

    const dogPublicProfile = document.createElement("p");
    dogPublicProfile.innerHTML = `<i class="las la-paw"></i> ${dog.breed}'s age is ${dog.age}`;
    document.body.appendChild(dogPublicProfile);
}


// 4) Создайте список с названиями фильмов и годов их выпуска из массива объектов. Массив с объектами создавать самому. Каждый объект должен иметь два ключа – name, year.

const headFilms = document.createElement("h1");
headFilms.innerHTML = "4) Films";
document.body.appendChild(headFilms);

let starWarsMovies = [
    { name: "Звёздные войны: Эпизод I – Скрытая угроза", year: 1999 },
    { name: "Звёздные войны: Эпизод II – Атака клонов", year: 2002 },
    { name: "Звёздные войны: Эпизод III – Месть Ситхов", year: 2005 },
    { name: "Звёздные войны: Эпизод IV – Новая надежда", year: 1977 },
    { name: "Звёздные войны: Эпизод V – Империя наносит ответный удар", year: 1980 },
    { name: "Звёздные войны: Эпизод VI – Возвращение джедая", year: 1983 },
    { name: "Звёздные войны: Эпизод VII – Пробуждение силы", year: 2015 },
    { name: "Звёздные войны: Эпизод VIII – Последние джедаи", year: 2017 },
    { name: "Звёздные войны: Эпизод IX – Скайуокер. Восход", year: 2019 }
];

const list = document.createElement("ul");
for (let i = 0; i < starWarsMovies.length; i++) {
    const movie = starWarsMovies[i];

    const aboutMovie = document.createElement("li");
    aboutMovie.innerHTML = `${movie.name}, ${movie.year}`;
    list.appendChild(aboutMovie);
}

document.body.appendChild(list);