import React from "react";
import "./Button.css";

const Button = ({ onClick, className, text }) => {
  return (
    <button className={`button-component ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
