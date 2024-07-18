import React from "react";
import { useNavigate } from "react-router-dom";
import QuestionForm from "../common/QuestionForm/QuestionForm";

const AngularQuestion = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Create a Angular Question
        </h2>
        <QuestionForm selectedTopic="Angular" handleBack={handleBack} />
      </div>
    </div>
  );
};

export default AngularQuestion;
