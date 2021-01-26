import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";

import { BrowserRouter, Route, Switch, Router, Link } from "react-router-dom";

function App() {
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

export default App;
