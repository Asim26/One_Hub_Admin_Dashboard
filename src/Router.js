import React from "react";
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Dashboard from "./Components/Dashboard/Dashboard";

import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/Login" exact component={Login} />
          <Route path="/SignUp" exact component={SignUp} />
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
