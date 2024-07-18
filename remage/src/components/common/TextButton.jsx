import React from "react";
import styles from "./TextButton.module.css";
import classNames from "classnames";
import { Link } from "react-router-dom";

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
        <Link id={id} className={componentClass} to={`${baseUrl}${url}`} onClick={onClick}>
          {text}
        </Link>
      ) : (
        <div id={id} className={componentClass} onClick={onClick}>
          {text}
        </div>
      )}
    </>
  );
};

export default TextButton;
