import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "./components/Register/Register";
import Home from './components/Home/Home'
export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/register" component={Register} />
  </Switch>
);
