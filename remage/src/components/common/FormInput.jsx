import React from "react";
import "./FormInput.css";

const FormInput = ({
  id,
  type = "text",
  label,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div className="form-input">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
