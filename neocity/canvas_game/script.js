const canvas = document.getElementById("canvas_game");
const ctx = canvas.getContext("2d");

// alert(canvas.height);

ctx.beginPath();
ctx.rect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "#00FFFF";
ctx.fill();
ctx.closePath();
