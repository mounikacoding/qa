import { Button, FormControl, FormGroup, InputGroup } from "react-bootstrap";
import React, { Component } from "react";

import { browserHistory } from "react-router";
import css from "../../public/css/main.scss";
import helper from "../utils/api";

class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showresult: false,
      data: [],
      questionId: props.match.params.id,
      answeredBy: "",
      answer: "",
      supporting: ""
    };
    this.handleInputChangeAnsweredBy = this.handleInputChangeAnsweredBy.bind(
      this
    );
    this.handleInputChangeAnswer = this.handleInputChangeAnswer.bind(this);
    this.handleInputChangeSupporting = this.handleInputChangeSupporting.bind(
      this
    );
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChangeAnsweredBy(event) {
    console.log(this.state);
    this.setState({ answeredBy: event.target.value });
  }

  handleInputChangeAnswer(event) {
    console.log(this.state);
    this.setState({ answer: event.target.value });
  }

  handleInputChangeSupporting(event) {
    console.log(this.state);
    this.setState({ supporting: event.target.value });
  }

  handleSubmit(event) {
    if (
      this.state.questionId &&
      this.state.answeredBy &&
      this.state.answer &&
      this.state.questionId
    ) {
      const newAnswer = {
        answeredBy: this.state.answeredBy,
        answer: this.state.answer,
        supporting: this.state.supporting,
        questionId: this.state.questionId
      };
      console.log(newAnswer);
      helper.saveAnswer(newAnswer).then(this.props.getData);
      this.setState({ inputValue: "" });
      // window.location.reload();
      window.location.href = "/";
    }
  }

  componentDidMount() {
    helper
      .getQuestion(this.props.match.params.id)
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
    console.log("AnswerAnswerAnswerAnswerAnswerAnswer");
    // console.log(this.props);
    // console.log(this.state.data[0]);
    const qn = this.state.data[0];
    console.log(qn);
    // console.log(qn.question);
    // console.log(qn.description);
    return (
      <div className="container">
        {qn ? (
          <span>
            <div className="question">{qn.question}</div>
            <div className="description">{qn.description}</div>
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon className="label-component">
                  Name:
                </InputGroup.Addon>
                <span className="input-spacing">
                  <FormControl
                    className="input-spacing"
                    type="text"
                    onChange={this.handleInputChangeAnsweredBy}
                    value={this.state.inputValue}
                    placeholder="Answered By"
                  />
                </span>
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon className="label-component">
                  Your Answer:
                </InputGroup.Addon>
                <span className="input-spacing">
                  <FormControl
                    className="input-spacing"
                    type="text"
                    onChange={this.handleInputChangeAnswer}
                    value={this.state.inputValue}
                    placeholder="Answer"
                  />
                </span>
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon className="label-component">
                  Supporting details for your answer (optional)
                </InputGroup.Addon>
                <span className="input-spacing">
                  <FormControl
                    className="input-spacing"
                    type="text"
                    onChange={this.handleInputChangeSupporting}
                    value={this.state.inputValue}
                    placeholder="Supporting details"
                  />
                </span>
              </InputGroup>
            </FormGroup>
            <Button
              type="submit"
              className="btn btn-success button"
              onClick={this.handleSubmit}
            >
              Add
            </Button>
            <Button
              type="submit"
              className="btn btn-secondary button"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Cancel
            </Button>
          </span>
        ) : null}
      </div>
    );
  }
}

export default Answer;
