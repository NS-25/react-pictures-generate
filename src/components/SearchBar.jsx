import React from "react";

const SearchBar = ({ onSubmit }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit("cars");
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
