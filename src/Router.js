import React from "react";
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Dashboard from "./components/Dashboard/Dashboard";
import Brands from './components/brands/Brands';
import CreateBrands from './components/brands/createBrand/CreateBrand';
import EditBrand from './components/brands/editBrand/EditBrand';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/brands" exact render ={()=>(<Header><Brands/></Header>)} />
          <Route path="/createbrand" exact render ={()=>(<Header><CreateBrands/></Header>)} />
          <Route path = '/editbrands' exact render = {()=> (<Header><EditBrand/></Header>)}></Route>
          <Route path="/Login" exact component={Login} />
          <Route path="/SignUp" exact component={SignUp} />
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
