import { createGlobalStyle } from "styled-components";

import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import WeatherApp from "./WeatherApp";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    background-color: #00b4d8;
  }

  body {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    overflow: hidden auto;
  }

  #root {
    display: flex;
    justify-content: center;
    flex: 1;
    height: 100%;
    width: 100%;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <WeatherApp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
