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
          <option value="/all">Filter by Region</option>
          <option value="/region/africa">Africa</option>
          <option value="/region/america">America</option>
          <option value="/region/asia">Asia</option>
          <option value="/region/europe">Europe</option>
          <option value="/region/oceania">Oceania</option>
        </select>
      </span>
    </div>
  );
}
