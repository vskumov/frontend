const form = document.querySelector("form");
const userInput = document.querySelector("#guessInput");
const reset = document.querySelector("#reset");
const result = document.querySelector("#result");


let randomNum = Math.floor(Math.random() * 100) + 1;
let numGuesses = 0;
console.log(randomNum);


form.onsubmit = (e) => {
    e.preventDefault();
    numGuesses++;
    const num = parseInt(userInput.value);
    if (num === randomNum) {
        result.innerText = `Вы угадали! Число — ${randomNum}. Нажмите reset для повторной игры.`;
    } else if (numGuesses >= 3) {
        result.innerText = `Вы проиграли. Правильное число —  ${randomNum}`;
    } else {
        if (num < randomNum) {
            result.innerText = `Число больше, попробуйте снова. Количество попыток — ${3 - numGuesses}`
        } else if (num > randomNum) {
            result.innerText = `Число меньше, попробуйте снова. Количество попыток — ${3 - numGuesses}`
        }
    }
};

reset.onclick = () => {
    randomNum = Math.floor(Math.random() * 100) + 1;
    console.log(randomNum);
    numGuesses = 0;
    userInput.value = "";
    result.innerText = "";
}