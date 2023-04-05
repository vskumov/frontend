/** Написать цикл, который выводит только четные числа, [1,5,8,4,7,6,2,6,4,8] */

// const arr = [1,5,8,4,7,6,2,6,4,8];

// for(let i = 0; i < arr.length; i++) {
//   if(arr[i] % 2 === 0) {
//     console.log(arr[i]);
//   }
// }


/** Найти сумму положительных чисел. [1,2,5,-5,-4,1,2,-8] */

// const arr = [1,2,5,-5,-4,1,2,-8];
// sum = 0

// for(let i = 0; i < arr.length; i++) {
//   if(arr[i] > 0) {
//     sum += arr[i];
//   }
// }

// console.log(sum);


/** Найти сумму чисел, индекс которых сопадает со значением. */

// let array = [0,1,3,5,4,6,5];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//   if (i === array[i]) {
//     sum += array[i];
//   }
// }

// console.log(sum);


/**  Найти минимальные и максимальные числа в массиве [1,2,3,5,8,9,52,-9,-6,10] */

// let array = [1,2,3,5,8,9,52,-9,-6,10];
// let min = Infinity;
// let max = -Infinity;

// for (let i = 0; i < array.length; i++) {

//   const arrElement = array[i]

//   if (arrElement < min) {
//     min = arrElement;
//   }   

//   if (arrElement > max) {
//     max = arrElement;
//   } 
// }

// console.log ("min", min, "max", max);


/** Найти сумму чётных и нечётных чисел [1,2,3,5,10,46,11,20] */

// const arr = [1,2,3,5,10,46,11,20];
// let sum1 = 0;
// let sum2 = 0;
// let difference = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     sum2 += arr[i];
//   } else {
//     sum1 += arr[i]
//   }
// }

// if (sum1 > sum2) {
//   difference = sum1 - sum2;
// } else {
//   difference = sum2 - sum1;
// }

// console.log ("сумма нечётных", sum1, "сумма чётных", sum2, "разница", difference);


/**  Перевернуть массив чисел [1,2,3,4,5] */

// const arr = [1,2,3,4,5];
// let newArr = [];

// for (let i = arr.length-1; i >= 0; i--) {
//   newArr.push (arr[i])
// }

// console.log (newArr);


/**  Выведите имя и возраст каждого человека в массиве объектов в виде строки [  { name: 'Alice' , age: 30}, { name: 'Bob' , age: 25}, { name: 'Charlie' , age: 18}] */

// const list = [
//   { name: 'Alice', age: 30 },
//   { name: 'Bob', age: 25 },
//   { name: 'Charlie', age: 18 }];

// for (let i = 0; i < list.length; i++) {
//   console.log(list[i].name, list[i].age);
// }

// for (let i = 0; i < list.length; i++) {
//   let person = list[i];
//   console.log (`${person.name}, ${person.age}`)
// }


/** Создайте массив объектов, содержащий квадраты чисел от 1 до 10. Пример {number: 1, square: 1} */

// const squares = [];

// for (let i = 1; i < 11; i++) {
//   squares.push ({number: i, square: i**2})
// }

// console.log (squares)


/** 1. Найти общую сумму всех товаров из массива */
/** 2. Создайте новый массив, где будут толькоп родукты дороже 100 */


// const objects = [
//   { name: 'Laptop', price: 1200 },
//   { name: 'Tastatur', price: 50 },
//   { name: 'Bildschirm', price: 300 },
//   { name: 'Mause', price: 20 }
// ];

// let sum = 0;
// let priceOver100 = [];

// for (let i = 0; i < objects.length; i++) {
//   sum += objects[i].price;
// }

// console.log("Сумма всех предметов:", sum)

// for (let i = 0; i < objects.length; i++) {
//   if (objects[i].price > 100) {
//     priceOver100.push (objects[i]);
//   }
// }

// console.log(priceOver100)


/** Создать функицю power, которая принимает 2 числа как аргумент. Первое число — основание, второе — степень. Функция возвращает результат арифметического действия. Пример вызова функции power (2,3) => 8. Не использовать **. */

// function power (x,y) {
//     let result = 1;

//     for (let i = 0; i < y; i++) {
//       result *= x;
//     }

//     return result;
// }

// console.log (power(2,10))

