var express = require("express"),
  router = express.Router(),
  axios = require("axios"),
  path = require("path"),
  db = require("../models");

router.post("/question", function(req, res) {
  console.log(req.body);
  db.Question.create(req.body).then(function(booked) {
    console.log("Question has been added.");
  });
  var data = {
    question: req.body.question,
    description: req.body.description
  };
  res.json(data);
});

router.post("/answer", function(req, res) {
  console.log(req.body);
  db.Answer.create(req.body).then(function(booked) {
    console.log("Answer has been added.");
  });
  var data = {
    answer: req.body.answer,
    supporting: req.body.supporting,
    questionId: req.body.questionId
  };
  res.json(data);
});

router.get("/api", function(req, res) {
  console.log("apiapiapiapi");
  db.Question.findAll({
    raw: true
  })
    .then(function(data) {
      console.log(data);
      res.json(data);
    })
    .catch(function(err) {
      console.log(err);
      res.json(err);
    });
});

router.get("/api/question/:id", function(req, res) {
  var id = req.params.id;
  console.log(id);
  db.Question.findAll({
    raw: true,
    where: {
      id: id
    }
  })
    .then(function(data) {
      console.log(data);
      res.json(data);
    })
    .catch(function(err) {
      res.json(err);
    });
});

router.get("/api/answer/like/:id", function(req, res) {
  var id = req.params.id;
  console.log(id);
  db.Answer.findOne({
    where: {
      id: id
    }
  })
    .then(option => {
      return option.increment("likes");
    })
    .then(option => {
      return option.reload();
    })
    .then(option => {
      res.json(option);
    });
});

router.get("/api/answer/:id", function(req, res) {
  var id = req.params.id;
  console.log(id);
  db.Answer.findAll({
    raw: true,
    where: {
      questionId: id
    }
  })
    .then(function(data) {
      console.log(data);
      res.json(data);
    })
    .catch(function(err) {
      res.json(err);
    });
});

router.get("/api/:search", function(req, res) {
  var des = req.params.search;
  console.log(des);
  db.Question.findAll({
    raw: true,
    where: {
      description: des
    }
  })
    .then(function(data) {
      console.log(data);
      res.json(data);
    })
    .catch(function(err) {
      res.json(err);
    });
});

router.get("/*", function(req, res) {
  console.log("Serving index.html");
  res.sendFile(path.join(__dirname + "/../public/index.html"));
});

module.exports = router;
