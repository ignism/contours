import SimplexNoise from 'simplex-noise';

class ContourGrid {
  width: number;
  height: number;
  gridSize: number;
  rows: number;
  cols: number;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  cells: Array<number>;
  simplexNoise: SimplexNoise;
  steps: number
  MarchingSquares: Array<number>;

  constructor(width : number, height : number, gridSize : number, seed : string, steps: number) {
    this.width = width;
    this.height = height;
    this.gridSize = gridSize;

    this.rows = Math.floor(width / gridSize);
    this.cols = Math.floor(height / gridSize);
    this.cells = []

    this.canvas = document.createElement('canvas');
    this.canvas.width = width;
    this.canvas.height = height;
    this.ctx = this.canvas.getContext('2d');

    this.simplexNoise = new SimplexNoise(seed);
    this.steps = steps

    this.init()
  }

  init() {
    let resolution = 0.025;
    for (let y = 0; y < this.cols; y++) {
      for (let x = 0; x < this.rows; x++) {
        let index = x + y * this.rows;
        let noise = this.simplexNoise.noise2D(x * resolution, y * resolution);
        let normalized = (noise + 1) / 2;
        this.cells[index] = Math.floor(normalized * this.steps) / this.steps;
      }
    }
  }

  getCells() {
    return this.cells;
  }
}

export default ContourGrid;