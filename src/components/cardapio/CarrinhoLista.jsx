import React from "react";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemIcon,
  Button
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { RemoveItemPedido } from '../../store/fatchActions'
import { useSelector, useDispatch } from "react-redux";


export default (props) => {
  const dispatch = useDispatch()
  function Remover(params) {
    alert('passou aqui')
    dispatch(RemoveItemPedido(params))
  }
  return (
    <List>
      <ListItem>
        <ListItemText primary={props.item} secondary={props.valor} />
        <ListItemIcon>
          <Button>
            <Delete onClick={() => Remover(props.index) } />
          </Button>
        </ListItemIcon>
      </ListItem>
      <Divider />
    </List>
  );
};
