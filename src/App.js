import React from "react";

import About from "./components/About";
import Detail from "./components/Detail";
import Home from "./components/Home";

import { Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Corporate from "./components/Corporate";

function App() {
  return (
    <div>
      <div className="app">
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/corporate" component={Corporate} />
          <Route path="/about" component={About} />
          <Route path="/product/:id" component={Detail} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
