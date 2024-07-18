import React from "react";

const Input = ({ id, label, type, value, onChange, placeholder, ...props }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-bold text-gray-700">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 mt-1 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default Input;
