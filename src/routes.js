import React from "react";
import { Switch, Route } from "react-router-dom";
<<<<<<< HEAD
import Home from "./components/Home/Home";
export default (
  <Switch>
    <Route exact path="/" component={Home} />
=======
import ToolBox from "./components/ToolBox/ToolBox";
// import Comic from "./components/Comic/Comic"
export default (
  <Switch>
    <Route exact path="/" component={ToolBox} />
    {/* <Route exact path="/" component={Comic} /> */}
>>>>>>> wired-display
  </Switch>
); 
