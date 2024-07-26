import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import data from "./answer.json";

const MySwal = withReactContent(Swal);

const QuestionTable = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(data);
  }, []);

  const handleView = (question) => {
    MySwal.fire({
      title: '<strong>View Question</strong>',
      icon: 'info',
      html: `
        <p><strong>${question.questionTitle}</strong></p>
        <p>${question.questionContent}</p>
        <ul>
          ${question.options.map(option => `<li>${option}</li>`).join('')}
        </ul>
        <p><strong>Explanation:</strong> ${question.explanation}</p>
        <p><strong>Correct Answer:</strong> ${question.correctAnswer}</p>
      `
    });
  };

  const handleEdit = (question) => {
    MySwal.fire({
      title: '<strong>Edit Question</strong>',
      html: `
        <label>Question Title</label>
        <input id="title" class="swal2-input" value="${question.questionTitle}">
        <label>Question Content</label>
        <input id="content" class="swal2-input" value="${question.questionContent}">
        <label>Option 1</label>
        <input id="option1" class="swal2-input" value="${question.options[0]}">
        <label>Option 2</label>
        <input id="option2" class="swal2-input" value="${question.options[1]}">
        <label>Option 3</label>
        <input id="option3" class="swal2-input" value="${question.options[2]}">
        <label>Option 4</label>
        <input id="option4" class="swal2-input" value="${question.options[3]}">
        <label>Explanation</label>
        <input id="explanation" class="swal2-input" value="${question.explanation}">
        <label>Correct Answer</label>
        <input id="correctAnswer" class="swal2-input" value="${question.correctAnswer}">
      `,
      preConfirm: () => {
        return {
          questionTitle: document.getElementById('title').value,
          questionContent: document.getElementById('content').value,
          options: [
            document.getElementById('option1').value,
            document.getElementById('option2').value,
            document.getElementById('option3').value,
            document.getElementById('option4').value
          ],
          explanation: document.getElementById('explanation').value,
          correctAnswer: document.getElementById('correctAnswer').value
        };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedQuestions = questions.map(q => 
          q.id === question.id ? { ...q, ...result.value } : q
        );
        setQuestions(updatedQuestions);
      }
    });
  };

  const handleDelete = (questionId) => {
    MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.isConfirmed) {
        setQuestions(questions.filter(q => q.id !== questionId));
      }
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Questions List</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50">Title</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50">Question</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50">Options</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50">Correct Answer</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50">Actions</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question) => (
              <tr key={question.id}>
                <td className="py-2 px-4 border-b border-gray-200">{question.questionTitle}</td>
                <td className="py-2 px-4 border-b border-gray-200">{question.questionContent}</td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <ul>
                    {question.options.map((option, index) => (
                      <li key={index}>{option}</li>
                    ))}
                  </ul>
                </td>
                <td className="py-2 px-4 border-b border-gray-200">{question.correctAnswer}</td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <button
                    className="text-blue-500 hover:text-blue-700 mr-2"
                    onClick={() => handleView(question)}
                  >
                    View
                  </button>
                  <button
                    className="text-green-500 hover:text-green-700 mr-2"
                    onClick={() => handleEdit(question)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(question.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuestionTable;
