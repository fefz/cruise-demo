import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./redux/store";
import CruiseBox from "./containers";
import reportWebVitals from './reportWebVitals';
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "./images/ASSETS/font icons/fonts.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CruiseBox />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
