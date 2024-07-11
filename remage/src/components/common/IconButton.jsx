import React from "react";
import classNames from "classnames";
import styles from "./IconButton.module.css";
import { Link } from "react-router-dom";

const IconButton = ({ children, onClick, className, url = "", ...res }) => {
  const classArray = className ? className.split(" ") : [];
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const componentClass = classNames(
    styles["component"],
    ...classArray.map((cls) => styles[cls])
  );
  return (
    <>
      {url ? (
        <Link
          to={`${baseUrl}${url}`}
          className={componentClass}
          onClick={onClick}
          {...res}
        >
          {children}
        </Link>
      ) : (
        <button className={componentClass} onClick={onClick} {...res}>
          {children}
        </button>
      )}
    </>
  );
};
export default IconButton;
