import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (event) => {
    onSearch(event.target.value); // Llama a la función con el valor del input
  };

  return (
    <input
      type="text"
      placeholder="Search contacts..."
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;