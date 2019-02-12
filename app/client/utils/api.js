var axios = require("axios");
var helper = {
  saveQuestion: function(data) {
    return axios
      .post("/question", data)
      .then(function(response) {
        return response;
      })
      .catch(function(err) {
        return err;
      });
  },

  saveAnswer: function(data) {
    return axios
      .post("/answer", data)
      .then(function(response) {
        return response;
      })
      .catch(function(err) {
        return err;
      });
  },

  likeAnswer: function(id) {
    return axios.get("/api/answer/like/" + id);
  },

  getData: function() {
    return axios.get("/api");
  },

  getQuestion: function(id) {
    return axios.get("/api/question/" + id);
  },

  getQuestions: function(search) {
    return axios
      .get("/api/" + search)
      .then(function(res) {
        return res;
      })
      .catch(function(err) {
        return err;
      });
  },

  getAnswers: function(questionId) {
    return axios
      .get("/api/answer/" + questionId)
      .then(function(res) {
        return res;
      })
      .catch(function(err) {
        return err;
      });
  }
};
module.exports = helper;
