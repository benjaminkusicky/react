import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Colors } from "./color-list/Colors";

function App() {
  return (
    <Router>
      <div>
        Unresolved applications
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
      </Switch>
    </Router>
  );
}

const Home: React.FC = () => {
  return <div>Select an application</div>;
};

export default App;
