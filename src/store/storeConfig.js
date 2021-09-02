import {configureStore} from '@reduxjs/toolkit'
import cardapioReducer from './cardapioReducer/cardapio'
import todoSlice from './compraReducer/cesta'


export default configureStore({
    reducer: {
        cardapio: cardapioReducer,
        cesta: todoSlice,
    }
})
