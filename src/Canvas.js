import React from "react";
import draw2d from "draw2d";

class Canvas extends React.Component {
  canvas;

  componentDidMount() {
    this.canvas = new draw2d.Canvas("canvas");

    this.canvas.add(
      new draw2d.shape.basic.Circle({
        x: 40,
        y: 10,
        stroke: 3
      })
    );
  }

  render() {
    return (
      <div
        id="canvas"
        style={{ height: 600, width: 600, border: "dashed brown" }}
      />
    );
  }
}

export default Canvas;
