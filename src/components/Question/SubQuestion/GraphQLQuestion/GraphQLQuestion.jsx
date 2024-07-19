import React from "react";
import QuestionWrapper from "../../QuestionWrapper/QuestionWrapper";

const GraphQLQuestion = () => (
  <QuestionWrapper
    title="Create a GraphQL Question"
    selectedTopic="GraphQL"
    apiEndpoint="https://example.com/api/graphql-questions"
  />
);
export default GraphQLQuestion;
