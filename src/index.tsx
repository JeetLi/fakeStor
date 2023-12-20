import React from "react";
import ReactDOM from "react-dom";

import Home from "./pages/Home/index";

const App = () => (
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
