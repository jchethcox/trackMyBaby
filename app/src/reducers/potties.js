import {
  GET_POTTIES,
  GET_POTTY,
  NEW_POTTY_SAVE_FAILED,
  NEW_POTTY_SAVE_STARTED,
  NEW_POTTY_SAVE_SUCCEEDED,
  NEW_POTTY_FORM_UPDATED,
  NEW_POTTY_CLEARED
} from "../constants";

import { merge, mergeDeepRight } from "ramda";

export const potties = (state = [], action) => {
  switch (action.type) {
    case GET_POTTIES:
      return action.payload;
    default:
      return state;
  }
};

const initialCurrentPotty = {
  type: "",
  did1: "",
  size2: "",
  dateTime: ""
};

export const currentPotty = (state = initialCurrentPotty, action) => {
  switch (action.type) {
    case GET_POTTY:
      return action.payload;
    default:
      return state;
  }
};

const initialNewPotty = {
  data: {
    type: "",
    did1: "",
    size2: "",
    dateTime: ""
  },
  isError: false,
  isSaving: false,
  errMessage: ""
};

export const newPotty = (state = initialNewPotty, action) => {
  switch (action.type) {
    case NEW_POTTY_SAVE_FAILED:
      return merge(state, {
        isError: true,
        errMessage: "Failed to save new potty to database",
        isSaving: false
      });
    case NEW_POTTY_SAVE_STARTED:
      return merge(state, { isSaving: true, isError: false, errMessage: "" });
    case NEW_POTTY_SAVE_SUCCEEDED:
      return initialNewPotty;
    case NEW_POTTY_FORM_UPDATED:
      return mergeDeepRight(state, { data: action.payload });
    case NEW_POTTY_CLEARED:
      return initialNewPotty;
    default:
      return state;
  }
};
