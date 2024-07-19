import React from "react";
import QuestionWrapper from "../../QuestionWrapper/QuestionWrapper";

const MysqlQuestion = () => (
  <QuestionWrapper
    title="Create a MySql Question"
    selectedTopic="MySql"
    apiEndpoint="https://example.com/api/mysql-questions"
  />
);
export default MysqlQuestion;
