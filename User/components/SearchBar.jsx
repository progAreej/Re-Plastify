// SearchBar.js

"use client";
import React from 'react';

const SearchBar = ({ value, onChange, onSearch }) => {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search ..."
        value={value}
        onChange={onChange}
        className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent transition duration-300 bg-white shadow-sm"
      />
      <button
        onClick={onSearch}
        className="absolute inset-y-0 right-0 flex items-center px-4 text-white bg-green rounded-r-lg hover:bg-green-dark focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-2 transition duration-300"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
