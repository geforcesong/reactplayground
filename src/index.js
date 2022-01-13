import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
// import {createStore} from 'redux';
import { Provider } from "react-redux";
// import rootReducer from './reducers/rootReducer';
// const store = createStore(rootReducer);
import store from "./redux/store";

import "./index.scss"

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById("root")
);
