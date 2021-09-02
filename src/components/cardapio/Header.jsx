import React from "react";
import {
  Box,
  makeStyles,
  AppBar,
  Toolbar,
  useScrollTrigger,
  Slide,
  Avatar,
  Button,
} from "@material-ui/core";
import PropTypes from "prop-types";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LocalPizzaIcon from "@material-ui/icons/LocalPizza";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import FastfoodOutlinedIcon from "@material-ui/icons/FastfoodOutlined";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    "aria-controls": `scrollable-prevent-tabpanel-${index}`,
  };
}

const style = makeStyles((theme) => ({
  containerTitle: {
    "@media (min-width: 0px)": {
      height: "150px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  titulo: {
    fontSize: "1.7rem",
    color: "#fff",
    fontWeight: "bold",
  },
}));

{
  /**  <HideOnScroll {...props}>
    </HideOnScroll> */
}
export default (props) => {
  const estilo = style();
  return (
    <AppBar>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          marginTop: "20px",
        }}
      >
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around ",
            color: "#fff",
            width: "100vw",
          }}
        >
          <Button style={{ color: "#fff" }}>
            <ArrowBackIosOutlinedIcon />
          </Button>
          <Avatar
            style={{ width: "100px", height: "100px" }}
            alt="Remy Sharp"
            src="https://www.designevo.com/res/templates/thumb_small/separated-brown-burger.webp"
          />
          <Button style={{ color: "#fff" }} onClick={props.handleOpen}>
            <span className="material-icons">receipt</span>
          </Button>
        </Box>

        <Toolbar className={estilo.containerTitle}>
          <span className={estilo.titulo}>Lanchonete Avalanche</span>
          <span
            style={{ color: "#fff", fontSize: "1.2rem", marginBottom: "5px" }}
          >
            Cardápio
          </span>
          <span>{("id: ", props.code)}</span>
          <span>{("id: ", props.status)}</span>

          <Box>
            <Tabs
              value={props.valor}
              onChange={props.change}
              variant="scrollable"
              scrollButtons="on"
            >
              <Tab
                label="Hamburguer"
                icon={<FastfoodIcon />}
                {...a11yProps(0)}
              />
              <Tab label="Pizza" icon={<LocalPizzaIcon />} {...a11yProps(1)} />
              <Tab label="Bebidas" icon={<LocalBarIcon />} {...a11yProps(2)} />
              <Tab
                label="Combos"
                icon={<FastfoodOutlinedIcon />}
                {...a11yProps(3)}
              />
            </Tabs>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};
