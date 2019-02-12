import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  Button,
  Col,
  ControlLabel,
  FormControl,
  FormGroup,
  Grid,
  Jumbotron,
  Row,
  Table
} from "react-bootstrap";

import Answer from "../Components/Answer";
import Main from "../Components/Main";
import React from "react";
import Show from "../Components/Show";

const Routes = (
  <div className="container">
    <Jumbotron>
      <h1>Question & Answer</h1>
    </Jumbotron>
    <hr />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/answer/:id" render={props => <Answer {...props} />} />
        <Route path="/show/:id" render={props => <Show {...props} />} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Routes;
