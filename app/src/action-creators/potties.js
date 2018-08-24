import fetch from "isomorphic-fetch";
import {
  GET_POTTIES,
  GET_POTTY,
  NEW_POTTY_SAVE_SUCCEEDED,
  NEW_POTTY_SAVE_FAILED,
  NEW_POTTY_SAVE_STARTED
} from "../constants";

const url = process.env.REACT_APP_BASE_URL + "/potties";

export const getPotty = id => async (dispatch, getState) => {
  const potty = await fetch(url + "/" + id)
    .then(res => res.json())
    .catch(err => console.log(err));
  dispatch({ type: GET_POTTY, payload: potty });
};

export const getPotties = async (dispatch, getState) => {
  const potties = await fetch(url).then(res => res.json());
  dispatch({ type: GET_POTTIES, payload: potties });
};

export const addPotty = history => async (dispatch, getState) => {
  dispatch({ type: NEW_POTTY_SAVE_STARTED });
  const result = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(getState().newPotty.data)
  })
    .then(res => res.json())
    .catch(err => dispatch({ type: NEW_POTTY_SAVE_FAILED }));
  if (result.ok) {
    dispatch({ type: NEW_POTTY_SAVE_SUCCEEDED });
    getPotties(dispatch, getState);
    // history.w("/potties");
  } else {
    dispatch({ type: NEW_POTTY_SAVE_FAILED });
  }
};
