import React from "react";
import { render } from "react-dom";

import Display from "./Display";

const App = () => (
  <div>
    <Display />
  </div>
);

render(<App />, document.getElementById("app"));

export default App;
