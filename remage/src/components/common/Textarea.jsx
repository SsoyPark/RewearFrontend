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
    <div className={componentClass}>
        <textarea
            className={styles.textareaInner}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
        />
    </div>
  );
};

export default Textarea;