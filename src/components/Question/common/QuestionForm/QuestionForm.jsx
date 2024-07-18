import React, { useState } from "react";
import QuestionTitle from "../../common/QuestionTitle/QuestionTitle";
import QuestionOption from "../../common/QuestionOption/QuestionOption";
import QuestionExplanation from "../../common/QuestionExplanation/QuestionExplanation";
import QuestionAnswer from "../../common/QuestionAnswer/QuestionAnswer";
import Buttons from "../../../../common/Buttons/Buttons";
import axios from "axios";
import Swal from "sweetalert2";

const QuestionForm = ({ selectedTopic, handleBack, apiEndpoint }) => {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [explanation, setExplanation] = useState("");
  const [answer, setAnswer] = useState("");

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const questionData = {
      title,
      question,
      options,
      explanation,
      answer: options[answer],
    };

    try {
      const response = await axios.post(apiEndpoint, questionData);
      if (response.status === 201) {
        Swal.fire("Success", "Question saved successfully!", "success");
        handleReset();
      }
    } catch (error) {
      console.error("Error saving question:", error);
      Swal.fire("Error", "There was an issue saving the question.", "error");
    }
  };

  const handleReset = () => {
    setTitle("");
    setQuestion("");
    setOptions(["", "", "", ""]);
    setExplanation("");
    setAnswer("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <QuestionTitle title={title} setTitle={setTitle} />
      <div>
        <label
          htmlFor="question"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          {selectedTopic} Question:
        </label>
        <textarea
          id="question"
          name="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder={`Type your ${selectedTopic} question here...`}
          className="border border-gray-300 rounded px-3 py-2 w-full h-32 resize-none"
          required
        />
      </div>
      {options.map((option, index) => (
        <QuestionOption
          key={index}
          option={option}
          setOption={handleOptionChange}
          index={index}
        />
      ))}
      <QuestionExplanation
        explanation={explanation}
        setExplanation={setExplanation}
      />
      <QuestionAnswer answer={answer} setAnswer={setAnswer} />
      <div className="flex justify-between mt-6">
        <Buttons type="button" onClick={handleBack} color="black">
          Back
        </Buttons>
        <Buttons type="button" onClick={handleReset} color="yellow">
          Reset
        </Buttons>
        <Buttons type="submit" color="green">
          Save Question
        </Buttons>
      </div>
    </form>
  );
};

export default QuestionForm;
