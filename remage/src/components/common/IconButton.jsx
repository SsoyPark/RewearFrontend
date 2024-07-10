import React from "react";
import classNames from "classnames";
import styles from "./IconButton.module.css";

const IconButton = ({ children, onClick, className }) => {
  const classArray = className ? className.split(" ") : [];

  const componentClass = classNames(
    styles["component"],
    ...classArray.map((cls) => styles[cls])
  );
  return (
    <button className={componentClass} onClick={onClick}>
      {children}
    </button>
  );
};
export default IconButton;
