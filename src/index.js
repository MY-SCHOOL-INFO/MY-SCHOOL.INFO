import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Header from "../src/layouts/Header";
import Main from "../src/components/Main";
import About from "../src/components/About";
import TimeTable_Loading from "./components/TimeTable";
import NotFound from "../src/components/NotFound";

import "../src/css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/about" component={About} />
      <Route path="/timetable/:schoolName" component={TimeTable_Loading} />
      <Route component={NotFound} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
