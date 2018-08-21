import {
  SET_SLEEPS,
  GET_SLEEP,
  NEW_SLEEP_SAVE_FAILED,
  NEW_SLEEP_SAVE_STARTED,
  NEW_SLEEP_SAVE_SUCCEEDED,
  NEW_SLEEP_FORM_UPDATED,
  NEW_SLEEP_CLEARED
} from "../constants";

import { merge, mergeDeepRight } from "ramda";

export const sleeps = (state = [], action) => {
  switch (action.type) {
    case SET_SLEEPS:
      return action.payload;
    default:
      return state;
  }
};

const initialCurrentSleep = {
  duration: "",
  sleepRating: "",
  dateTime: ""
};

export const currentSleep = (state = initialCurrentSleep, action) => {
  switch (action.type) {
    case GET_SLEEP:
      return action.payload;
    default:
      return state;
  }
};

const initialNewSleep = {
  data: {
    duration: "",
    sleepRating: "",
    dateTime: ""
  },
  isError: false,
  isSaving: false,
  errMessage: ""
};

export const newSleep = (state = initialNewSleep, action) => {
  switch (action.type) {
    case NEW_SLEEP_SAVE_FAILED:
      return merge(state, {
        isError: true,
        errMessage: "Failed to save new sleep to database",
        isSaving: false
      });
    case NEW_SLEEP_SAVE_STARTED:
      return merge(state, { isSaving: true, isError: false, errMessage: "" });
    case NEW_SLEEP_SAVE_SUCCEEDED:
      return initialNewSleep;
    case NEW_SLEEP_FORM_UPDATED:
      return mergeDeepRight(state, { data: action.payload });
    case NEW_SLEEP_CLEARED:
      return initialNewSleep;
    default:
      return state;
  }
};
