import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "typeface-roboto";
import store from "./store";
import { Provider } from "react-redux";

import { setSleeps, getSleep } from "./action-creators/sleeps";
import { setPotties, getPotty } from "./action-creators/potties";
import { setFeedings, getFeeding } from "./action-creators/feedings";

ReactDOM.render(
  <Provider store={store}>
    <App dispatch={store.dispatch} />
  </Provider>,
  document.getElementById("root")
);

store.dispatch(setSleeps);
store.dispatch(getSleep);
store.dispatch(setPotties);
store.dispatch(getPotty);
store.dispatch(setFeedings);
store.dispatch(getFeeding);
