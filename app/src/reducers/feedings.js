import {
  GET_FEEDINGS,
  GET_FEEDING,
  NEW_FEEDING_SAVE_FAILED,
  NEW_FEEDING_SAVE_STARTED,
  NEW_FEEDING_SAVE_SUCCEEDED,
  NEW_FEEDING_FORM_UPDATED,
  NEW_FEEDING_CLEARED
} from "../constants";

import { merge, mergeDeepRight } from "ramda";

export const feedings = (state = [], action) => {
  switch (action.type) {
    case GET_FEEDINGS:
      return action.payload;
    default:
      return state;
  }
};

const initialCurrentFeeding = {
  type: "",
  milkAmount: "",
  formulaAmount: "",
  feedingRating: "",
  duration: "",
  dateTime: ""
};

export const currentFeeding = (state = initialCurrentFeeding, action) => {
  switch (action.type) {
    case GET_FEEDING:
      return action.payload;
    default:
      return state;
  }
};

const initialNewFeeding = {
  data: {
    type: "",
    milkAmount: "",
    formulaAmount: "",
    feedingRating: "",
    duration: "",
    dateTime: ""
  },
  isError: false,
  isSaving: false,
  errMessage: ""
};

export const newFeeding = (state = initialNewFeeding, action) => {
  switch (action.type) {
    case NEW_FEEDING_SAVE_FAILED:
      return merge(state, {
        isError: true,
        errMessage: "Failed to save new feeding to database",
        isSaving: false
      });
    case NEW_FEEDING_SAVE_STARTED:
      return merge(state, { isSaving: true, isError: false, errMessage: "" });
    case NEW_FEEDING_SAVE_SUCCEEDED:
      return initialNewFeeding;
    case NEW_FEEDING_FORM_UPDATED:
      return mergeDeepRight(state, { data: action.payload });
    case NEW_FEEDING_CLEARED:
      return initialNewFeeding;
    default:
      return state;
  }
};
