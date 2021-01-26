import React from "react";
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Dashboard from "./components/Dashboard/Dashboard";
import Brands from './components/brands/Brands';

import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/brands" exact component={Brands} />
          <Route path="/Login" exact component={Login} />
          <Route path="/SignUp" exact component={SignUp} />
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
