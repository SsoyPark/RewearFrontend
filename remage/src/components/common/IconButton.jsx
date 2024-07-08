import React from "react";
import "./IconButton.css";

const IconButton = ({ children, onClick }) => {
  return (
    <button
      className="icon-button"
      onClick={onClick}
      //   style={{ width: size, height: size }}
    >
      {children}
    </button>
  );
};

export default IconButton;
