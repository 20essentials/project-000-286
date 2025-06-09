import { body, canvas } from "./styles.css.ts";

// Aplicar las clases directamente al body y al canvas creados dinámicamente
document.body.className = body;

const canvasEl = document.createElement("canvas");
canvasEl.className = canvas;
document.body.appendChild(canvasEl);

const ctx = canvasEl.getContext("2d")!;
let $width = (canvasEl.width = document.documentElement.scrollWidth);
let $height = (canvasEl.height = document.documentElement.scrollHeight);

const resizeCanvas = () => {
  $width = canvasEl.width = document.documentElement.scrollWidth;
  $height = canvasEl.height = document.documentElement.scrollHeight;
};

const generateRandomColor = (): string =>
  `rgba(${Array.from({ length: 3 }, () => Math.floor(Math.random() * 255)).join(",")},0.8)`;

const drawCanvas = (
  x: number,
  y: number,
  color: string,
  size: number,
  angle: number
) => {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.beginPath();
  ctx.moveTo(size / 2, -size);
  ctx.fillStyle = color;
  ctx.quadraticCurveTo(-size, -size / 2, size / 2, 0);
  ctx.quadraticCurveTo(size, size / 3, 0, -size / 2);
  ctx.fill();
  ctx.closePath();
  ctx.restore();
};

const drawMessage = () => {
  ctx.beginPath();
  ctx.font = "20px Arial";
  ctx.fillStyle = "#fff";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Click to make a Simetría quebrada", $width / 2, $height / 2);
  ctx.closePath();
};

document.addEventListener("click", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const color = generateRandomColor();
  const petalSize = Math.floor(Math.random() * 50) + 20;
  let num = Math.floor(Math.random() * 4) + 19;
  const numberOfPetal = num % 2 === 1 ? num : num + 1;
  for (let petal = 0; petal < numberOfPetal; petal++) {
    const angle = petal * ((Math.PI * 2) / numberOfPetal);
    drawCanvas(x, y, color, petalSize, angle);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  resizeCanvas();
  drawMessage();

  window.addEventListener("resize", () => {
    resizeCanvas();
    drawMessage();
  });
});
