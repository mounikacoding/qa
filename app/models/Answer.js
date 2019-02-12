module.exports = function(sequelize, Sequelize) {
  var Answer = sequelize.define("Answer", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    questionId: {
      type: Sequelize.INTEGER,
      references: {
        model: "Questions",
        key: "id"
      }
    },

    answeredBy: {
      type: Sequelize.STRING
    },

    answer: {
      type: Sequelize.STRING
    },

    supporting: {
      type: Sequelize.STRING
    },

    likes: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    }
  });

  return Answer;
};
