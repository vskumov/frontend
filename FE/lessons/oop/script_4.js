// function sayHi() {
//     console.log(`Hi, may name is ${this.name} and I'm ${this.age} years old`);
// }

// const person1 = {
//     name: "Alice",
//     age: 20,
//     sayHi: sayHi,
// }

// const person2 = {
//     name: "Bob",
//     age: 30,
//     sayHi: sayHi,
// }

// person1.sayHi();


////////////////////////////////////////////////
// call, apply, bind 

// call
// functionName.call(thisObject, arg1, arg2...)

function sayHi(greeting) {
    console.log(`${greeting}, may name is ${this.name} and I'm ${this.age} years old`);
}

const person1 = {
    name: "Alice",
    age: 20,
}

const person2 = {
    name: "Bob",
    age: 30,
}

sayHi.call(person1, "Guten Tag");
sayHi.call(person2, "Konichewa");


// apply
// functionName.apply(thisObject, [arg1, arg2, ...])

sayHi.apply(person1, ["Hola"]);


// bind
// Аргументы можно передать и в bind, и при вызове функции

function sayHi_(greeting, chao) {
    console.log(`${greeting}, may name is ${this.name} and I'm ${this.age} years old. ${chao}`);
}

const person3 = {
    name: "Hans",
    age: 25,
}

const newSayHi = sayHi_.bind(person3, "Privet");
newSayHi("Poka!");

////////////////////////////////////////////////

// console.log(this) // window object

////////////////////////////////////////////////

// TODO Создайте объект со свойством value и методом, который умножает значение на заданный коэффициент. Создайте второй объект со свойством value и используйте метод call для вызова метода первого объекта с контекстом второго объекта, передавая коэффициент в качестве аргумента. Используйте так же apply для решения этой задачи.

const objectOne = {
    value: 10,
    metod: function (number) {
        this.value *= number;
    }
}

const objectTwo = {
    value: 5
}

objectOne.metod.call(objectTwo, 7);
console.log(objectTwo.value); // 35


// Создайте объект со свойством name и метод, выводящий приветственное сообщение с помощью аргументов. Как аргумент принимает приветственное слово и знак препинания в конце предложения. Так же создайте новый обьект со свойством  name. Создайте новую функцию с помощью bind, которая имеет второй объект в качестве значения this и приветственное слово как аргумент, и вызовите новую функцию где будете передавать второй аргумент -  знак препинания в конце предложения.

const obj1 = {
    name: "Vorname",
    method: function (greeting, znak) {
        console.log(`${greeting}, ${this.name}${znak}`)
    }
}

const obj2 = {
    name: "Vladimir"
}

const newGreating = obj1.method.bind(obj2, "Privet", "!");

newGreating();


////////////////////////////////////////////////

// 4 правила формирования this:
// 1) default binding — func(); / low priority
// 2) implicit binding — func.method();
// 3) explicit binding — call, aplly
// 4) new binding — bind / high priority

////////////////////////////////////////////////


const person = {
    _name: "Joe",
    greet: function(){
        console.log(`Hello, ${this._name}`);
    },
    greetArrow: () => {
        console.log(`Hello, ${this._name}`);
    },
};

person.greet();
person.greetArrow(); // стрелочная функция не имеет this