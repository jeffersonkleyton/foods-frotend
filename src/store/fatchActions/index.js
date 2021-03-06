import axios from "axios";
import { getCardapio } from "../cardapioReducer/cardapio";
import { addCesta, removeItemCesta } from "../compraReducer/cesta";



export const getCardapioAxios = () => {
  return async(dispatch) => {
    await axios.get("http://localhost:4000/item")
      .then((result) => {
        dispatch(getCardapio(result.data));
      })
      .catch(console.log());
  };
};

export const addItemCesta = (cesta) => {
  return async(dispatch) => {
      await dispatch(addCesta(cesta))
  }
}

export const RemoveItemPedido = (param) => {
  return async(dispatch) => {
      await dispatch(removeItemCesta(param))
  }
}