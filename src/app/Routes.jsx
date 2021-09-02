import React from "react";
import { Route } from "react-router-dom";
import Cardapio from "../components/cardapio/Main";
import Login from "../components/login/Main";
import Dash from "../components/Dashboard/Main";
import Home from '../components/Home'

const Routes = () => {
  return (
    <>
      <Route component={Cardapio} path="/" exact />
      <Route component={Home} path="/home" />
      <Route component={Dash} path="/dashboard" />
      <Route component={Login} path='/login' />
    </>
  );
};

export default Routes;
