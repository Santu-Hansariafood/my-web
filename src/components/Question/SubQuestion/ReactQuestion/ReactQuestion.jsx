import React from "react";
import QuestionWrapper from "../../QuestionWrapper/QuestionWrapper";

const DesignQuestion = () => (
  <QuestionWrapper
    title="Create a Design Question"
    selectedTopic="Design"
    apiEndpoint="https://example.com/api/design-questions"
  />
);
export default DesignQuestion;
