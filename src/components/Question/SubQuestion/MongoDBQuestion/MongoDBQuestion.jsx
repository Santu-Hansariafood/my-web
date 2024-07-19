import React from "react";
import QuestionWrapper from "../../QuestionWrapper/QuestionWrapper";

const MongoDBQuestion = () => (
  <QuestionWrapper
    title="Create a MongoDB Question"
    selectedTopic="MongoDB"
    apiEndpoint="https://example.com/api/mongodb-questions"
  />
);
export default MongoDBQuestion;
