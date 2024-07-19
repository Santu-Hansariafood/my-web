import React from "react";
import QuestionWrapper from "../../QuestionWrapper/QuestionWrapper";

const JavaScriptQuestion = () => (
  <QuestionWrapper
    title="Create a JavaScript Question"
    selectedTopic="JavaScript"
    apiEndpoint="https://example.com/api/javascript-questions"
  />
);
export default JavaScriptQuestion;
