import React from "react";
import classNames from "classnames";
import styles from "./Textarea.module.css";

const Textarea = ({
    id,
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
    <textarea className={componentClass}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Textarea;