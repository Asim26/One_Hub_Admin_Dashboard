import React from "react";
<<<<<<< HEAD
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Dashboard from "./components/Dashboard/Dashboard";
import Brands from './components/brands/Brands';
=======
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Dashboard from "./Components/Dashboard/Dashboard";
>>>>>>> 3cefcb85b7eabe983181aa7419f53b76e4efbd84

import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
<<<<<<< HEAD
          <Route path="/brands" exact component={Brands} />
=======
>>>>>>> 3cefcb85b7eabe983181aa7419f53b76e4efbd84
          <Route path="/Login" exact component={Login} />
          <Route path="/SignUp" exact component={SignUp} />
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
