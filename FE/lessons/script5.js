
// object style

// const text = document.createElement("p");
// text.innerText = "This is text!!!";

// document.body.append(text);
// // console. Log (text. style);
// 10
// text.style.color = "red";
// text.style.fontWeight = "bold";
// text.style.fontSize = "32px";

// const div = document.createElement("div");
// div.style.width = "300px";
// div.style.height = "200px";
// div.style.border = "1px solid black";
// div.style.backgroundColor = "yellow";

// document.body.append(div);

// div.onmouseover = () => {
//     div.style.backgroundColor = "salmon";
// }

// div.onmouseout = () => {
//     div.style.backgroundColor = "yellow";
// }


// Написать цикл, который создает множество div-ов c цветами от rgb(128, 128, 0) до rgb(128, 128, 255). У дивов цвет должен меняться с шагом 5.

// for (let i = 0; i <= 255; i += 5) {

//     const div = document.createElement('div');
//     div.style.width = "300px";
//     div.style.height = "30px";
//     div.style.border = "1px solid black";
//     div.style.marginBottom = "1px";

//     div.style.backgroundColor = `rgb(128, 128, ${i})`;

//     document.body.append(div);

//     div.onmouseover = () => {
//         div.style.backgroundColor = "salmon";
//     }

//     div.onmouseout = () => {
//         div.style.backgroundColor = `rgb(128, 128, ${i})`;
//     }
// };


//  где-то ошибка???
// const p = document.querySelector('p');
// p.classList.add ("color", "test", "test2");
// console.log (p.classList);

// p.classList.remove ("color");
// console.log (p.classList);

// p.classList.replace ("test", "color");
// console.log (p.classList);


// const div = document.querySelector("div");

// for (let i = 1; i <= 10; i++) {
//   const p = document.createElement("p");
//   p.innerText = i;
//   p.style.padding = "10px";
//   div.append(p);

//   p.onclick = () => {
//     p.classList.toggle("active");
//   };
// }


// ------------

// const p = document.querySelector("p");
// const button = document.querySelector("button");

// button.onclick = () => {
//     p.classList.toggle("active");
// };


// const body = document.querySelector("body");
// const button = document.querySelector("button");

// button.onclick = () => {
//     body.classList.toggle("active");
// };

// const words = [
//     {
//         en: "book",
//         ru: "книга",
//     },
//     {
//         en: "sun",
//         ru: "солнце",
//     },
//     {
//         en: "cup",
//         ru: "кружка",
//     },
//     {
//         en: "pen",
//         ru: "ручка",
//     },
//     {
//         en: "table",
//         ru: "стол",
//     },
// ];

// // В первом варианте решения ошибка? Второй вариант: В каждом диве должно быть два параграфа. В одном написано на русском, а во втором на английском и при нажатии на див один параграф получает класс с display: none а второй с display: block.


// for (let i = 0; i < words.length; i++) {

//     const div = document.createElement("div");

//     const p1 = document.createElement("p");
//     p1.innerText = words[i].en;
//     p1.classList.add("hide");
//     div.append(p1);

//     const p2 = document.createElement("p");
//     p2.innerText = words[i].ru;
//     p2.classList.add("show");
//     div.append(p2);

//     document.body.append(div);

//     div.onclick = () => {
//         p1.classList.toggle("hide");
//         p1.classList.toggle("show");
//         p2.classList.toggle("hide");
//         p2.classList.toggle("show");
//     };

// };




// ["Task1", "Task2", "Task3", "Task4", "Task5","Task6", "Task7"].

// Создайте список с элементами из массива. При клике на пункт из списка добавляйте класс "completed" (можете добавить любой стиль). 

// Создайте кнопку, которая при нажатии скрывает все пункты с классом "completed".


const body = document.querySelector("body");
const button = document.querySelector("button");

const tasks = ["Task1", "Task2", "Task3", "Task4", "Task5", "Task6", "Task7"];

const ul = document.createElement("ul");
document.body.append(ul);

for (i = 0; i < tasks.length; i++) {
    const li = document.createElement("li");
    li.innerText = tasks[i];

    ul.append(li);

    li.onclick = () => {
        li.classList.add("completed");
    };

    console.log(li.classList);

    button.onclick = () => {
        const compl = document.querySelectorAll(".completed");

        for (let i = 0; i <compl.length; i++) {
            compl[i].classList.replace("completed", "hide");
        };

    };
}





