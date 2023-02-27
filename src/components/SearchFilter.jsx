import React, { useRef } from "react";
import search from "../assets/search.svg";
import "./SearchFilter.css";

export default function SearchFilter(props) {
  var continent = useRef("");

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
          onChange={(e) => props.setSearchValue(e.target.value)}
        />
      </span>
      <span className="filter_container">
        <select name="region" id="filter" ref={continent}>
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
