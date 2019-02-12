import React, { Component } from "react";

import { Table } from "react-bootstrap";
import { browserHistory } from "react-router";
import css from "../../public/css/main.scss";
import helper from "../utils/api.js";

var moment = require("moment");

class TableQuestions extends Component {
  render() {
    return (
      <div className="container">
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Question</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.results.map(({ question, description, id }) => (
              <tr key={id}>
                <td>{question}</td>
                <td>{description}</td>
                <td>
                  <a className="component-spacing" href={"show/" + id}>
                    Show
                  </a>
                  <a className="component-spacing" href={"answer/" + id}>
                    Answer
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default TableQuestions;
