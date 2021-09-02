import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import Categorias from './Categorias'

const style = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: '150px',
    color: "#fff"
  },
  cards: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: 'wrap'
  }
}));

export default () => {
  const estilo = style();
  return (
    <Box className={estilo.container}>
        <Categorias />
    </Box>
  );
};
