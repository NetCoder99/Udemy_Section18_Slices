import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reduxStore from './store/reduxStore';

import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
