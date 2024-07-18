import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Buttons from "../../common/Buttons/Buttons";
import optionsData from "../../data/options.json";

const WorkDetails = ({ user, userRole }) => {
  const navigate = useNavigate();
  const [options, setOptions] = useState(optionsData);

  const handleBack = () => {
    navigate(-1);
  };

  const handleNext = () => {
    const selectedOption = options.find((option) => option.checked);
    if (!selectedOption) {
      Swal.fire({
        title: "No Selection",
        text: "Please select an option before proceeding.",
        icon: "error",
        confirmButtonColor: "#3085d6",
      });
      return;
    }

    Swal.fire({
      title: `Proceed to ${selectedOption.label}?`,
      text: "You will be navigated to the next component.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(selectedOption.route, {
          state: { user, selectedOption: selectedOption.label },
        });
      }
    });
  };

  const handleChange = (id) => {
    setOptions(
      options.map((option) =>
        option.id === id
          ? { ...option, checked: true }
          : { ...option, checked: false }
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 rounded-lg shadow-2xl bg-gradient-to-br from-green-300 via-yellow-200 to-green-300">
      <h2 className="text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-500">
        Work Details
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {options.map((option) => (
          <div
            key={option.id}
            className={`p-4 border rounded-lg transform transition-all duration-300 ${
              option.checked
                ? "bg-green-300 border-green-600 scale-105 shadow-lg"
                : "bg-yellow-200 border-yellow-600 hover:bg-yellow-300"
            } cursor-pointer`}
            onClick={() => handleChange(option.id)}
          >
            <label className="cursor-pointer flex items-center">
              <input
                type="checkbox"
                checked={option.checked}
                onChange={() => handleChange(option.id)}
                className="mr-2 h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <span className="text-gray-800 font-medium whitespace-nowrap">
                {option.label}
              </span>
            </label>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-between">
        <Buttons
          onClick={handleBack}
          size="small"
          color="black"
          textColor="white"
        >
          Back
        </Buttons>
        <Buttons onClick={handleNext} size="small" color="green">
          Next
        </Buttons>
      </div>
    </div>
  );
};

export default WorkDetails;
