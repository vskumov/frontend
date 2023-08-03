const choices = document.querySelectorAll(".choice-btn");
const humanChoiceShow = document.querySelector("#human-choice");
const computerChoiceShow = document.querySelector("#computer-choice");
const resultShow = document.querySelector("#result");
const resetBtn = document.querySelector("#reset");

let humanChoice;
let computerChoice;
let result;

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    humanChoice = choice.id;
    humanChoiceShow.innerHTML = `— <i class="las la-hand-${humanChoice}"></i>`;

    computerChoice = getComputerChoice();
    computerChoiceShow.innerHTML = `— <i class="las la-hand-${computerChoice}"></i>`;

    result = findWinner(humanChoice, computerChoice);
    resultShow.innerHTML = result;
  });
});

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}

function findWinner(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return `Ничья! <i class="las la-hand-peace"></i>`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return `Вы победили!`;
  } else {
    return `Вы проиграли!`;
  }
}

resetBtn.addEventListener("click", () => {
  humanChoiceShow.innerHTML = "";
  computerChoiceShow.innerHTML = "";
  resultShow.innerHTML = "";
});
