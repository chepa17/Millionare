import React from "react";
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
import { earnCounting } from "./store";
import { ROUTES } from "./types";

export const App: React.FC = () => {
  let store = createStore(earnCounting);

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path={ROUTES.HOME}>
              <StartPage />
            </Route>
            <Route path={ROUTES.GAME}>
              <ContainerGame />
            </Route>
            <Route path={ROUTES.GAME_OVER}>
              <ContainerOver />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
