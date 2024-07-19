import React from "react";
import QuestionWrapper from "../../QuestionWrapper/QuestionWrapper";

const TypeScriptQuestion = () => (
  <QuestionWrapper
    title="Create a TypeScripr Question"
    selectedTopic="TypeScript"
    apiEndpoint="https://example.com/api/typescript-questions"
  />
);
export default TypeScriptQuestion;
