import React from "react";
import { makeStyles, Box, Button, AppBar, Toolbar } from "@material-ui/core";

const estilo = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  toobarContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}));

export default () => {
  const style = estilo();
  return (
    <Box>
      <AppBar>
        <Toolbar className={style.toobarContainer}>
          <Box style={{fontSize: '1.5rem'}}>Home</Box>
          <Button style={{color: '#fff'}}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
