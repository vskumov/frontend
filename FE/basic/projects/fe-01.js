// Написать программу, которая запрашивает у пользователя его возраст (в годах) и выводит, сколько ему дней.

// let age = prompt("Какой ваш возвраст?");
// console.log(age * 365);


// Написать программу, которая считывает через prompt число и выводит в консоль ее квадрат.

// let num = prompt ("Введите число")
// console.log (Math.pow(+num, 2))


// Написать программу, которая получает через prompt одно число и выводит одну из строк “число чётнoe”, “число нечётнoe”, “число равно нулю”.

let number = prompt("Enter number: ")
if(+number===0) {
    console.log("число равно нулю");
} else if(number%2!==0) {
    console.log("число нечётнoe");
} else {
    console.log("число чётнoe");
}
