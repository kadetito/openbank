import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { LandingScreen } from "../components/LandingScreen";

export const AppRouter = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/desktop" component={LandingScreen} />
          <Redirect to="/desktop" />
        </Switch>
      </>
    </Router>
  );
};

/**
 *  NOTA:
 *  se enruta el proyecto en previsión del uso de enlaces (aparte de la landing page)
 *  y enrutados aunque la prueba solo conlleve el uso de componentes para una única página
 *
 *
 *
 */
