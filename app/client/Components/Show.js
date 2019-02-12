import {
  Button,
  Card,
  FormControl,
  FormGroup,
  InputGroup
} from "react-bootstrap";
import React, { Component } from "react";

import { browserHistory } from "react-router";
import css from "../../public/css/main.scss";
import helper from "../utils/api";

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showresult: false,
      questions: [],
      answers: [],
      questionId: props.match.params.id
    };
    this.handleLike = this.handleLike.bind(this);
  }

  componentDidMount() {
    helper
      .getQuestion(this.props.match.params.id)
      .then(
        function(data) {
          this.setState({ questions: data.data });
          //console.log(this.state.data);
        }.bind(this)
      )
      .catch(
        function(err) {
          console.log(err);
        }.bind(this)
      );
    helper
      .getAnswers(this.props.match.params.id)
      .then(
        function(data) {
          this.setState({ answers: data.data });
          //console.log(this.state.data);
        }.bind(this)
      )
      .catch(
        function(err) {
          console.log(err);
        }.bind(this)
      );
  }

  handleLike(answerId) {
    if (answerId) {
      console.log(answerId);
      helper.likeAnswer(answerId).then(this.props.getData);
      this.setState({ inputValue: "" });
      window.location.reload();
      // window.location.href = "/";
    }
  }

  render() {
    console.log("ShowShowShowShowShowShowShow");
    console.log(this.props);
    const qn = this.state.questions[0];
    console.log(qn);
    const answers = this.state.answers;
    console.log(answers);
    const answersComponent = answers.map((answer, i) => (
      <div key={i} className="answer-box">
        <table>
          <tr>
            <td className="answer-col">
              <div className="answer-answeredby-col">{answer.answeredBy}:</div>
              <div className="answer-answer-col">{answer.answer}</div>
              <div className="answer-supporting-col">{answer.supporting}</div>
            </td>
            <td className="likes-col">
              <div>{answer.likes} likes</div>
            </td>
            <td className="like-btn-col">
              <div>
                <Button
                  type="submit"
                  className="btn btn-success"
                  onClick={() => {
                    this.handleLike(answer.id);
                  }}
                >
                  Like
                </Button>
              </div>
            </td>
          </tr>
        </table>
      </div>
    ));
    return (
      <div>
        {qn ? (
          <span>
            <div className="question">{qn.question}</div>
            <div className="description">{qn.description}</div>
            <div className="answers">{answersComponent}</div>
          </span>
        ) : null}
      </div>
    );
  }
}

export default Show;
