/** 1)  Найдите общие элементы (в виде массива) между двумя массивами. Пример: [1,2,3], [4,2,1] => [1,2] */

const arrayOne = [1, 2, 3, 5, 7, 8, 9];
const arrayTwo = [2, 3, 5, 6, 1, 9, 0];

const arrayNew = [];

for (let i = 0; i < arrayOne.length; i++) {
    const currentElement = arrayOne[i];
    for (let j = 0; j < arrayTwo.length; j++) {
        if (currentElement === arrayTwo[j]) {
            arrayNew.push(currentElement);
            // break;
        }
    }
}

console.log(arrayNew)


/** 2)  Создать функцию, которая получает в качестве аргумента число и возвращает массив из чисел от 0 до указанного числа.*/

const setOfNumbers = []

function makeArrayWithNumbers(x) {
    for (let i = 0; i <= x; i++) setOfNumbers.push(i);
    return setOfNumbers;
}

console.log(makeArrayWithNumbers(7))


/** 3)  Предыдущее задание делаем с объектом. (как ключ передаем i). */

function createObject(y) {
    const object = {};
    for (let i = 0; i <= y; i++) {
        object[i] = i;
    }
    return object;
}

console.log(createObject(7));


/** 4)  Описать функцию, которая получает в качестве аргумента число и строку, где число обозначает сколько раз должна быть добавлена эта строка в массив. Возвращает массив из этих строк. Например: передаем строку “dog” и цифру 3, в результате мы получаем [“dog”,”dog”,”dog”]. */

function countAnimals(animal, number) {
    let animals = []
    for (let i = 0; i <= number - 1; i++) animals.push(animal);
    return animals;
}

console.log(countAnimals("cat", 5))


/** 5)  Создайте функцию, которая как аргумент принимает одну строку. Функция возвращает это слово в развернутом виде. Пример: “cat” => “tac” */

function turnWord(word) {

    let newWord = '';
    for (let i = word.length - 1; i >= 0; i--) {

        newWord += word[i];
    }

    return newWord;
}

console.log(turnWord("достопримечательность"))


/** 6)  Напишите функцию, которая в качестве аргументов получает слово и определяет, является ли оно палиндромом. Если да, функция возвращает true, в ином случае false. */

function checkWord(word) {

    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - i - 1]) {
            return false;
        }
    }
    return true;


    // let currentElement = word[i];
    // for (let j = word.length; j >= 0; j--) {
    //     if (currentElement = word[j]){
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    // }
}

console.log(checkWord("шалаш"))


/** 7)   Написать функцию, которая получает в качестве аргумента массив из объектов и возвращает объект с самым дорогим товаром. */


const objects = [
    { name: 'Tastatur', price: 50 },
    { name: 'Bildschirm', price: 300 },
    { name: 'Laptop', price: 1200 },
    { name: 'Mous', price: 20 }
];

function checkPrice(objects) {

    let maxPrice = 0;
    let mostExpencive = 0;

    for (let i = 0; i < objects.length; i++) {

        if (objects[i].price > maxPrice) {
            maxPrice = objects[i].price;
            mostExpencive = objects[i];
        }
    }

    return mostExpencive;

}

console.log(checkPrice(objects))