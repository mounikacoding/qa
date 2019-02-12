import { Button, FormControl, FormGroup, InputGroup } from "react-bootstrap";
import React, { Component } from "react";

import { browserHistory } from "react-router";
import css from "../../public/css/main.scss";
import helper from "../utils/api";

class Add extends Component {
  constructor() {
    super();
    this.state = {
      question: "",
      description: ""
    };
    this.handleInputChangeQuestion = this.handleInputChangeQuestion.bind(this);
    this.handleInputChangeDesc = this.handleInputChangeDesc.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChangeQuestion(event) {
    console.log(this.state);
    this.setState({ question: event.target.value });
  }

  handleInputChangeDesc(event) {
    console.log(this.state);
    this.setState({ description: event.target.value });
  }

  handleSubmit(event) {
    const newQuestion = {
      question: this.state.question,
      description: this.state.description
    };
    console.log(newQuestion);
    helper.saveQuestion(newQuestion).then(this.props.getData);
    this.setState({ inputValue: "" });
    window.location.reload();
  }

  render() {
    return (
      <div className="container">
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon className="label-component">
              Question
            </InputGroup.Addon>
            <span className="input-spacing">
              <FormControl
                className="input-spacing"
                type="text"
                onChange={this.handleInputChangeQuestion}
                value={this.state.inputValue}
                placeholder="Question"
              />
            </span>
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon className="label-component">
              Description (optional)
            </InputGroup.Addon>
            <span className="input-spacing">
              <FormControl
                className="input-spacing"
                type="text"
                onChange={this.handleInputChangeDesc}
                value={this.state.inputValue}
                placeholder="Description"
              />
            </span>
          </InputGroup>
        </FormGroup>
        <Button
          type="submit"
          className="btn btn-success"
          onClick={this.handleSubmit}
        >
          Add
        </Button>
      </div>
    );
  }
}

export default Add;
