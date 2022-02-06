import React, { useEffect } from "react";
import draw2d from "draw2d";

function Canvas() {
  useEffect(() => {
    const canvas = new draw2d.Canvas("canvas");

    canvas.add(
      new draw2d.shape.basic.Circle({
        x: 40,
        y: 10,
        stroke: 3
      })
    );
  }, []);

  return <div id="canvas" />;
}

export default Canvas;
