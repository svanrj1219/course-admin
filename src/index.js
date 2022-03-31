import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Router from "./router/router";
import store from "./store";
import reportWebVitals from "./reportWebVitals";
import Toast from "./components/Toast";
import "reset-css";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Toast></Toast>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
