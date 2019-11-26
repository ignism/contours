import SimplexNoise from "simplex-noise"

class HeightMap {
  height: number[] = []
  rows: number
  cols: number
  levels: number

  constructor(cols: number, rows: number, levels: number, seed: string = Math.random().toString()) {
    this.levels = levels
    this.rows = rows
    this.cols = cols

    const simplexNoise = new SimplexNoise(seed)
    const noiseResolution: number = 0.25

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        let noiseValue: number = simplexNoise.noise2D(x * noiseResolution, y * noiseResolution)
        let norm: number = (noiseValue + 1) * 0.5

        this.height.push(Math.floor(norm * levels))
      }
    }
  }
}

export default HeightMap
