const cvs = document.querySelector("#myCanvas");
// cvs.width = 500;
// cvs.height = 500;

const ctx = cvs.getContext("2d");
const rec = 20;

function updateCanvas() {
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;

    draw();
}

window.addEventListener("resize", updateCanvas);
window.addEventListener("load", updateCanvas);

function draw() {
    ctx.clearRect(0, 0, cvs.width, cvs.height);

    const numX = Math.floor(cvs.width / rec);
    const numY = Math.floor(cvs.height / rec);

    for (let y = 0; y < numY; y++) {
        for (let x = 0; x < numX; x++) {
            const recX = x * rec;
            const recY = y * rec;

            ctx.strokeStyle = "green";
            ctx.strokeRect(recX, recY, rec, rec)
        }
    }
}



// const blockSize = 10;

// let snakeDirection = "right";
// let snakeX = 0;
// let snakeY = 0;

// function updateGame() {
//     if (snakeDirection === "right") {
//         snakeX += blockSize;
//     } else if (snakeDirection === "left") {
//         snakeX -= blockSize;
//     } else if (snakeDirection === "up") {
//         snakeY -= blockSize;
//     } else if (snakeDirection === "down") {
//         snakeY += blockSize;
//     }

//     if(snakeX<0 || snakeX>= cvs.width || snakeY < 0 || snakeY >= cvs.height){
//         alert("game over");
//         snakeX = 0;
//         snakeY = 0;
//     }

//     ctx.clearRect (0,0, cvs.width, cvs.height);

//     ctx.fillRect(snakeX, snakeY, blockSize, blockSize);

//     setTimeout(updateGame, 200);
// }

// function handleKeyPress(e) {
//     if(e.key === "ArrowRight" && snakeDirection !== "left") {
//         snakeDirection = "right";
//     } else if (e.key === "ArrowLeft" && snakeDirection !== "right") {
//         snakeDirection = "left";
//     } else if (e.key === "ArrowUp" && snakeDirection !== "down") {
//         snakeDirection = "up";
//     } else if (e.key === "ArrowDown" && snakeDirection !== "up") {
//         snakeDirection = "down";
//     }

// }

// document.addEventListener("keydown", handleKeyPress)


// updateGame();