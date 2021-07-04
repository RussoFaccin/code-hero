import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Characters, Home, NotFound } from "pages";
import { AppProvider } from "contexts";

const Routes = (): JSX.Element => {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route exact path="/characters/:id">
            <Characters />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </AppProvider>
  );
};

export default Routes;
