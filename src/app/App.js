import React from "react";
import Rotas from "./Routes";
import { HashRouter } from "react-router-dom"
import {io} from 'socket.io-client'

function App() {
  
  return (
    <HashRouter>
      <Rotas />
    </HashRouter>
  );
}

export default App;
