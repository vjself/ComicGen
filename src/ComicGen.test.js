import React from "react";
import ReactDOM from "react-dom";
import ComicGen from "./ComicGen";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ComicGen />, div);
  ReactDOM.unmountComponentAtNode(div);
});
