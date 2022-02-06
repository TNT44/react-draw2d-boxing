import "import-jquery";
import "jquery-ui-bundle";
import "jquery-ui-bundle/jquery-ui.css";

import React from "react";
import jquery from "jquery";

import Canvas from "./Canvas";

import "./styles.css";

window.$ = window.jQuery = jquery;

function App() {
  return (
    <div>
      <p>un</p>
      <p>deux</p>
      <p>trois</p>
      <Canvas />
    </div>
  );
}

export default App;
