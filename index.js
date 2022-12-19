const canvas = document.querySelector(".canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
playerImage.src = "shadow_dog.png";
const spriteWithe = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  // ctx.fillRect(100, 50, 100, 100);
  ctx.drawImage(
    playerImage,
    frameX * spriteWithe,
    frameY * spriteHeight,
    spriteWithe,
    spriteHeight,
    0,
    0,
    spriteWithe,
    spriteHeight
  );

  if (frameX < 6) frameX++;
  else frameX = 0;

  gameFrame++;
  requestAnimationFrame(animate);
}

animate();
