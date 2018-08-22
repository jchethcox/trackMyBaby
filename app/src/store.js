import { createStore, combineReducers, applyMiddleware } from "redux";

import { feedings, currentFeeding, newFeeding } from "./reducers/feedings";
import { sleeps, currentSleep, newSleep } from "./reducers/sleeps";
import { potties, currentPotty, newPotty } from "./reducers/potties";

import thunk from "redux-thunk";

import { fetching } from "./reducers/fetching";

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
    newSleep,
    fetching
  }),
  applyMiddleware(thunk)
);

export default store;
