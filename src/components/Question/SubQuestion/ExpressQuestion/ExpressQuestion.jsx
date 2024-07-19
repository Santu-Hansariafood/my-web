import React from "react";
import QuestionWrapper from "../../QuestionWrapper/QuestionWrapper";

const ExpressQuestion = () => (
  <QuestionWrapper
    title="Create a ExpressJs Question"
    selectedTopic="ExpressJS"
    apiEndpoint="https://example.com/api/express-questions"
  />
);
export default ExpressQuestion;
