import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "typeface-roboto";
import store from "./store";
import { Provider } from "react-redux";

import { getSleeps, getSleep } from "./action-creators/sleeps";
import { getPotties, getPotty } from "./action-creators/potties";
import { getFeedings, getFeeding } from "./action-creators/feedings";

ReactDOM.render(
  <Provider store={store}>
    <App dispatch={store.dispatch} />
  </Provider>,
  document.getElementById("root")
);

// store.dispatch(getSleeps);
// store.dispatch(getSleep);
// store.dispatch(getPotties);
// store.dispatch(getPotty);
// store.dispatch(getFeedings);
// store.dispatch(getFeeding);
