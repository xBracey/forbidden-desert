import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";

export const helloWorld = () => {
  const app = document.querySelector("#react");

  ReactDOM.render(React.createElement(App, {}), app);
};

helloWorld();
