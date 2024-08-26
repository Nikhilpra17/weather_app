"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { setLocation } from "../store/weatherSlice";

import { useRouter } from "next/navigation";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSearch = () => {
    dispatch(setLocation(query));
    router.push("/weather");
  };

  return (
    <div className="flex justify-center mt-20">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-300 rounded-full text-sm p-3 h-10 w-96 focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Search for a location"
      />
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
