import React from "react";

const SearchBar = () => {
  const handleFormSubmit = () => {
    console.log("I need to tell the parent about some data");
  };
  return (
    <div>
      <form>
        <input onSubmit={handleFormSubmit} />
      </form>
    </div>
  );
};

export default SearchBar;
