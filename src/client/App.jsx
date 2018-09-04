import React from "react";
import { render } from "react-dom";

import Display from "./components/Display";

const App = () => (
  <div>
    <div>
      <h1 className="header">Button of Mystery</h1>
    </div>
    <Display />
  </div>
);

render(<App />, document.getElementById("app"));

export default App;
