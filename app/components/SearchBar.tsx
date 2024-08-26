import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { setLocation } from "../store/weatherSlice";

import { useRouter } from "next/router";

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
        className="border p-2 rounded-l"
        placeholder="Search for a location"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded-r"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
