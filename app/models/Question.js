module.exports = function(sequelize, Sequelize) {
  var Question = sequelize.define("Question", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    question: {
      type: Sequelize.STRING
    },

    description: {
      type: Sequelize.STRING
    }
  });

  return Question;
};
