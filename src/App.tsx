import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { StartPage } from "./components/startPage/startPage";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ContainerOver } from "./components/gameOverPage/containerOver";
import { ContainerGame } from "./components/gamePage/containerGame";

type Action = {
  type: string;
}

const earnCounting = function (state = 1, action: Action) {
  switch (action.type) {
    case "Add": 
      return state + 1
    case "Reset": 
      return 1
    default:
      return state;
  }
};

let store = createStore(earnCounting);

export default function App() {

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <StartPage />
            </Route>
            <Route path="/game">
              <ContainerGame/>
            </Route>
            <Route path="/over">
              <ContainerOver />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
