import React from "react";

const SearchBox = ({ searchFood }) => {
  return (
    <div className="search-box">
      <input
        className="search-input"
        type="search"
        placeholder="Search some food..."
        onChange={searchFood}
      />
    </div>
  );
};

export default SearchBox;
