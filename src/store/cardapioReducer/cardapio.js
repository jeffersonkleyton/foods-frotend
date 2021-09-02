import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = [];

export const getCardapio = createAction("GET_CARDAPIO");

export default createReducer(INITIAL_STATE, {
  [getCardapio.type]: (state, action) => {
    return  [...action.payload];
  },
});
