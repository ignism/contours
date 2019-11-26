import { SquareGrid } from "./square-grid"
import * as PIXI from "pixi.js"
import HeightMap from "./height-map"

class MeshGenerator {
  squareGrid: SquareGrid

  generateMesh(map: HeightMap, squareSize: number) {
    this.squareGrid = new SquareGrid(map, 1, squareSize)
    console.log("TCL: MeshGenerator -> generateMesh -> this.squareGrid", this.squareGrid)
  }

  getGraphics() {
    let g = new PIXI.Graphics()

    g.width = (this.squareGrid.cols + 1) * this.squareGrid.squareSize
    g.height = (this.squareGrid.rows + 1) * this.squareGrid.squareSize
    let color, xPos, yPos
    console.log("TCL: MeshGenerator -> getGraphics -> this.squareGrid", this.squareGrid)

    // for (let y = 0; y < this.squareGrid.rows; y++) {
    //   for (let x = 0; x < this.squareGrid.cols; x++) {
    for (let y = 0; y < 1; y++) {
      for (let x = 0; x < 1; x++) {
        let index = x + y * this.squareGrid.cols

        console.log("TCL: MeshGenerator -> getGraphics -> index", index)

        color = this.squareGrid.squares[index].topLeft.active ? 0xff0000 : 0xffffff
        xPos = this.squareGrid.squares[index].topLeft.position.x + 200
        yPos = this.squareGrid.squares[index].topLeft.position.y + 200

        g.beginFill(color)
        g.drawCircle(xPos, yPos, this.squareGrid.squareSize * 0.25)
        g.endFill()

        color = this.squareGrid.squares[index].topRight.active ? 0xff0000 : 0xffffff
        xPos = this.squareGrid.squares[index].topRight.position.x + 200
        yPos = this.squareGrid.squares[index].topRight.position.y + 200

        g.beginFill(color)
        // g.drawCircle(xPos, yPos, this.squareGrid.squareSize * 0.25)
        g.endFill()

        color = this.squareGrid.squares[index].bottomLeft.active ? 0xff0000 : 0xffffff
        xPos = this.squareGrid.squares[index].bottomLeft.position.x + 200
        yPos = this.squareGrid.squares[index].bottomLeft.position.y + 200

        g.beginFill(color)
        // g.drawCircle(xPos, yPos, this.squareGrid.squareSize * 0.25)
        g.endFill()

        color = this.squareGrid.squares[index].bottomRight.active ? 0xff0000 : 0xffffff
        xPos = this.squareGrid.squares[index].bottomRight.position.x + 200
        yPos = this.squareGrid.squares[index].bottomRight.position.y + 200

        g.beginFill(color)
        // g.drawCircle(xPos, yPos, this.squareGrid.squareSize * 0.25)
        g.endFill()
    
        color = 0x888888
        g.beginFill(color)
        xPos = this.squareGrid.squares[index].centreTop.position.x + 200
        yPos = this.squareGrid.squares[index].centreTop.position.y + 200
        g.drawCircle(xPos, yPos, this.squareGrid.squareSize * 0.125)

        xPos = this.squareGrid.squares[index].centreRight.position.x + 200
        yPos = this.squareGrid.squares[index].centreRight.position.y + 200
        g.drawCircle(xPos, yPos, this.squareGrid.squareSize * 0.125)

        xPos = this.squareGrid.squares[index].centreBottom.position.x + 200
        yPos = this.squareGrid.squares[index].centreBottom.position.y + 200
        g.drawCircle(xPos, yPos, this.squareGrid.squareSize * 0.125)

        xPos = this.squareGrid.squares[index].centreLeft.position.x + 200
        yPos = this.squareGrid.squares[index].centreLeft.position.y + 200
        g.drawCircle(xPos, yPos, this.squareGrid.squareSize * 0.125)
        g.endFill()
      }
    }
    console.log("TCL: MeshGenerator -> getGraphics -> g", g)
    return g
  }

  // void OnDrawGizmos() {
  //     if (squareGrid != null) {
  //         for (int x = 0; x < squareGrid.squares.GetLength(0); x ++) {
  //             for (int y = 0; y < squareGrid.squares.GetLength(1); y ++) {

  //                 Gizmos.color = (squareGrid.squares[x,y].topLeft.active)?Color.black:Color.white;
  //                 Gizmos.DrawCube(squareGrid.squares[x,y].topLeft.position, Vector3.one * .4f);

  //                 Gizmos.color = (squareGrid.squares[x,y].topRight.active)?Color.black:Color.white;
  //                 Gizmos.DrawCube(squareGrid.squares[x,y].topRight.position, Vector3.one * .4f);

  //                 Gizmos.color = (squareGrid.squares[x,y].bottomRight.active)?Color.black:Color.white;
  //                 Gizmos.DrawCube(squareGrid.squares[x,y].bottomRight.position, Vector3.one * .4f);

  //                 Gizmos.color = (squareGrid.squares[x,y].bottomLeft.active)?Color.black:Color.white;
  //                 Gizmos.DrawCube(squareGrid.squares[x,y].bottomLeft.position, Vector3.one * .4f);

  //                 Gizmos.color = Color.grey;
  //                 Gizmos.DrawCube(squareGrid.squares[x,y].centreTop.position, Vector3.one * .15f);
  //                 Gizmos.DrawCube(squareGrid.squares[x,y].centreRight.position, Vector3.one * .15f);
  //                 Gizmos.DrawCube(squareGrid.squares[x,y].centreBottom.position, Vector3.one * .15f);
  //                 Gizmos.DrawCube(squareGrid.squares[x,y].centreLeft.position, Vector3.one * .15f);

  //             }
  //         }
  //     }
  // }
}

export default MeshGenerator
