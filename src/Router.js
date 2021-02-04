import React from "react";
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Dashboard from "./Components/Dashboard/Dashboard";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Products from "./Components/Products/Products";
import Orders from "./Components/Orders/Orders";
import CreateProduct from "./Components/Products/CreateProduct";
import EditProduct from "./Components/Products/EditProduct";

export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/Login" exact component={Login} />
          <Route path="/SignUp" exact component={SignUp} />
          <Route path="/products" exact component={Products} />
          <Route path="/orders" exact component={Orders} />
          <Route path="/CreateProduct" exact component={CreateProduct} />
          <Route path="/EditProduct" exact component={EditProduct} />
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
