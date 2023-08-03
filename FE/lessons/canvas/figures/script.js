const canvas = document.querySelector("#myCanvas")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
});

// getContext — 2D rendering
// strokeRect (x,y, width, height)
// fillRect (x,y, width, height)
// __________________________
// beginPath()
// moveTo(x,y)
// lineTo(x,y)
// __________________________
// arc(x,y, radius, startAngle,endAngle,true/false) — falce рисует по часовой



function draw() {
    const ctx = canvas.getContext("2d");

    // ctx.strokeStyle = "red"
    // ctx.lineWidth = 5;
    // ctx.strokeRect(10, 10, 100, 200);

    // ctx.strokeStyle = "green"
    // ctx.lineWidth = 5;
    // ctx.strokeRect(10, canvas.height - 10 - 100, 400, 100, 100);

    // ctx.fillStyle = "purple";
    // ctx.lineWidth = 5;
    // ctx.globalAlpha = 0.7;
    // // ctx.shadowColor = "lightgray";
    // // ctx.shadowBlur = 50;
    // // ctx.shadowOffsetX = 10;
    // // ctx.shadowOffsetY = 10;
    // ctx.fillRect(canvas.width - 10 - 100, canvas.height - 10 - 200, 100, 200);

    // ctx.fillStyle = "yellow";
    // ctx.lineWidth = 5;
    // ctx.globalAlpha = 0.7;
    // // ctx.shadowColor = "yellow";
    // // ctx.shadowBlur = 10;
    // // ctx.shadowOffsetX = 20;
    // // ctx.shadowOffsetY = 20;
    // ctx.fillRect(canvas.width - 10 - 500, 10, 500, 100);


    ////////////////////////

    // const num = 10;
    // const rectH = canvas.height / num;
    // const rectW = canvas.width / num;

    // for (let i = 0; i < num; i++) {
    //     const singleRectH = rectH * (i + 1);
    //     const singleRectX = rectW * i;
    //     const singleRectY = canvas.height - singleRectH;

    //     ctx.fillStyle = "green";
    //     ctx.globalAlpha = 0.7;
    //     ctx.fillRect(singleRectX + 10, singleRectY, rectW - 10, singleRectH);
    // };


    ////////////////////////

    // const num = 20;
    // const squareGap = canvas.width / num / 2;
    // let squareSize = canvas.width / num;

    // for (let i = 0; i < num; i++) {

    //     const squareX = canvas.width / 2 - squareSize / 2;
    //     const squareY = canvas.height / 2 - squareSize / 2;

    //     ctx.fillStyle = "green";
    //     ctx.globalAlpha = 0.1;
    //     ctx.fillRect(squareX, squareY, squareSize, squareSize);

    //     squareSize += squareGap;
    // };


    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(100, 300);
    ctx.lineTo(400, 200);
    ctx.lineTo(100, 100);

    ctx.strokeStyle = "orange";
    ctx.stroke();


    ctx.beginPath();
    ctx.moveTo(500, 500);
    ctx.lineTo(300, 600);
    ctx.lineTo(200, 170);
    ctx.closePath();

    ctx.strokeStyle = "green";
    ctx.stroke();


    ctx.beginPath();
    ctx.moveTo(700, 300);
    ctx.lineTo(450, 370);
    ctx.lineTo(340, 250);
    ctx.closePath();

    ctx.strokeStyle = "red";
    ctx.stroke();

    // Задание. Отрисовать прямоугольник, который занимает весь размер экрана с отступами по 10 единиц от каждой стороны используя только линии.

    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(10, canvas.height - 10);
    ctx.lineTo(canvas.width - 10, canvas.height - 10);
    ctx.lineTo(canvas.width - 10, 10);
    ctx.closePath();

    ctx.lineWidth = 10;
    ctx.strokeStyle = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
    ctx.stroke();

    // ctx.beginPath();
    // ctx.strokeStyle = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
    // ctx.arc(500, 200, 200, 0, 2 * Math.PI);
    // ctx.closePath();
    // ctx.stroke();

    ///////////////////

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    let radius = 20;
    for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);

        ctx.lineWidth = 1;
        ctx.strokeStyle = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

        ctx.stroke();
        radius += 20;
        ctx.closePath();
    }

    ctx.lineWidth = 20;


    // const radiuschen = 100;
    // const startX = radiuschen;
    // const startY = radiuschen;
    // const endX = canvas.width - radiuschen;
    // const endY = canvas.height - radiuschen;

    // ctx.beginPath();
    // ctx.arc(startX, startY, radiuschen, 0, 2 * Math.PI);
    // ctx.stroke();
    // ctx.closePath();

    // ctx.beginPath();
    // ctx.arc(endX, startY, radiuschen, 0, 2 * Math.PI);
    // ctx.stroke();
    // ctx.closePath();

    // ctx.beginPath();
    // ctx.arc(endX, endY, radiuschen, 0, 2 * Math.PI);
    // ctx.stroke();
    // ctx.closePath();

    // ctx.beginPath();
    // ctx.arc(startX, endY, radiuschen, 0, 2 * Math.PI);
    // ctx.stroke();
    // ctx.closePath();


    for (let i = 0; i < 20; i++) {
        const radius = Math.random() * 100 + 50;
        const x = Math.random() * (canvas.width - radius * 2) + radius;
        const y = Math.random() * (canvas.height - radius * 2) + radius;
        const colors = ["#78C2C4", "#FFB5AC", "#6B9080", "#FFE1C9", "#A8DADC", "#F1FAEE"];
        const colorIndex = Math.floor(Math.random() * colors.length);
        const alpha = Math.random() * (0.9 - 0.1) + 0.1;
    
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = `${colors[colorIndex]}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
        ctx.closePath();
    }

}

draw();
