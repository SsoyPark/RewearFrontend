import React from "react";
import classNames from "classnames";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

const Button = ({ className, text, url = "", ...rest }) => {
  const classArray = className ? className.split(" ") : [];
  const componentClass = classNames(
    styles["component"],
    ...classArray.map((cls) => styles[cls])
  );
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  return (
    <>
      {url ? (
        <Link className={componentClass} to={`${baseUrl}${url}`} {...rest}>
          {text}
        </Link>
      ) : (
        <button className={componentClass} {...rest}>
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
