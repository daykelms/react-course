import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./index.css";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux"; // this will provide Redux store data to our  React components

const store = configureStore(); // if we pass the initial state here we are going to overrride the parameters that we use on the reducers
// The app will be able to access the store because it will be wrapped into the provider
render(
  <ReduxProvider store={store}> 
    <Router>
      {" "}
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("app")
);
