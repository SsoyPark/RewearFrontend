import React from "react";
import "./TextButton.css";

const TextButton = ({ text, onClick, className }) => {
  return (
    <div className={`text-button ${className}`} onClick={onClick}>
      {text}
    </div>
  );
};

export default TextButton;
