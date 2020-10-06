import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Start } from "./components/start/start";


export default function BasicExample() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Start />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/over">
            <Over />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Game() {
  return (
    <div>
      <h2>Game</h2>
    </div>
  );
}

function Over() {
  return (
    <div>
      <h2>Over</h2>
    </div>
  );
}
