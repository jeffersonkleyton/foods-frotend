import { createSlice } from "@reduxjs/toolkit";
function objIsEmpty(obj) {
  for (let prop in obj) {
    return false;
  }
  return true;
}

const cestaSlicer = createSlice({
  name: "cesta",
  initialState: [],
  reducers: {
    addCesta(state, action) {
      if (!objIsEmpty(action.payload)) {
        return [...state, action.payload];
      }
    },
    removeItemCesta(state, action) {
      return state.filter((todo, i) => i !== action.payload);
    },
  },
});

export const { addCesta, removeItemCesta } = cestaSlicer.actions;
export default cestaSlicer.reducer;
