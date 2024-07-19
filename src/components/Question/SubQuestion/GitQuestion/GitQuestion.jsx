import React from "react";
import QuestionWrapper from "../../QuestionWrapper/QuestionWrapper";

const GitQuestion = () => (
  <QuestionWrapper
    title="Create a Git Question"
    selectedTopic="Git"
    apiEndpoint="https://example.com/api/git-questions"
  />
);
export default GitQuestion;
