import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "./components/Register/Register";
import Home from './components/Home/Home'
import Dashboard from './components/Profiles/Dashboard'
import Profiles from './components/Profiles/Profiles'
export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/register" component={Register} />
    <Route path="/myprofile" component={Dashboard} />

    {/* This will be edited to the specific profile accessed
      So '/something'*/}
    <Route path="/profiles" component={Profiles} />
  </Switch>
);  
