const Questions = require("../model/Questions");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
  GraphQLInt,
} = require("graphql");

const QuestionType = new GraphQLObjectType({
  name: "question",
  fields: () => ({
    question: { type: GraphQLString },
    answers: { type: new GraphQLList(GraphQLString) },
    correct: { type: GraphQLInt },
  }),
});
