import { createSlice } from '@reduxjs/toolkit'


const cardapioSlicer = createSlice({
  name: 'cardapio',
  initialState: [],
  reducers: {
    getCardapio(state, action) {
      return [...action.payload]
    },
  },
})

export const { getCardapio } = cardapioSlicer.actions
export default cardapioSlicer.reducer