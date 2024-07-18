import React from "react";

const QuestionOption = ({ option, setOption, index }) => {
  return (
    <div className="mb-4">
      <label htmlFor={`option-${index}`} className="block text-gray-700 text-sm font-bold mb-2">
        Option {index + 1}
      </label>
      <input
        type="text"
        id={`option-${index}`}
        value={option}
        onChange={(e) => setOption(index, e.target.value)}
        placeholder={`Enter option ${index + 1}`}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        required
      />
    </div>
  );
};

export default QuestionOption;
