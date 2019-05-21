import React from "react";
import { Switch, Route } from "react-router-dom";
import ToolBox from "./components/ToolBox/ToolBox";
export default (
  <Switch>
    <Route exact path="/" component={ToolBox} />
  </Switch>
);
