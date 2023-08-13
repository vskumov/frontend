const input = document.getElementById("print");
const output = document.getElementById("text");

function showInput() {
    output.innerText = input.value;
  }
  
input.addEventListener('keyup', showInput);



// const textInput = document.getElementById('print');
// const textOutput = document.getElementById('text');

// textInput.addEventListener('keyup', e => {
//   textOutput.innerText = textInput.value;
// })
