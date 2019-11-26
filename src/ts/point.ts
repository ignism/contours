interface Vector2 {
  x: number
  y: number
}

class Point {
  position: Vector2
  vertexIndex: number = -1

  constructor(position: Vector2) {
    this.position = position
  }
}

class ControlPoint extends Point {
  active: boolean
  above: Point
  right: Point

  constructor(position: Vector2, active: boolean, squareSize: number) {
    super(position)
    this.active = active

    this.above = new Point({
      x: this.position.x,
      y: this.position.y + squareSize * 0.5
    })

    this.right = new Point({
      x: this.position.x + squareSize * 0.5,
      y: this.position.y
    })
  }
}

export { Point, ControlPoint, Vector2 }
