import React from "react";
import "./TextButton.css";

const TextButton = ({ children, onClick }) => {
  return (
    <div className="text-button" onClick={onClick}>
      {children}
    </div>
  );
};

export default TextButton;
