import * as PIXI from 'pixi.js';
import SimplexNoise from 'simplex-noise';
import ContourGrid from './contour-grid'

const simplexNoise = new SimplexNoise('seed');
const container = document.getElementById('pixi-container');
const w = container.clientWidth;
const h = container.clientHeight;

const canvas = document.createElement('canvas');
canvas.width = w;
canvas.height = h;

const ctx = canvas.getContext('2d');

let pixels = ctx.createImageData(container.clientWidth, container.clientHeight);
console.log('TCL: pixels', pixels);

const noiseResolution = 0.0025;
let freq = 8;
let shift = 0.99;
let delta = 0.01;
let a = 1.0;
let steps = 8;

for (let x = 0; x < w; x++) {
  for (let y = 0; y < h; y++) {
    let noiseValue = simplexNoise.noise2D(x * noiseResolution, y * noiseResolution);
    let norm = (noiseValue + 1) * 0.5;
    let value = Math.floor(norm * steps) / steps;

    // let circ = norm * Math.PI * 2 let value = Math.sign((Math.sin(circ * freq) + 1) * 0.5 - shift) * 255 y =
    // (A/atan(1/delta))*atan(sin(2*pi*t*f)/delta) let value = ((a / Math.atan(1 / delta)) * Math.atan(Math.sin(circ * freq) / delta) + 1) * 0.5
    // * 255

    let index = 4 * (x + y * w);
    pixels.data[index + 0] = value * 255;
    pixels.data[index + 1] = value * 255;
    pixels.data[index + 2] = value * 255;
    pixels.data[index + 3] = 255;
  }
}

ctx.clearRect(0, 0, w, h);
ctx.putImageData(pixels, 0, 0);

const app = new PIXI.Application(
  {antialias: true, resolution: window.devicePixelRatio, width: container.clientWidth, height: container.clientHeight, autoDensity: true}
);

app.stop();
// app.resizeTo = container;
container.appendChild(app.view);

const sprite = new PIXI.Sprite();
sprite.texture = PIXI.Texture.from(canvas);

app.stage.addChild(sprite);

app.start();

let size = 10
let cg = new ContourGrid(w, h, size, 'seed', steps)
let cells = cg.getCells()

const grid = new PIXI.Graphics();

for (let y = 0; y < Math.floor(h / size); y++) {
  for (let x = 0; x < Math.floor(w / size); x++) { 
    let index = x + y * Math.floor(w / size);
    let color = PIXI.utils.rgb2hex([cells[index], 0, 0])
    grid.beginFill(color)
    grid.drawRect(x * size, y * size, size, size)
    grid.endFill()
  }
}

let step = 2
let boolGrid = []

  for (let y = 0; y < cg.cols; y++) {
    for (let x = 0; x < cg.rows; x++) {
      let index = x + y * cg.rows;

      if (cells[index] >= step) {
        boolGrid[index] = true;
      } else {
        boolGrid[index] = false;
      }
    }
  }


app.stage.addChild(grid);