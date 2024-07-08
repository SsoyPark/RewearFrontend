import React from "react";
import "./InputError.css";

const InputError = ({ errorMessage = "error message" }) => {
  return <div className="input-error">{errorMessage}</div>;
};

export default InputError;
