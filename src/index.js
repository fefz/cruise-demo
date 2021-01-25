import React from 'react';
import ReactDOM from 'react-dom';
import CruiseBox from "./containers";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "./images/ASSETS/font icons/fonts.css";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <CruiseBox />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
