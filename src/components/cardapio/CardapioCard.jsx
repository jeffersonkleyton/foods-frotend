import React, { useEffect, Component, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
  makeStyles,
  CardActions,
  Button,
} from "@material-ui/core";
import { addCesta } from "../../store/compraReducer/cesta";

import DialogAddItem from "./DialogAddItem";
import { useDispatch, useSelector } from "react-redux";

const styles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  container: {
    display: "flex",
    padding: "20px",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
  },
  buttonContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  card: {
    "@media (min-width:0px)": {
      maxWidth: "300px",
    },
  },
}));

export default (props) => {
  const estilo = styles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [pedido, setPedido] = useState({});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (param) => {
    setPedido(
      {
        item: props.titulo,
        adicionais: param.adicionais,
        molho: param.molho,
        quantidade: param.quantidade,
        valor: props.valor
  
      }
    );
    setOpen(false);
  };

  useEffect(() => {
    dispatch(addCesta(pedido));
  }, [pedido]);

  return (
    <Grid className={estilo.container}>
      <Card className={estilo.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="lanche 1"
            image="https://image.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg"
            title="foto"
          />
        </CardActionArea>

        <CardContent className={estilo.cardContent}>
          <Typography gutterBottom component="div">
            {props.titulo}
          </Typography>
          <Typography color="textSecondary" component="div">
            {props.descricao}
          </Typography>
          <CardActions className={estilo.buttonContent}></CardActions>
          <Button
            onClick={handleOpen}
            variant="outlined"
            style={{
              backgroundColor: "#0eae3b",
              color: "#fff",
              border: "none",
            }}
          >
            Adicionar a sacola
          </Button>
        </CardContent>
      </Card>

      <DialogAddItem handleClose={handleClose} abrir={open} a={props.index} />
    </Grid>
  );
};
