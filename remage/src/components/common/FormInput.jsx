import React from "react";
import classNames from "classnames";
import styles from "./FormInput.module.css";

const FormInput = ({ id, type = "text", label, className, ...res }) => {
  const classArray = className ? className.split(" ") : [];

  const componentClass = classNames(
    styles["component"],
    ...classArray.map((cls) => styles[cls])
  );
  return (
    <div className={componentClass}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} {...res} />
    </div>
  );
};

export default FormInput;
