import { createStore, combineReducers, applyMiddleware } from "redux";

import { feedings, currentFeeding, newFeeding } from "./reducers/feedings";
import { sleeps, currentSleep, newSleep } from "./reducers/sleeps";
import { potties, currentPotty, newPotty } from "./reducers/potties";

import thunk from "redux-thunk";

const store = createStore(
  combineReducers({
    feedings,
    currentFeeding,
    newFeeding,
    potties,
    currentPotty,
    newPotty,
    sleeps,
    currentSleep,
    newSleep
  }),
  applyMiddleware(thunk)
);

export default store;
