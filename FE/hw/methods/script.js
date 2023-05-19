// 1) Превратите массив чисел в длинную строку, состоящую из всех этих чисел.
// Пример: [1,2,3] => "1,2,3"

const numbers = [1,2,3,4,5,6,7,8,9,0];

const numberInString = numbers.toString();
const numberInStrJoin = numbers.join(", ")
console.log(numberInString);
console.log(numberInStrJoin);


// 2) Используя метод reduce, посчитайте сколько людей проголосовали.

const voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];

// const areVoted = voters.reduce((acc, curr) => {

//     if (curr.voted) {
//         return acc + 1;
//     } else {
//         return acc;
//     }
// }, 0);

const areVoted = voters.reduce((acc, curr) => curr.voted ? acc + 1 : acc, 0);
console.log(`Проголосовало: ${areVoted}`);


// 3) Получив массив всех товаров из вашего списка желаний, прикиньте, сколько будет стоить купить все сразу.

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const totalPrice = wishlist.reduce((acc, curr) => acc + curr.price, 0);
console.log(`Общая сумма: ${totalPrice}`)


// 4) У вас есть массив объектов, представляющих список клиентов с их заказами. Каждый объект имеет свойства name и orders, где orders - это массив строк, представляющих товары, которые заказал клиент. Ваша задача - создать новый массив объектов, где каждый объект имеет свойства name и totalOrders, где totalOrders - общее количество товаров, заказанных клиентом.

const customers = [
    { name: 'Иван', orders: ['яблоки', 'бананы'] },
    { name: 'Мария', orders: ['перец', 'лук', 'огурцы', 'томаты'] },
    { name: 'Андрей', orders: ['апельсины', 'манго', 'киви', 'бананы'] },
    { name: 'Софья', orders: ['ананас', 'луло', 'мандарины'] },
    { name: 'Дмитрий', orders: ['картофель', 'лук', 'цукини', 'морковь', 'арбуз'] }
];

const newCustomers = customers.map((customer) => {
    return { name: customer.name, totalOrders: customer.orders.length };
});

console.log(newCustomers);


// 5) Создайте массив объектов со свойствами 'name' и 'age'. Вычислите количество совершенолетних и несовершеннолетних людей.

// 6) Создайте массив объектов со свойствами 'name' и 'age'. Используя методы массива, создайте новый массив, содержащий только те объекты, возраст которых больше 30 лет.

const people = [
    { name: 'Вова', age: 37 },
    { name: 'Тёма', age: 23 },
    { name: 'Маша', age: 30 },
    { name: 'Ваня', age: 39 },
    { name: 'Лиза', age: 40 },
    { name: 'Даня', age: 42 },
    { name: 'Лёша', age: 18 },
    { name: 'Вика', age: 66 },
    { name: 'Макс', age: 6 },
    { name: 'Катя', age: 17 }
];

const areAdult = people.reduce((acc, curr) => curr.age >= 18 ? acc + 1 : acc, 0);
const areKids = people.length - areAdult;
console.log((`Количество совершеннолетних: ${areAdult}, подростков: ${areKids}`));


const listOfAdults = people.filter((person) => person.age >= 18);
console.log(listOfAdults);