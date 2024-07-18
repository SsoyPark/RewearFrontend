import React from "react";
import classNames from "classnames";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

const Button = ({ className, text, url = "", type="button", onClick, ...rest }) => {
  const classArray = className ? className.split(" ") : [];
  const componentClass = classNames(
    styles["component"],
    ...classArray.map((cls) => styles[cls])
  );
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  return (
    <>
      {url ? (
        <Link className={componentClass} to={`${baseUrl}${url}`} onClick={onClick} {...rest}>
          {text}
        </Link>
      ) : (
        <button type={type} className={componentClass} onClick={onClick} {...rest}>
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
