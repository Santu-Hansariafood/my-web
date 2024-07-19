import React from "react";
import QuestionWrapper from "../../QuestionWrapper/QuestionWrapper";

const VueJSQuestion = () => (
  <QuestionWrapper
    title="Create a VueJS Question"
    selectedTopic="VueJS"
    apiEndpoint="https://example.com/api/vuejs-questions"
  />
);
export default VueJSQuestion;
