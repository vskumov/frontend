// Задача: Сохранение и извлечение сложного объекта
// 1)Создайте сложный объект JavaScript, который содержит различные типы данных, включая строки, числа, массивы и другие объекты. 
// 2)Преобразуйте этот объект в строку JSON и сохраните его в localStorage.
// 3)Затем извлеките эту строку JSON из localStorage, преобразуйте ее обратно в объект JavaScript и выведите содержимое объекта в консоль.

const people = [
    {
        name: 'Саша',
        birthDate: new Date('1985-03-12'),
        address: {
            city: 'Москва',
            street: 'Новодмитровская',
            building: '2',
            apt: '001'
        },
        hobbies: ['путешествия', 'книги', 'фотография'],
    },
    {
        name: 'Катя',
        birthDate: new Date('1990-07-05'),
        address: {
            city: 'Берлин'
        },
        hobbies: ['спорт', 'музыка', 'кино'],
    },
    {
        name: 'Дима',
        birthDate: new Date('1982-11-22'),
        address: {
            city: 'Новосибирск'
        },
        hobbies: ['авто', 'спорт', 'путешествия'],
    },
];

const peopleJSON = JSON.stringify(people);
localStorage.setItem('peopleJSON', peopleJSON);

const peopleLocalStorage = localStorage.getItem('peopleJSON');
const peopleNew = JSON.parse(peopleLocalStorage);

console.log(peopleNew);


// Задача 2:
// Создание системы оценок
// Создайте HTML-страницу с тремя полями ввода: "Студент", "Предмет" и "Оценка".
// Под полями ввода разместите две кнопки: "Сохранить" и "Загрузить".
// Когда пользователь вводит информацию в поля и нажимает "Сохранить", вы должны создать объект JavaScript, содержащий эту информацию, и добавить этот объект в массив, который сохраняется в localStorage.
// Когда пользователь нажимает "Загрузить", вы должны извлечь массив из localStorage и вывести всю информацию о каждом студенте на странице.


const form = document.querySelector("#teacher-form");
const nameInput = document.querySelector("#student");
const lessonInput = document.querySelector("#lesson");
const markInput = document.querySelector("#mark");

const list = document.querySelector("#students-list");
const btnShowAll = document.querySelector("#show-all");
const cleanBtn = document.querySelector("#clean-all");


let students = [];

form.onsubmit = (e) => {
    e.preventDefault();
    const studentName = nameInput.value;
    const studentLesson = lessonInput.value;
    const studentMark = markInput.value;
    addMark(studentName, studentLesson, studentMark);
    setArray("students", students);
    nameInput.value = "";
    lessonInput.value = "";
    markInput.value = "";
}


function addMark(student, lesson, mark) {
    const studentIndex = students.findIndex((person) => person.student === student);
    if (studentIndex !== -1) {
        students[studentIndex].lesson.push(lesson);
        students[studentIndex].mark.push(mark);
    } else {
        students.push({ student, lesson: [lesson], mark: [mark] });
    }
}

function updateStudents() {
    list.innerHTML = "";
    students.forEach((person) => {
        const item = document.createElement("li");
        const itemName = document.createElement("h3");
        const itemInnhalt = document.createElement("div");
        itemName.innerText = `${person.student}`
        item.append(itemName);
        const studentMarks = document.createElement("ul");
        for (let i = 0; i < person.lesson.length; i++) {
            const listMarks = document.createElement("li");
            listMarks.innerText = `${person.lesson[i]} - ${person.mark[i]}`;
            studentMarks.appendChild(listMarks);
        }
        itemInnhalt.appendChild(studentMarks);
        item.appendChild(itemInnhalt);
        list.appendChild(item);
    });
}

function setArray(key, array) {
    const newList = JSON.stringify(array);
    localStorage.setItem(key, newList);
    console.log(newList);
}

function getArray(key) {
    const studentsLocalStorage = localStorage.getItem(key);
    if (studentsLocalStorage) {
        const studentsLS = JSON.parse(studentsLocalStorage);
        students = studentsLS;
    };
}

getArray("students");

btnShowAll.onclick = () => {
    updateStudents(students);
}

cleanBtn.onclick = () => {
    localStorage.removeItem("students");
};




// * * * ПЛАНИРУЮ СДЕЛАТЬ, КОГДА БУДЕТ ВРЕМЯ * * *


// Дополнительная (необязательная) задача на практику:
// Мини-игра "Викторина"

// Ваша задача - создать викторину с несколькими вопросами, каждый из которых имеет несколько вариантов ответа, но только один из них правильный. Пользователь выбирает один ответ на каждый вопрос.


// 1) Создайте массив объектов, где каждый объект представляет один вопрос, возможные ответы и правильный ответ.
// Например:
// const quiz = [
//     {
//         question: "What is the capital of France?",
//         answers: ["Paris", "London", "Rome", "Madrid"],
//         correctAnswer: "Paris"
//     },
//     // … дополнительные вопросы
// ];

// 2)Сохраните этот массив в localStorage в виде JSON.
// 3)Загрузите вопросы из localStorage, выведите их на страницу и предложите пользователю выбрать ответ на каждый вопрос.
// 4)После того как пользователь ответил на все вопросы, проверьте его ответы, сравнивая их с правильными ответами из localStorage, и подсчитайте количество правильных ответов.
// 5)Сохраните результаты пользователя в localStorage и предложите ему сыграть снова. Если пользователь сыграет снова, сравните его новые результаты с предыдущими и покажите, улучшился ли он.