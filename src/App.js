import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'fontsource-roboto';

import NavBar from "./components/navbar.js";
import MapContainer from "./components/Map.js";
import Dashboard from "./components/Dashboard.js";

function App() {
  const [ selected, setSelected ] = useState({});


  return (<BrowserRouter>
  <NavBar selected={selected} setSelected={setSelected} />
  <main>
    <Switch>
      <Route exact path="/">
        <MapContainer selected={selected} setSelected={setSelected} />
      </Route>
      <Route exact path="/account">
        <Dashboard />
      </Route>
    </Switch>
  </main>
  </BrowserRouter>
  );
}

export default App;
