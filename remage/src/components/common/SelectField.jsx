import React, { useState } from 'react';
import classNames from "classnames";
import styles from "./SelectField.module.css";

const SelectField = ({
  id,
  name,
  label,
  placeholder,
  className,
  options = [],
  onChange,
  required = false
}) => {
  const [selectedValue, setSelectedValue] = useState("");

  const classArray = className ? className.split(" ") : [];

  const componentClass = classNames(
    styles["component"],
    ...classArray.map((cls) => styles[cls])
  );

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={componentClass}>
      {label && <label htmlFor={id} className={styles.label}>{label}</label>}
      <select
        className={styles.selectInner}
        id={id}
        name={name}
        value={selectedValue}
        placeholder={placeholder}
        onChange={handleSelectChange}
        required={required}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
