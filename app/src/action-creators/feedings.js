import fetch from "isomorphic-fetch";
import {
  GET_FEEDINGS,
  GET_FEEDING,
  NEW_FEEDING_SAVE_FAILED,
  NEW_FEEDING_SAVE_STARTED,
  NEW_FEEDING_SAVE_SUCCEEDED
} from "../constants";

const url = process.env.REACT_APP_BASE_URL + "/feedings";

export const getFeeding = id => async (dispatch, getState) => {
  const feeding = await fetch(url + "/" + id)
    .then(res => res.json())
    .catch(err => console.log(err));
  dispatch({ type: GET_FEEDING, payload: feeding });
};

export const getFeedings = async (dispatch, getState) => {
  const feedings = await fetch(url).then(res => res.json());
  console.log(feedings);
  dispatch({ type: GET_FEEDINGS, payload: feedings });
};

export const addFeeding = history => async (dispatch, getState) => {
  dispatch({ type: NEW_FEEDING_SAVE_STARTED });
  const result = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(getState().newFeeding.data)
  })
    .then(res => res.json())
    .catch(err => dispatch({ type: NEW_FEEDING_SAVE_FAILED }));
  if (result.ok) {
    dispatch({ type: NEW_FEEDING_SAVE_SUCCEEDED });
    getFeedings(dispatch, getState);
    history.push("/feedings");
  } else {
    dispatch({ type: NEW_FEEDING_SAVE_FAILED });
  }
};
