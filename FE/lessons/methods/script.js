// const objects = [
//     { id: 1, title: 'велосипед', price: 45000 },
//     { id: 2, title: 'самокат', price: 15000 },
//     { id: 3, title: 'сноуборд', price: 20000 },
//     { id: 4, title: 'лыжи', price: 22000 }
//   ];

//   objects.sort((a, b) => a.price - b.price);

//   console.log(objects);

// Напишите функцию sortStrings, которая принимает в качестве аргумента массив строк и возвращает новый массив со строками, отсортированными в алфавитном порядке.

// function sortStrings(arr) {
//     return arr.sort();
// };

// const myArr = ['велосипед', 'сноуборд', 'лыжи', 'абажур'];
// const sortedArr = sortStrings(myArr);

// console.log(sortedArr)


// Сумма двух наименьших чисел в массиве.

// function sumSmallNums (nums) {
//     nums.sort((a,b) => a-b);
//     nums = nums.filter(num => num > 0)
//     return nums[0] + nums[1];
// };

// console.log(sumSmallNums([-1,3,5,7,-4,1,6,-1]));


// Рандомизатор
// const array = [25, 16, 7, "Joe", "John"];
// array.sort(() => {
//   return 0.5 - Math.random();
// });


// const nums = [1, 2, 3, 6, 5, 8, 16, 12, 31];

// Сложение положительных чисел массива.
// const result = nums.reduce((acc, current) => {
//     if (current > 0) {
//       return acc + current;
//     } else {
//       return acc;
//     }
//   }, 0);
//   console.log(result);

// То же самое с торнарным оператором.
// const result = nums.reduce((acc, current) => acc + (current > 0 ? current : 0), 0);
// console.log(result);

// Сумма чётных
// const result = nums.reduce((acc, current) => acc + (current % 2 === 0 ? current : 0), 0);
// console.log(result);

// Найти максимальное в массиве
// const bigNumber = nums.reduce((acc, curr) => acc > curr ? acc : curr);


// const objects = [
//     { id: 1, price: 130 },
//     { id: 2, price: 230 },
//     { id: 3, price: 100 },
//     { id: 4, price: 300 },
// ];

// const masPriceObject = objects.reduce((acc,curr) => acc.price > curr.price ? acc : curr);
// console.log(masPriceObject)


const products = [
    { id: 1, title: "велосипед", price: 45000, marks: [4, 5, 3, 5] },
    { id: 2, title: "самокат", price: 15000, marks: [4, 4, 5, 4] },
    { id: 3, title: "сноуборд", price: 20000, marks: [4, 4, 5, 4] },
    { id: 4, title: "лыжи", price: 22000, marks: [4, 4, 3, 4] },
];

// products.forEach((elem) => {
//     elem.sum_marks = elem.marks.reduce((acc,curr) => acc + curr);
//     delete elem.marks;
// });

// console.log(products);

// Найти наибольшую стоиомость
// products.forEach(el => {
//     el.maxMark = el.marks.reduce((acc, curr) => acc > curr ? acc : curr);
//     delete el.marks;
// });

// console.log(products);

// Показать среднюю оценку для каждого объекта.
// products.forEach((elem) => {
//     elem.avgMark = elem.marks.reduce((acc, curr) => acc + curr) / elem.marks.length;
//     delete elem.marks;
// });

// console.log(products);

