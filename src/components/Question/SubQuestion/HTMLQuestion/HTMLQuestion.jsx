import React from "react";
import QuestionWrapper from "../../QuestionWrapper/QuestionWrapper";

const HTMLQuestion = () => (
  <QuestionWrapper
    title="Create a HTML Question"
    selectedTopic="HTML"
    apiEndpoint="https://example.com/api/html-questions"
  />
);
export default HTMLQuestion;
