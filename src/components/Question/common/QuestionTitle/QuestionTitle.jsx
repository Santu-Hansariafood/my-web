import React from "react";
import Input from "../../../../common/Input/Input";

const QuestionTitle = ({ title, setTitle }) => {
  return (
    <div className="mb-4">
      <Input
        id="title"
        label="Question Title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter question title"
        required
      />
    </div>
  );
};

export default QuestionTitle;
