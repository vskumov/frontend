class User {

    static validRoles = ["manager", "admin", "guest", "root"];
    static validStatus = ["online", "offline", "work"];
    static users = [];

    static list_users() {
        User.users.forEach((user) =>
            console.log(`${user.name} - ${user.username} - ${user.role} - ${user.status}`)
        );
    }

    constructor(name, username, role, status) {
        this.name = name;
        this.username = username;
        this.role = role;
        this.status = status;
        User.users.push(this);
    }

    get fullName() {
        return `${this.name} - ${this.username}`
    }

    // "Mike Mike56" -> ["Mike", "Mike56"]

    set fullName(value) {
        const [newName, newUsername] = value.split(" ");
        this.name = newName;
        this.username = newUsername;
    }

    set change_role(newRole) {
        if (User.validRoles.includes(newRole)) {
            this.role = newRole;
            console.log(`Role changed to ${newRole}`);
        } else {
            console.log(`Invalide role: ${newRole}`);
        }
    }

    get change_role() {
        return this.role;
    }
    change_status(newStatus) {
        if (User.validStatus.includes(newStatus)) {
            this.status = newStatus;
            console.log(`Status changed to ${newStatus}`);
        } else {
            console.log(`Error`);
        }
    }
}

// const user1 = new User("Joe", "Joe_Jonas", "admin");

// TODO Задание. Добавить свойство status, и метод change_status которое может принимать одно из предложенных значений online, offline, work. ^|^


// getter / setter

// console.log(user1.fullName);
// user1.fullName = "Mike mike56";
// console.log(user1.fullName);

const user1 = new User("John", "john123", "guest", "offline");
const user2 = new User("Jane", "jane123", "guest", "online");
const user3 = new User("Anna", "annny", "admin", "offline");
const user4 = new User("Bob", "bobob", "guest", "online");

User.list_users();


/////////////////////////////////////////////////////

// TODO Создать класс Product со свойствами title, price, count.  Создать статическое свойство income, которое изначальное равно нулю. Создать метод sale. Которое уменьшает count на единицу. Если count уже равен нулю, то вызывается исключение. Если продажа прошла, то статическое свойство income должно увеличиться на цену товара.


class Product {
    static income = 0;
    static items = [];

    static list_items() {
        Product.items.forEach((item) =>
            console.log(`${item.title} - ${item.price} - ${item.count}`)
        );
    }

    constructor(title, price, count) {
        this.title = title;
        this.price = price;
        this.count = count;
        Product.items.push(this);
    }

    get changePrice() {
        return `${this.title} - ${this.price}`
    }

    set changePrice(newPrice) {
        if (newPrice > 0) {
            this.price = newPrice;
            console.log(`Price changed to ${newPrice}`);
        } else {
            console.log("Please enter valid price");
        }
    }

    sale() {
        try {
            if (this.count > 0) {
                this.count--;
                Product.income += this.price;
                console.log(Product.income);
            } else {
                throw new Error("Товар закончился");
            }
        } catch (e) {
            console.log(e.message)
        }
    }
}

const product1 = new Product("Normal Book", 200, 1);
const product2 = new Product("Big Book", 500, 10);
const product3 = new Product("Sall Book", 100, 5);

product1.sale();
Product.list_items();

// TODO Создать статическое свойство items, которое хранит созданные экземпляры класса Product. Добавить getter и setter для свойства price. При добавлении идет проверка, что цена больше 0. ^|^

product2.sale();

product2.changePrice = 300;
console.log(product2.changePrice);


/////////////////////////////////////////////////////

// TODO Создайте класс Student со свойствами firstName, lastName и grades (массив чисел). Добавьте метод getter averageGrade, который вычисляет среднее значение всех оценок. Добавьте метод-сеттер addGrade, который принимает оценку в виде числа и добавляет ее в массив оценок.

class Student {

    constructor(firstName, lastName, grades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grades = grades;
    }

    get averageGrade() {

        let summ = this.grades.reduce((a, b) => a + b);
        return summ / this.grades.length;
    }

    set addGrade(grade) {

        this.grades.push(grade);
    }
}

const studentOne = new Student("Bob", "Peters", [5, 7, 6, 9])

studentOne.addGrade = 7;
console.log(studentOne.averageGrade);


/////////////////////////////////////////////////////

// TODO Создайте класс Vehicle со свойствами make, model и year. Добавьте статический метод isAntique, который принимает экземпляр Vehicle и возвращает true, если свойство year имеет возраст более 25 лет, и false в противном случае.  Для получения текущего года => const year = new Date().getFullYear();


class Vehicle {

    static isAntique(object) {
        const yearNow = new Date().getFullYear();
        return yearNow - object.year > 25
    };

    constructor(make, model, year) {
        this.make = make;
        this.mode = model;
        this.year = year;
    };
}

const car1 = new Vehicle("Audi", "TT", "2007");
const car2 = new Vehicle("Audi", "TT", "1995");

console.log(Vehicle.isAntique(car1));
console.log(Vehicle.isAntique(car2));



