import React from "react";
import {List, ListItem, Divider, ListItemText} from '@material-ui/core'

export default (props) => {
  return (
    <List>
      <ListItem button>
        <ListItemText primary={props.item} secondary={props.valor} />
      </ListItem>
      <Divider />
      
    </List>
  );
};
