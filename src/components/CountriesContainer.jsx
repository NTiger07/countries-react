import React from "react";
import CountriesItem from "./CountriesItem";
import data from "./data";
import "./CountriesContainer.css";
import SearchFilter from "./SearchFilter";

export default function CountriesContainer() {
  const countries = data.slice(0, 8).map((item) => {
    return <CountriesItem />;
  });
  return (
    <div className="countries_container">
      <SearchFilter />
      <div className="countries_container-content">{countries}</div>
    </div>
  );
}
