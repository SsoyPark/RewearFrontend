import React from "react";
import styles from "./TextButton.module.css";
import classNames from "classnames";

const TextButton = ({ text, onClick, className, id, url = "" }) => {
  const classArray = className ? className.split(" ") : [];

  const componentClass = classNames(
    styles["component"],
    ...classArray.map((cls) => styles[cls])
  );
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  return (
    <>
      {url ? (
        <a id={id} className={componentClass} href={`${baseUrl}${url}`}>
          {text}
        </a>
      ) : (
        <div id={id} className={componentClass} onClick={onClick}>
          {text}
        </div>
      )}
    </>
  );
};

export default TextButton;
