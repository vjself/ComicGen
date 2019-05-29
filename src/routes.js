import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "./components/Register/Register";
import Home from './components/Home/Home'
import Landing from './components/Landing/Landing'
import Community from  './components/Community/Community'

import Dashboard from './components/Profiles/Dashboard'


export default (
  <Switch>
    <Route exact path="/home" component={Home} />
    <Route path="/register" component={Register} />

    <Route path="/feed" component={Community} />

    <Route path="/myprofile" component={Dashboard} />
    <Route path="/" component={Landing} />


  </Switch>
);  
