import React from "react";
import QuestionWrapper from "../../QuestionWrapper/QuestionWrapper";

const NodeQuestion = () => (
  <QuestionWrapper
    title="Create a Node Question"
    selectedTopic="Node"
    apiEndpoint="https://example.com/api/node-questions"
  />
);
export default NodeQuestion;
