import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  TextField,
  Button,
  Paper,
} from "@material-ui/core";
import Header from "./Header";

export default () => {
  return (
    <Grid>
      <Header />
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Paper elevation={3}>
          <Card
            style={{
              width: "300px",
              height: "220px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column"
            }}
          >
            <CardContent
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <TextField label="Usuário" style={{ marginBottom: "20px" }} />
              <TextField label="Senha" />
            </CardContent>
            <CardActions
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                variant="outlined"
                style={{
                  backgroundColor: "#0eae3b",
                  color: "#fff",
                  border: "none",
                }}
              >
                Entrar
              </Button>
            </CardActions>
          </Card>
        </Paper>
      </Box>
    </Grid>
  );
};
