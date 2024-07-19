import React from "react";
import QuestionWrapper from "../../QuestionWrapper/QuestionWrapper";

const NextJSQuestion = () => (
  <QuestionWrapper
    title="Create a NextJS Question"
    selectedTopic="NextJS"
    apiEndpoint="https://example.com/api/nextjs-questions"
  />
);
export default NextJSQuestion;
