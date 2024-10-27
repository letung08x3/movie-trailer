import React, { useState } from "react";

function Header({ handleSearch }) {
  const [textSearch, setTextSearch] = useState("");
  return (
    <div className="p-4 bg-black flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-[30px]  font-bold text-red-700">MinMon TV</h1>
        <nav className="flex items-center space-x-4">
          <a className="text-white" href="#">
            Home
          </a>
          <a className="text-white" href="#">
            About
          </a>
          <a className="text-white" href="#">
            Contact
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="p-3 text-black rounded-md"
          value={textSearch}
          onChange={(e) => setTextSearch(e.target.value)}
        ></input>
        <button
          className="text-white bg-red-500 p-2 rounded-md"
          onClick={() => handleSearch(textSearch)}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Header;
