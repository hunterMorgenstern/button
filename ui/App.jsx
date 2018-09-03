import React from "react";
import ReactDOM from "react-dom";

import Display from "./Display";

const App = () => (
  <div>
    <Display />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
