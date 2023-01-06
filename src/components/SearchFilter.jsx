import React from "react";
import search from "../assets/search.svg";
import "./SearchFilter.css";

export default function SearchFilter() {
  return (
    <div className="searchfilter_container">
      <span className="search_container">
        <button id="searchBtn">
          <img src={search} alt="search" className="svgs" />
        </button>
        <input
          type="text"
          id="search_input"
          placeholder="Search for a country..."
        />
      </span>
      <span className="filter_container">
        <select name="region" id="filter">
          <option value="">Filter by Region</option>
          <option value="&diet=balanced">Africa</option>
          <option value="&diet=high-fiber">America</option>
          <option value="&diet=high-protein">Asia</option>
          <option value="&diet=low-carb">Europe</option>
          <option value="&diet=low-fat">Oceania</option>
        </select>
      </span>
    </div>
  );
}
