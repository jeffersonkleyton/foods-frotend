import {configureStore} from '@reduxjs/toolkit'
import cardapioSlicer from './cardapioReducer/cardapio'
import cestaReducer from './compraReducer/cesta'


export default configureStore({
    reducer: {
        cardapio: cardapioSlicer,
        cesta: cestaReducer,
    }
})
