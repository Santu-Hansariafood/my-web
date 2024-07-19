import React from "react";
import QuestionWrapper from "../../QuestionWrapper/QuestionWrapper";

const AngularQuestion = () => (
  <QuestionWrapper
    title="Create an Angular Question"
    selectedTopic="Angular"
    apiEndpoint="https://example.com/api/angular-questions"
  />
);
export default AngularQuestion;
