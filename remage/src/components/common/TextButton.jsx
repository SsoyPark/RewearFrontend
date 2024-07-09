import React from "react";
import "./TextButton.css";

const TextButton = ({ text, onClick, className, id }) => {
  return (
    <div id={id} className={`text-button ${className}`} onClick={onClick}>
      {text}
    </div>
  );
};

export default TextButton;
