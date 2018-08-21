import React, { Component } from "react";
import "./App.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";

import Feedings from "./pages/feedings/index";
import ViewFeeding from "./pages/feedings/view";
import NewFeeding from "./pages/feedings/new";

import Sleeps from "./pages/sleeps/index";
import ViewSleep from "./pages/sleeps/view";
import NewSleep from "./pages/sleeps/new";

import Potties from "./pages/potties/index";
import ViewPotty from "./pages/potties/view";
import NewPotty from "./pages/potties/new";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/feedings" component={Feedings} />
          <Route exact path="/feedings/new" component={NewFeeding} />
          <Route exact path="/feedings/:id" component={ViewFeeding} />
          <Route exact path="/sleeps" component={Sleeps} />
          <Route exact path="/sleeps/new" component={NewSleep} />
          <Route exact path="/sleeps/:id" component={ViewSleep} />
          <Route exact path="/potties" component={Potties} />
          <Route exact path="/potties/new" component={NewPotty} />
          <Route exact path="/potties/:id" component={ViewPotty} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
