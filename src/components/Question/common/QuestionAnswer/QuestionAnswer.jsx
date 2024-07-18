import React from "react";

const QuestionAnswer = ({ answer, setAnswer }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="answer"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Correct Answer
      </label>
      <select
        id="answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
      >
        <option value="" disabled>
          Select the correct answer
        </option>
        <option value="0">Option 1</option>
        <option value="1">Option 2</option>
        <option value="2">Option 3</option>
        <option value="3">Option 4</option>
      </select>
    </div>
  );
};

export default QuestionAnswer;
