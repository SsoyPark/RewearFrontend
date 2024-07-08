import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBox.css";

const SearchBox = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    // Handle the search logic here
    console.log("Search query:", query);
  };

  return (
    <div className="search-box">
      <input
        className="search-input-box"
        type="text"
        value={query}
        onChange={handleInputChange}
      />
      <FaSearch />
    </div>
  );
};

export default SearchBox;
