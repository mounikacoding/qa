import {
  Button,
  ControlLabel,
  FormControl,
  FormGroup,
  InputGroup
} from "react-bootstrap";
import React, { Component } from "react";

import Add from "./Add";
import { browserHistory } from "react-router";
import css from "../../public/css/main.scss";
import helper from "../utils/api";

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      showresult: false,
      data: []
    };

    this.getValue = this.getValue.bind(this);
    this.showResult = this.showResult.bind(this);
    this.searchParent = this.searchParent.bind(this);
  }

  getValue(event) {
    event.preventDefault();

    var data;

    for (var field in this.refs) {
      data = this.refs[field].value;

      console.log(data);
      this.refs[field].value = "";
    }

    helper
      .getQuestions(data)
      .then(
        function(res) {
          this.props.setParent(res.data);

          console.log(res.data.length);

          if (res.data.length <= 0) {
            this.props.found(true);
            console.log(this.state.data);
            this.props.setParent(this.state.data);
          }
        }.bind(this)
      )
      .catch(
        function(err) {
          console.log(err);
        }.bind(this)
      );
  }

  showResult() {
    if (this.state.showresult) {
      this.setState({ showresult: false });
    } else {
      this.setState({ showresult: true });
    }
  }

  componentDidMount() {
    //this.setState({data: this.props.results});
    console.log(this.props.results);
  }

  searchParent(data) {
    this.props.setParent(data);
    this.setState({ data: data });
  }

  render() {
    return (
      <div className="search">
        <div className="add">
          <button className="btn btn-primary new" onClick={this.showResult}>
            {this.state.showresult ? "Cancel" : "Add a Question"}
          </button>

          {this.state.showresult ? (
            <Add searchParent={this.searchParent} />
          ) : null}
        </div>
        <hr />
        <form className="form-inline form-search">
          <div className="form-group component-spacing">
            <label htmlFor="exampleInputName2" />
            <input
              type="text"
              className="form-control"
              id="search"
              placeholder="Question"
              ref="search"
            />
          </div>
          <span className="component-spacing">
            <button
              type="submit"
              className="btn btn-default"
              onClick={this.getValue}
            >
              Search
            </button>
          </span>
        </form>
      </div>
    );
  }
}

export default Search;
