// Libs
import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

// Utils
import _ from 'lodash';

// Constants
const initModel = {
  value: 0,
};

// Counter component
function Counter(model: { value: number }) {
  return (
    <div>
      <div className={"mv2"}>Count: {model.value}</div>
      <button
        className={"pv1 ph2 mr2"}
        onClick={() => console.log("+ clicked!")}
      >
        +
      </button>
      <button className={"pv1 ph2"} onClick={() => console.log("- clicked!")}>
        -
      </button>
    </div>
  );
}

// Update counter
function update(msg: string, value: number) {
  return msg === "plus" ? value + 1
    : msg === "minus" ? value - 1
    : value;
}

// IMPURE CODE BELOW
function app(initModel: any, update: any, view: any, node: any) {
  let model = initModel;
  let currentView = view(model);
  ReactDOM.render(currentView, rootNode);
}

const rootNode = document.getElementById('root');

// Show the app
app(initModel, update, Counter, rootNode);


