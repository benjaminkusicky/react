import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Colors } from "./color-list/Colors";
import { Workers } from "./worker/Workers";

function App() {
  return (
    <Router>
      <div>
        Applications
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/color-list">Color list</Link>
          </li>
          <li>
            <Link to="/sheeps">Sheeps</Link>
          </li>
          <li>
            <Link to="/workers">Workers</Link>
          </li>
        </ul>
      </div>

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
      </Switch>
    </Router>
  );
}

const Home: React.FC = () => {
  return <div>Select an application</div>;
};

export default App;
