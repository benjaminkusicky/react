import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Colors } from "./color-list/Colors";
import { Workers } from "./worker/Workers";
import { Wasm } from "./wasm/Wasm";

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/color-list">Color list</Link>
        </li>
        <li>
          <Link to="/workers">Workers</Link>
        </li>
        <li>
          <Link to="/wasm">WebAssembly</Link>
        </li>
      </ul>

      <hr />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/color-list">
          <Colors />
        </Route>
        <Route exact path="/sheeps"></Route>
        <Route exact path="/workers">
          <Workers />
        </Route>
        <Route exact path="/wasm">
          <Wasm />
        </Route>
      </Switch>
    </Router>
  );
}

const Home: React.FC = () => {
  return <div>Select an application</div>;
};

export default App;
