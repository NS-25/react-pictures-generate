import { useState } from "react";

import React from "react";

const SearchBar = ({ onSubmit }) => {
  //state part
  const [term, setTerm] = useState(" ");
  //event handle for form submit part
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit("cars");
  };
  // handle change part
  const handelChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handelChange} />
      </form>
    </div>
  );
};

export default SearchBar;
