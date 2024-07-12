import React, { useState } from 'react';
import classNames from "classnames";
import styles from "./SelectField.module.css";

const SelectField = ({
  id,
  label,
  placeholder,
  onChange,
  className,
  options = []
}) => {
  const classArray = className ? className.split(" ") : [];

  const componentClass = classNames(
    styles["component"],
    ...classArray.map((cls) => styles[cls])
  );

  return (
    <div className={componentClass}>
      {label && <label htmlFor={id} className={styles.label}>{label}</label>}
      <select
        className={styles.selectInner}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
      >
        <option value="" disabled selected>{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
