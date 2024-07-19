import React from "react";
import QuestionWrapper from "../../QuestionWrapper/QuestionWrapper";

const JiraQuestion = () => (
  <QuestionWrapper
    title="Create a Jira Question"
    selectedTopic="Jira"
    apiEndpoint="https://example.com/api/jira-questions"
  />
);
export default JiraQuestion;
