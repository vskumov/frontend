// 1) Напишите функцию printWithDelay, которая принимает в качестве аргумента массив строк. Функция должна выводить каждую строку из массива на консоль с задержкой в 1 секунду между каждой строкой.


// 2) Напишите функцию getSquares, которая принимает в качестве аргумента массив чисел. Функция должна использовать метод map для возведения в квадрат каждого числа в массиве и возвращать новый массив, содержащий возведенные в квадрат числа.


const numbers = [0,1,2,3,4,5,6,7,8,9,10]

function getSquares(arr) {
    return arr.map(num => num ** 2)
};
console.log(getSquares(numbers))


// 3) Напишите функцию sumEvenSquares, которая принимает в качестве аргумента массив чисел. Функция должна использовать методы map и filter и вернуть сумму оставшихся четных чисел.

function sumEvenSquares (arr) {
// const even = arr.filter(num => num % 2 === 0);
// const evenSquares = even.map(num => num ** 2);
// return evenSquares.reduce((acc,curr) => acc + curr, 0);

return arr.filter(num => num % 2 === 0).map(num => num ** 2).reduce((acc, curr) => acc + curr, 0);
};

console.log(sumEvenSquares(numbers));


// 4) Напишите функцию с именем delayedUpperCase, которая принимает в качестве аргумента массив строк. Функция должна использовать метод forEach для перебора каждой строки в массиве и выводить на консоль версию строки в верхнем регистре с задержкой в 2 секунды.

function delayedUpperCase(arr) {

};

// 5) Напишите функцию countDown, принимающую в качестве аргумента число. Функция должна использовать метод setTimeout для печати чисел от заданного числа до 1, с задержкой в 1 секунду между каждым числом.

function countDown(number) {

};


// 6) Напишите функцию filterNamesByLetter, которая принимает в качестве аргументов массив имен и букву. Функция должна использовать метод filter, чтобы вернуть новый массив, содержащий только те имена из исходного массива, которые начинаются с заданной буквы. 

function filterNamesByLetter (names, letter) {

    newNames = names.toLowerCase();
    newLetter = letter.toLowerCase();
    return newNames.filter(name => newNames.startsWith(newLetter));


    // return names.filter(name => name.toLowerCase().startsWith(letter.toLowerCase()));
}

const people =  ['Вова', 'Тёма', 'Маша', 'Ваня', 'Лиза', 'Даня', 'Лёша', 'Вика', 'Макс', 'Катя']

console.log(filterNamesByLetter(people, 'м'));