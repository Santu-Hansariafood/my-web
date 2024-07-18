import React from "react";

const Buttons = ({ children, onClick, type = "button", size = "medium", color = "green" }) => {
  let sizeClasses;

  switch (size) {
    case "small":
      sizeClasses = "py-2 px-4 text-sm";
      break;
    case "medium":
      sizeClasses = "py-2 px-6 text-base";
      break;
    case "large":
      sizeClasses = "py-3 px-8 text-lg";
      break;
    default:
      sizeClasses = "py-2 px-6 text-base";
  }

  let colorClasses;

  switch (color) {
    case "green":
      colorClasses = "bg-green-500 hover:bg-green-700";
      break;
    case "yellow":
      colorClasses = "bg-yellow-500 hover:bg-yellow-700";
      break;
    case "black":
      colorClasses = "bg-black hover:bg-gray-700";
      break;
    default:
      colorClasses = "bg-green-500 hover:bg-green-700";
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-white font-bold rounded-lg transition duration-300 ${sizeClasses} ${colorClasses}`}
    >
      {children}
    </button>
  );
};

export default Buttons;
