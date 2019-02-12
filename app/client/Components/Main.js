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
import React, { Component } from "react";

import Add from "./Add";
import Search from "./Search";
import TableQuestions from "./Table";
import { browserHistory } from "react-router";
import css from "../../public/css/main.scss";
import helper from "../utils/api";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      noresult: false
    };

    this.setParent = this.setParent.bind(this);
    this.found = this.found.bind(this);
  }

  setParent(response) {
    this.setState({ data: response });
    //console.log(response);
  }

  found(data) {
    this.setState({ noresult: true });
  }

  componentDidMount() {
    helper
      .getData()
      .then(
        function(data) {
          this.setState({ data: data.data });
          //console.log(this.state.data);
        }.bind(this)
      )
      .catch(
        function(err) {
          console.log(err);
        }.bind(this)
      );
  }

  render() {
    return (
      <div className="container">
        <Search
          setParent={this.setParent}
          found={this.found}
          results={this.state.data}
        />
        <hr />
        <TableQuestions
          results={this.state.data}
          setParent={this.setParent}
          status={this.state.noresult}
        />
        <br />
      </div>
    );
  }
}

export default Main;
