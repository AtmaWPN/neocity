
var mouseX = 0;
var mouseY = 0;

function handleMouseMove(event) {
  mouseX = event.x;
  mouseY = event.y;
}

document.onmousemove = handleMouseMove;

function update(timestamp) {
  // console.log(mouseX);
  requestAnimationFrame(update);
}

requestAnimationFrame(update);