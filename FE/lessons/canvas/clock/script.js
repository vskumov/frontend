const canvas = document.querySelector("#myCanvas");
canvas.width = 500;
canvas.height = 500;

const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#00eeee";
ctx.lineWidth = 17;
ctx.shadowColor = "#00cccc";
ctx.shadowBlur = 10;


function degToRadian(degree) {
    const oneDeg = Math.PI / 180;
    return degree * oneDeg;
}

function render() {
    const now = new Date();
    const today = now.toDateString();
    const time = now.toLocaleTimeString("en-US", {
        hour12: false,
    });

    const hours = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    const mil = now.getMilliseconds();

    const smoothSec = sec + mil / 1000;
    const smoothMin = min + smoothSec / 60;

    const gradient = ctx.createRadialGradient(250, 250, 6, 250, 250, 250);
    gradient.addColorStop(0, "rgba(0, 80, 90, 0.9)");
    gradient.addColorStop(1, "#333333");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // hours start
    ctx.beginPath();
    ctx.arc(250, 250, 230, degToRadian(270), degToRadian(hours * 30 - 90));
    ctx.stroke();

    // min start
    ctx.beginPath();
    ctx.arc(250, 250, 200, degToRadian(270), degToRadian(smoothMin * 6 - 90));
    ctx.stroke();

    // sec start
    ctx.beginPath();
    ctx.arc(250, 250, 170, degToRadian(270), degToRadian(smoothSec * 6 - 90));
    ctx.stroke();

    ctx.font = "24px Verdana";
    ctx.fillStyle = "#00eeee";
    ctx.fillText(today, 150, 240);

    ctx.font = "24px Verdana";
    ctx.fillStyle = "#00eeee";

    ctx.fillText(`${time}:${mil}`, 150, 270);

}

setInterval(render,1);