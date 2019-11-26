import { Point, ControlPoint, Vector2 } from "./point"
import HeightMap from "./height-map"

class Square {
  topLeft: ControlPoint
  topRight: ControlPoint
  bottomRight: ControlPoint
  bottomLeft: ControlPoint

  centreTop: Point
  centreRight: Point
  centreBottom: Point
  centreLeft: Point

  constructor(topLeft: ControlPoint, topRight: ControlPoint, bottomRight: ControlPoint, bottomLeft: ControlPoint) {
    this.topLeft = topLeft
    this.topRight = topRight
    this.bottomRight = bottomRight
    this.bottomLeft = bottomLeft

    this.centreTop = topLeft.right
    this.centreRight = bottomRight.above
    this.centreBottom = bottomLeft.right
    this.centreLeft = bottomLeft.above
  }
}

class SquareGrid {
  squares: Square[]
  rows: number
  cols: number
  squareSize: number

  constructor(map:HeightMap, level: number, squareSize: number) {
    this.squares = []
    this.squareSize = squareSize
    this.cols = map.cols - 1
    this.rows = map.rows - 1

    const mapWidth = this.cols * squareSize
    const mapHeight = this.rows * squareSize

    let controlPoints: ControlPoint[] = []

    for (let y = 0; y < map.rows; y++) {
      for (let x = 0; x < map.cols; x++) {
        let pos: Vector2 = {
          x: x * squareSize,
          y: y * squareSize
        }

        controlPoints.push(new ControlPoint(pos, map.height[x + y * this.cols] >= level, squareSize))
      }
    }

    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        let topLeft = x + (y + 1) * this.cols
        let topRight = (x + 1) + (y + 1) * this.cols
        let bottomRight = x + (y + 1) * this.cols
        let bottomLeft = x + y * this.cols

        this.squares.push(new Square(controlPoints[topLeft], controlPoints[topRight], controlPoints[bottomRight], controlPoints[bottomLeft]))
      }
    }
  }
}

export { Square, SquareGrid }
