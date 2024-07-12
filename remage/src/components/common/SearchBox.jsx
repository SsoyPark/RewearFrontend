import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./SearchBox.module.css";
import classNames from "classnames";

const SearchBox = ({ className }) => {
  const classArray = className ? className.split(" ") : [];

  const componentClass = classNames(
    styles["component"],
    ...classArray.map((cls) => styles[cls])
  );
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    // Handle the search logic here
    console.log("Search query:", query);
  };

  return (
    <div className={componentClass}>
      <input
        // className="search-input-box"
        type="text"
        value={query}
        onChange={handleInputChange}
      />
      <FaSearch />
    </div>
  );
};

export default SearchBox;
