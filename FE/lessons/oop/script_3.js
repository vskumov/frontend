console.log("................ Задание 1 ................")

// TODO 1) Создайте класс ShoppingCart, который имеет свойства items и totalPrice, а также методы addItem и removeItem. Метод addItem должен добавлять товар в корзину и обновлять общую цену, а метод removeItem должен удалять товар из корзины и обновлять общую цену. Оба метода должны выдавать ошибку, если переданный аргумент не является допустимым объектом со свойствами name и price.


class ShoppingCart {

    constructor(items, totalPrice) {
        this.items = [];
        this.totalPrice = 0;
    }

    addItem(item) {
        try {
            if (!item || !item.name || !item.price || item.price < 0) {
                throw new Error(`item ${item.name} is invalid, please double check`);
            }
            this.items.push(item);
            this.totalPrice += item.price;
        } catch (e) {
            console.log(e.message);
        }
    }
    removeItem(itemToRemove) {

        try {
            if (!itemToRemove || !itemToRemove.name || !itemToRemove.price) {
                throw new Error(`item ${itemToRemove.name} is invalid, please double check`);
            }

            const matchingItem = this.items.find(item => item.name === itemToRemove.name);

            if (!matchingItem) {
                throw new Error(`item ${itemToRemove.name} is not found in the cart`);
            }

            this.items = this.items.filter(item => item.name !== matchingItem.name);
            this.totalPrice -= matchingItem.price;

        } catch (e) {
            console.log(e.message);
        }
    }
}

const cart = new ShoppingCart();

const item1 = { name: "iPhone12", price: -1000 };
const item2 = { name: "MacBook", price: 2000 };
const item3 = { name: "iPad", price: 500 };
const item4 = { name: "iPhone14", price: 1500 };
const item5 = { name: "iPhone16", price: 1900 };


cart.addItem(item1);
cart.addItem(item2);
cart.addItem(item3);
cart.addItem(item4);

console.log(cart.items);
console.log(cart.totalPrice);


cart.removeItem(item4);
cart.removeItem(item5);

console.log(cart.items);
console.log(cart.totalPrice);



console.log("................ Задание 2 ................")

// TODO 2) Создайте класс с именем Triangle, который имеет свойства a, b и c, представляющие длины сторон треугольника. Класс должен иметь метод getPerimeter который вычисляет периметр. Класс также должен использовать блоки try-catch для обработки ошибок при создании нового экземпляра класса, выбрасывая ошибку, если значения a, b и c не являются допустимыми числами.

class Triangle {
    constructor(a, b, c) {
        try {
            if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a) {
                this.a = a;
                this.b = b;
                this.c = c;
            } else {
                throw new Error(`Incorrect sizes`);
            }
        } catch (e) {
            console.log(e.message);
        }
    }

    getPerimeter() {
        if (typeof this.a !== "number") {
            return `It is impossible to calculate the perimeter of a triangle with such parameters.`;
        }
        return this.a + this.b + this.c;
    }

}


const triangleOne = new Triangle(3, 5, 4);
const triangleTwo = new Triangle(3, 1, 4);

console.log(triangleOne.getPerimeter());
console.log(triangleTwo.getPerimeter());



console.log("................ Задание 3 ................")

// TODO 3) Создайте класс Circle со свойствами radius и diameter. Добавьте методы getter и setter для обоих свойств, которые обновляют другое свойство соответствующим образом. Например, если обновляется свойство radius, то свойство diameter также должно обновляться по формуле diameter = radius * 2, и наоборот. При создании экземпляра указываем только радиус.

class Circle {

    constructor(radius, diametr) {
        this._radius = radius;
        this._diameter = radius * 2;
    }

    get radius() {
        return this._radius;
    }

    set radius(radius) {
        if (radius < 0) {
            throw new Error('Радиус не может быть отрицательным!');
        }
        this._radius = radius;
        this._diameter = radius * 2;
    }

    get diameter() {
        return this._diameter;
    }

    set diameter(diameter) {
        if (diameter < 0) {
            throw new Error('Диаметр не может быть отрицательным!');
        }
        this._diameter = diameter;
        this._radius = diameter / 2;
    }

}

const circleOne = new Circle(4);
console.log(circleOne.diameter);

circleOne.diameter = 12;
console.log(circleOne.diameter);
console.log(circleOne.radius);

try {
    circleOne.radius = -5;
} catch (e) {
    console.log(e.message);
}



console.log("................ Задание 4 ................")

// TODO 4) Создайте класс Person со свойствами firstName, lastName и age. Добавьте статическое свойство oldestPerson, которое хранит самый старый экземпляр Person, созданный на данный момент. Добавьте статический метод compareAge, который принимает два экземпляра Person и возвращает разницу в их возрасте.

class Person {

    static oldestPerson = null;

    static compareAge(person1, person2) {
        if (person1.age > person2.age) {
            const difference = person1.age - person2.age;
            return `${person1.firstName} ${person1.lastName} is ${difference} years older than ${person2.firstName} ${person2.lastName}`
        } else {
            const difference = person2.age - person1.age;
            return `${person2.firstName} ${person2.lastName} is ${difference} years older than ${person1.firstName} ${person1.lastName}`
        }

    }

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        if (!Person.oldestPerson || age > Person.oldestPerson.age) {
            Person.oldestPerson = this;
        }
    }
}

const person1 = new Person("Ivan", "Ivanov", 33);
const person2 = new Person("Sergey", "Sergeev", 32);
const person3 = new Person("Anna", "Annova", 35);
const person4 = new Person("Olga", "Olgova", 29);

console.log(Person.compareAge(person2, person3));
console.log(Person.oldestPerson);

const person5 = new Person("John", "Johnson", 37);

console.log(Person.compareAge(person4, person3));
console.log(Person.oldestPerson);

console.log(Person.compareAge(person4, person1));



console.log("................ Задание 5 ................")

// TODO 5) Создайте класс Book со свойствами title, author и yearPublished. Добавьте статическое свойство, где будут сохранены все экземпляры Book. Добавьте статический метод listAuthors, который возвращает массив со всеми именами авторов.


class Book {

    static allBooks = [];

    constructor(title, author, yearPublished) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
        Book.allBooks.push(this);
    }

    static listAuthors() {
        const authors = Book.allBooks.reduce((acc, book) => {
            if (!acc.includes(book.author)) {
                acc.push(book.author);
            }
            return acc;
        }, []);

        return authors;
    };

}

const book1 = new Book("1984", "George Orwell", 1949);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book3 = new Book("Pride and Prejudice", "Jane Austen", 1813);
const book4 = new Book("Animal Farm", "George Orwell", 1945);
const book5 = new Book("Homage to Catalonia", "George Orwell", 1938);


console.log(Book.listAuthors());