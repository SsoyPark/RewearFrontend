import React from "react";
import classNames from "classnames";
import styles from "./FormInput.module.css";

const FormInput = ({
  id,
  type = "text",
  label,
  value,
  placeholder,
  onChange,
  className,
}) => {
  const classArray = className ? className.split(" ") : [];

  const componentClass = classNames(
    styles["component"],
    ...classArray.map((cls) => styles[cls])
  );
  return (
    <div className={componentClass}>
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
