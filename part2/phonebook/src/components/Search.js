import React from "react";

const Search = ({ onSubmit, value, onChange, displaySearch }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <h2>Phonebook</h2>
        filter shown with:
        <input value={value} onChange={onChange} />
        <button type="submit">search</button>
      </form>
      <h3>Search Result</h3>
      {displaySearch}
    </>
  );
};

export default Search;
