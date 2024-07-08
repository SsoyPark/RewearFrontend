import React from "react";
import "./FormCheckbox.css";

const FormCheckbox = ({ id, label }) => {
  return (
    <div className="form-checkbox">
      <input id={id} type="checkbox" />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default FormCheckbox;
