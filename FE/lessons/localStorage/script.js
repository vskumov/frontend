// Задача. Добавьте еще одну кнопку "Загрузить". При нажатии на эту кнопку, данные, сохраненные в localStorage, должны загружаться обратно в поле ввода.

// Задача. Добавить кнопку, которая очищает localStorage.

// const form = document.querySelector('form');
// const inputField = document.querySelector('#inputField');
// const btn = document.querySelector('#restoreBtn');
// const cleanBtn = document.querySelector('#cleanBtn');

// form.onsubmit = (e) => {
//   e.preventDefault();
//   const inputFieldValue = inputField.value;
//   localStorage.setItem('inputValue', inputFieldValue);
//   inputField.value = '';
// }; 

// btn.onclick = () => {
//     inputField.value = localStorage.getItem('inputValue');
// };

// cleanBtn.onclick = () => {
//     localStorage.removeItem('inputValue');
// };



const swithBtn = document.querySelector('#toggle');
const body = document.body;

swithBtn.onclick = () => {
    if(body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
        localStorage.setItem('mode', 'dark')
    } else {
        body.classList.replace('dark-mode', 'light-mode');
        localStorage.setItem('mode', 'light')
    }
};

const mode = localStorage.getItem('mode');
if(mode === 'dark') body.classList.replace('light-mode', 'dark-mode');


// Задача. Создать каунтер. Страница с двумя кнопками “+” и “-” и при нажатии на какую-либо число должно меняться в соответствующую сторону. Значение counter не должно слетать при перезагрузке страницы.


const value = document.querySelector("#value");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const savedValue = localStorage.getItem('savedValue');

// if(savedValue) {
//     value.textContent = savedValue;
// }

plusBtn.addEventListener("click", () => {
  value.textContent = Number(value.textContent) + 1;
  savedValue = value.textContent;
  localStorage.setItem('savedValue', savedValue);
});

minusBtn.addEventListener("click", () => {
  value.textContent = Number(value.textContent) - 1;
  savedValue = value.textContent;
  localStorage.setItem('savedValue', savedValue);
});
