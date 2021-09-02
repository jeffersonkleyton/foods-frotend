import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = [];

export const addCesta = createAction("ADD_CESTA");

function objIsEmpty(obj) {
  for (let prop in obj) {
    return false;
  }
  return true;
}

export default createReducer(INITIAL_STATE, {
  [addCesta.type]: (state, action) => {
    if (!objIsEmpty(action.payload)) {
      return [...state, action.payload];
    }
  },
});
