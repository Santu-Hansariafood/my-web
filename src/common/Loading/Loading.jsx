import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="cube">
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face left"></div>
        <div className="face right"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
      </div>
      <div className="loading-text">
        {"Loading...".split("").map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </div>
    </div>
  );
};

export default Loading;
