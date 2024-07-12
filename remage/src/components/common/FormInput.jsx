import React from "react";
import classNames from "classnames";
import styles from "./FormInput.module.css";

const FormInput = ({
  id,
  type = "text",
  label,
  className,
  subClassName,
  ...res
}) => {
  const classArray = className ? className.split(" ") : [];

  const componentClass = classNames(
    styles["component"],
    ...classArray.map((cls) => styles[cls])
  );

  const subClassArray = subClassName ? subClassName.split(" ") : [];

  const subClass = classNames(...subClassArray.map((cls) => styles[cls]));
  return (
    <div className={componentClass}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} {...res} className={subClass} />
    </div>
  );
};

export default FormInput;
