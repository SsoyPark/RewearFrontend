import React from "react";

const Button = ({ children, onClick, disabled, style = {} }) => {
  return (
    <button style={{ ...defaultStyle, ...style }} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

const defaultStyle = {
  border: "none",
  borderRadius: "5px",
  height: "32px",
  width: "135px",
  fontSize: "12px",
  fontWeight: "bold",
  backgroundColor: "#47C282",
  color: "white",
  cursor: "pointer",
};
