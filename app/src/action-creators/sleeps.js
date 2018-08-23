import fetch from "isomorphic-fetch";
import {
  GET_SLEEPS,
  GET_SLEEP,
  NEW_SLEEP_SAVE_SUCCEEDED,
  NEW_SLEEP_SAVE_FAILED,
  NEW_SLEEP_SAVE_STARTED
} from "../constants";

const url = process.env.REACT_APP_BASE_URL + "/sleeps";

export const getSleep = id => async (dispatch, getState) => {
  const sleep = await (url + "/" + id)
    .then(res => res.json())
    .catch(err => console.log(err));
  dispatch({ type: GET_SLEEP, payload: sleep });
};

export const getSleeps = async (dispatch, getState) => {
  const sleeps = await fetch(url).then(res => {
    console.log(res);
    res.json();
  });
  dispatch({ type: GET_SLEEPS, payload: sleeps });
};

export const addSleep = history => async (dispatch, getState) => {
  dispatch({ type: NEW_SLEEP_SAVE_STARTED });
  const result = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(getState().newSleep.data)
  })
    .then(res => res.json)
    .catch(err => dispatch({ type: NEW_SLEEP_SAVE_FAILED }));
  if (result.ok) {
    dispatch({ type: NEW_SLEEP_SAVE_SUCCEEDED });
    getSleeps(dispatch, getState);
    history.push("/sleeps");
  } else {
    dispatch({ type: NEW_SLEEP_SAVE_FAILED });
  }
};
