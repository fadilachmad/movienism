import React from "react";
import { GoSearch } from "react-icons/go";

const SearchInput = ({ placeholder }) => {
  return (
    <div className="hidden md:flex border-b border-white px-1">
      <input
        type="text"
        className="text-white font-thin bg-transparent focus:outline-none placeholder:text-white placeholder:opacity-35 min-w-52"
        placeholder={placeholder}
      />
      <GoSearch className="cursor-pointer" />
    </div>
  );
};

export default SearchInput;
