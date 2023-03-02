import React, { useRef, useEffect } from "react";
import search from "../assets/search.svg";
import "./SearchFilter.css";

export default function SearchFilter(props) {
  var continent = useRef("");

  useEffect(() => {
    const currentValue = continent.current.value;
    props.setFilterValue(currentValue);
  }, [continent.current.value, props]);

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
          onChange={(e) => props.setSearchValue(`/name/${e.target.value}`)}
        />
      </span>
      <span className="filter_container">
        <select name="region" id="filter" ref={continent}>
          {/* <option value="/all">All</option> */}
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </span>
    </div>
  );
}
