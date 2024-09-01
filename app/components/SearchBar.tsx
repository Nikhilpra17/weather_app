"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "../store/weatherSlice";
import { useRouter } from "next/navigation";
import { RootState } from "../store";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const dispatch = useDispatch();
  const router = useRouter();

  const localities = useSelector(
    (state: RootState) => state.weather.localities
  );

  const handleSearch = () => {
    dispatch(setLocation(query));
    router.push("/weather");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const filteredSuggestions = localities.filter((locality) =>
        locality.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setSuggestions([]);
    dispatch(setLocation(suggestion));
    router.push("/weather");
  };

  return (
    <div className="flex justify-center mt-20 relative">
      <div className="relative w-96">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-full text-sm p-3 h-10 w-full focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Search for a location"
        />
        {suggestions.length > 0 && (
          <ul className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-lg z-10">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="p-2 cursor-pointer hover:bg-gray-100"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button
        onClick={handleSearch}
        className="bg-google-blue text-white px-4 py-2 rounded-full ml-4 hover:bg-blue-700 transition-colors"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
