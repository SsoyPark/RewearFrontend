import React from "react";
import classNames from "classnames";
import styles from "./FormCheckbox.module.css";

const FormCheckbox = ({ id, label, onChange, className }) => {
  const classArray = className ? className.split(" ") : [];

  const componentClass = classNames(
    styles["component"],
    ...classArray.map((cls) => styles[cls])
  );
  return (
    <div className={componentClass}>
      <input id={id} type="checkbox" onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default FormCheckbox;
