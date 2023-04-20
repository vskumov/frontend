
// const text = document.createElement ("p");
// text.innerText = "Text text"

// document.body.append (text);




// const div = document.createElement ("div");
// const _name = document.createElement ("h3");
// const advice = document.createElement ("p");
// const adviceTwo = document.createElement ("h6");

// _name.innerText = "Владимир";
// advice.innerText = "Спи больше и чаще!";
// adviceTwo.innerText = "Но не забывай читать учебник по JS ;)";

// div.append(_name, advice, adviceTwo);
// document.body.appendChild(div);




// Создать множество параграфов с числами от 0 до 19 и добавить в див с id container, который находится в HTML документе.

// const number = document.querySelector('#container');

// for (let i = 0; i < = 19; i++ ) {
//   let num = document.createElement('p');
//   num.innerText = i;
//   number.appendChild(num)
// }




// Создайте маркированный список с четными числами из диапазона от 1 до 10 и добавьте этот список в body.

// const list = document.createElement ('ul');
// document.body.appendChild(list);

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) {
//     let punkt = document.createElement('li');
//     punkt.innerText = i;
//     list.appendChild(punkt)
//   } 
// }

// Создайте пронумерованный список из квадратов чисел от 1 до 10.


// const list = document.createElement ('ol');
// document.body.appendChild(list);

// for (let i = 1; i <= 10; i++) {
//     let punkt = document.createElement('li');
//     punkt.innerText = i**2;
//     list.appendChild(punkt)
// }





// const imgSrc = prompt ("add image's source:");
// const linkHref = prompt ("add link:");

// const image = document.createElement("img");
// image.setAttribute("src", imgSrc);

// const link = document.createElement("a");
// link.setAttribute("href", linkHref);
// link.setAttribute("target", "_blank");

// // link.innerText = "Ссылка!";

// link.appendChild(image);
// document.body.append (link);



// Массив из объектов со свойствами link и title. Свойства хранят в себе ссылку на страницу и название страницы соответственно. Напишите цикл, который создаст для каждого объекта ссылку и добавит в div #root.


// let links = [
//         {
//           title: "Google",
//           link: "https://www.google.com/",
//         },
//         {
//           title: "Baidu",
//           link: "http://www.baidu.com/",
//         },
//         {
//           title: "Bing",
//           link: "https://www.bing.com/",
//         },
//         {
//           title: "Yahoo!",
//           link: "https://www.yahoo.com/",
//         },
//         {
//           title: "Yandex(dzen)",
//           link: "https://www.dzen.ru/",
//         },
//       ];


// const div = document.createElement("div");
// div.setAttribute("id", "root")
// document.body.appendChild(div);

// for (let i = 0; i < links.length; i++) {

//     let link = document.createElement("a");
//     link.setAttribute("href", links[i].link);
//     link.innerText = links[i].title;    

//     div.appendChild(link);
// }




// Создаем функцию, которая как аргумент принимает ссылку на картинку и ссылку на сайт и возвращает картинку со ссылкой внутри.


// const imgSrc = prompt("add image's source:");
// const linkHref = prompt("add link:");


// function setImg(imgSrc, linkHref) {

//     const image = document.createElement("img");
//     image.setAttribute("src", imgSrc);

//     const link = document.createElement("a");
//     link.setAttribute("href", linkHref);
//     link.setAttribute("target", "_blank");

//     link.appendChild(image);

//     return link;
// }

// const element = setImg(imgSrc, linkHref);
// document.body.appendChild(element);
