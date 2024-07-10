import React from "react";
import styles from "./InputError.module.css";
import classNames from "classnames";

const InputError = ({ errorMessage = "error message", className }) => {
  const classArray = className ? className.split(" ") : [];

  const componentClass = classNames(
    styles["component"],
    ...classArray.map((cls) => styles[cls])
  );
  return <div className={componentClass}>{errorMessage}</div>;
};

export default InputError;
