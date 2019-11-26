import * as PIXI from 'pixi.js';
import SimplexNoise from 'simplex-noise';
import ContourGrid from './contour-grid'
import MeshGenerator from './MeshGenerator';
import HeightMap from './height-map';


const simplexNoise = new SimplexNoise('seed');
const container = document.getElementById('pixi-container');
const w = container.clientWidth;
const h = container.clientHeight;

const canvas = document.createElement('canvas');
canvas.width = w;
canvas.height = h;

const ctx = canvas.getContext('2d');
ctx.clearRect(0, 0, w, h);

const app = new PIXI.Application(
  {antialias: true, resolution: window.devicePixelRatio, width: container.clientWidth, height: container.clientHeight, autoDensity: true}
);

const meshGenerator = new MeshGenerator()
const heightMap = new HeightMap(4, 4, 2)

meshGenerator.generateMesh(heightMap, 20)

app.stage.addChild(meshGenerator.getGraphics());
container.appendChild(app.view);


