import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles, List } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Header from "./Header";
import NotaFiscal from "./Nota";
import axios from "axios";
import { url } from "../../global";
import CardapioCard from "./CardapioCard";
import { useSelector, useDispatch } from "react-redux";
import { getCardapioAxios } from "../../store/fatchActions/index";
import { io } from "socket.io-client";
import DialogAddItem from "./DialogAddItem";

const socket = io("http://localhost:4000/");
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  cards: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: "100px",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function Categorias(props) {
  const classes = useStyles();
  const [openNota, setOpenNota] = React.useState(false);

  const [value, setValue] = React.useState(0);
  const [code, setCode] = React.useState(0);
  const [status, setStatus] = React.useState("");

  const handleClickOpenNota = () => {
    setOpenNota(true);
  };

  const handleCloseNota = () => {
    setOpenNota(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCardapioAxios());
    socket.on("code", (code) => setCode(code));
    socket.on("status", (msg) => setStatus(msg));
  }, [dispatch]);

  const cardapio = useSelector((state) => state.cardapio);

  return (
    <Box className={classes.root}>
      <Header
        valor={value}
        change={handleChange}
        handleOpen={handleClickOpenNota}
        code={code}
        status={status}
      />
      <TabPanel value={value} index={0}>
        <Box className={classes.cards}>
          {cardapio.map((card, idx) => {
            return (
                <CardapioCard
                key={idx}
                  code={code}
                  titulo={card.item}
                  valor={card.valor}
                  index={idx}
                />
            );
          })}
        </Box>
      </TabPanel>
      <NotaFiscal abrirNota={openNota} closeNota={handleCloseNota} />
    </Box>
  );
}
