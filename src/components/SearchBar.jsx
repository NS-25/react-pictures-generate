import { useState } from "react";

import React from "react";
import "./SearchBar.css";

const SearchBar = ({ onSubmit }) => {
  //state part
  const [term, setTerm] = useState("cars");
  //event handle for form submit part
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };
  // handle change part
  const handelChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handelChange} />
      </form>
    </div>
  );
};

export default SearchBar;
