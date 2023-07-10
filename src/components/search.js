import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./search.css";
export const SearchBar = ({setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://api.spacexdata.com/v4/rockets")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((rocket) => {
            return (
                value &&
                rocket.name &&
                rocket.name.toLowerCase().includes(value)
            );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <div className="search-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
