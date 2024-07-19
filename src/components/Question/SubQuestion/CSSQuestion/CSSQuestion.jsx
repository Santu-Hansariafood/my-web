import React from "react";
import QuestionWrapper from "../../QuestionWrapper/QuestionWrapper";

const CSSQuestion = () => (
  <QuestionWrapper
    title="Create a CSS Question"
    selectedTopic="Css"
    apiEndpoint="https://example.com/api/css-questions"
  />
);
export default CSSQuestion;
