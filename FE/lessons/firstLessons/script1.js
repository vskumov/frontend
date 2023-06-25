
// const paragraph = document.getElementsById ("test")

// paragraph.innerText = "My first lesson"

// div.innerHtml = "<p>Новый абзац</p>"


let ps = document.getElementsByTagName ("p")

for (let i = 0; i < ps.length; i++) {
    ps[i].innerText = "Hello World!"
}


const listOfLi = document.getElementsByClassName ("newText")
console.log (listOfLi)

for ( let i = 0; i < listOfLi.length; i++) {
    listOfLi[i].innerText = i+1;
}


// 3

// const link = document.querySelectorAll("a");
// let newLink = [];
// for(key in link){
    
//     newLink.push(link[key].textContent);
    
// }
// console.log(newLink);
