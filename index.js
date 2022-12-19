const canvas = document.querySelector(".canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
playerImage.src = "shadow_dog.png";
const spriteWithe = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 4;
let gameFrame = 0;
const staggerFrame = 5;

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  let position = Math.floor(gameFrame / staggerFrame) % 10;
  frameX = spriteWithe * position;

  ctx.drawImage(
    playerImage,
    frameX,
    frameY * spriteHeight,
    spriteWithe,
    spriteHeight,
    0,
    0,
    spriteWithe,
    spriteHeight
  );

  gameFrame++;
  requestAnimationFrame(animate);
}

animate();
