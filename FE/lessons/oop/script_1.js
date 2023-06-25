//
// }
// };

// const dog_1 = new Dog("Sharik");
// const dog_2 = new Dog ();
// dog_1. name = "Bobig";
// dog_2.name = "Sharik";
// dog_1. addName ("Bobik");
// dog_2. addName ("Sharik");
// console. log (dog_1);


// TODO Создать класс User со свойствами name, username, age.

class User {
    constructor(name, username, age) {
        this.name = name;
        this.username = username;
        this.age = age;
    }
    b_day() {
        this.age++;
    }
    change_username(newUsername) {
        this.username = newUsername;
    }
}

const userOne = new User("Name Surname", "nikname", 34);
console.log(userOne);

// TODO Добавить метод b_dау которое увеличивает возраст на единицу.

userOne.b_day();
console.log();

// TODO Добавить метод change_username, который получает в качестве аргумента новое имя пользователя и меняет его.

userOne.change_username("Roza");


///////////////////////////////////////////////////////////////////

// TODO Создать класс Roduct со свойствами  title, price, count и методами change_price и sale. Метод change_price принимает аргумент new_price и устанавлиает свойство price в это новое значение. Метод sale принимает аргумент discount_percent, рассчитывает скидку на основе этого процента и вычитает её из свойства price.

class Product {
    constructor(title, price, count) {
        this.title = title;
        this.price = price;
        this.count = count;
    }

    change_price(new_price) {
        try {
            if (new_price < 0) {
                throw new Error("Цена не может быть меьше нуля");
            }
            this.price = new_price;

        } catch (e) {
            console.error(e.message);
        }
    }

    sale(discount_percent) {
        const discount = this.price / 100 * discount_percent;
        this.price -= discount;
    }
    sell() {
        try {
            if (this.count === 0) {
                throw new Error("Товар закончился");
            }
            this.count--;
        } catch (e) {
            console.error(e.message);
        }
    }
}


const productOne = new Product("book", 100, 1);
console.log(productOne);

productOne.change_price(110);
console.log(productOne);

productOne.sale(5);
console.log(productOne);

productOne.sell();
productOne.sell();

// TODO Добавить метод change_price, который принимает в качестве аргумента новую цену и делает проверку, если цена меньше нуля, то цена не меняется и вызывает исключение "цена не может быть меньше нуля". ^up^ try catch

// TODO Добавить метод sell, который уменьшает товар на единицу, если значение доходит до 0, показывает сообщение "товар закончился" ^up^ 


///////////////////////////////////////////////////////////////////

// TODO Создать класс BankAccount со свойствами balance и accountNumber. Добавьте методы, позволяющие вносить деньги на счёт, снимать и проверять баланс. 

class BankAccount {
    constructor(balance, accountNumber) {
        this.balance = balance;
        this.accountNumber = accountNumber;
    }
    addMoney(ammount) {
        this.balance += ammount;
        console.log(this.balance);

    }

    takeMoney(takeAmmount) {
        try {
            if (takeAmmount > this.balance) {
                throw new Error("недостаточно средств на счёте")
            }
        } catch (e) {
            console.error(e.message);
        }
    }

    showBalance() {
        console.log(this.balance)
    }
}

const bankAccOne = new BankAccount(1000, 1);

bankAccOne.showBalance();

bankAccOne.addMoney(1000);

bankAccOne.takeMoney(5000);

///////////////////////////////////////////////////////////////////

// TODO Создайте класс Student со свойствами name, age, email и grades (массив с оценками), а также методы addGrade и getAverageGrade. Первый метод должен принимать оценку и добавлять её в массив grades, если оценка является числом от 0 до 100. Если оценка не является числом или не попадает в диапазон от 0 до 100, метод выдаёт ошибку. Второй метод вычисляет средний бал в массиве с оценками и возвращает его. 

class Student {
    constructor(name, age, email, grades) {

        this.name = name;
        this.age = age;
        this.email = email;
        this.grades = grades;
    }

    addGrade(grade) {
        if (grade > 0 && grade <= 100) {
            this.grades.push(grade);
        } else if (typeof grade !== "number") {
            console.log("Введите число от 0 до 100")
        } else {
            console.log("Оценка должна быть от 0 до 100")
        }
    }

    getAverageGrade() {
        const sum = this.grades.reduce((a, b) => a + b);
        const averageGrade = sum / this.grades.length;
        return averageGrade;
    }
}

const studentIvan = new Student("Ivan Ivanov", 19, "ivan@ivanov.de", [54, 88, 91, 100]);

studentIvan.getAverageGrade();

studentIvan.addGrade(99);
console.log(studentIvan.grades);

studentIvan.addGrade(-99);
studentIvan.addGrade("пятьдесят");

console.log(studentIvan.getAverageGrade())

///////////////////////////////////////////////////////////////////

// TODO Создайте класс Rectangle..., а также методы getArea и getPerimeter...

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        try {
            if (this.width <= 0 || typeof this.width !== "number") {
                throw new Error("Параметры меньше или равны нулю, либо не являются числом")
            } else if (this.height <= 0 || typeof this.height !== "number") {
                throw new Error("Параметры меньше или равны нулю, либо не являются числом")
            } else {
                const area = this.width * this.height;
                return area;
            }
        } catch (e) {
            console.error(e.message);
        }
    }

    getPerimeter() {
        try {
            if (this.width <= 0 || typeof this.width !== "number") {
                throw new Error("Параметры меньше или равны нулю, либо не являются числом")
            } else if (this.height <= 0 || typeof this.height !== "number") {
                throw new Error("Параметры меньше или равны нулю, либо не являются числом")
            } else {
                const perimeter = (this.width + this.height) * 2;
                return perimeter;
            }
        } catch (e) {
            console.error(e.message);
        }
    }
}


const rectOne = new Rectangle(10, 25);
const rectTwo = new Rectangle(10, "25");
const rectThree = new Rectangle(10, 25);


console.log(rectOne.getArea());
console.log(rectOne.getPerimeter());

console.log(rectTwo.getPerimeter());
console.log(rectThree.getPerimeter());
