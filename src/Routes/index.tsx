import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Characters, Home, NotFound } from "pages";
const Routes = (): JSX.Element => {
  return (
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
  );
};

export default Routes;
