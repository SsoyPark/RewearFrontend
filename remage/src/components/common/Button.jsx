import React from "react";
import classNames from "classnames";
import styles from "./Button.module.css";

const Button = ({ onClick, className, text }) => {
  const classArray = className ? className.split(" ") : [];

  const componentClass = classNames(
    styles["component"],
    ...classArray.map((cls) => styles[cls])
  );
  return (
    // <button className={`button-component ${className}`} onClick={onClick}>
    <button className={componentClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
