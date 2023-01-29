import React from "react";
import CountriesItem from "./CountriesItem";
import data from "./data";
import "./CountriesContainer.css";
import SearchFilter from "./SearchFilter";

export default function CountriesContainer() {
  const countries = data.map((country) => {
    return <CountriesItem key={country.id} />;
  });
  return (
    <div className="countries_container">
      <SearchFilter />
      <div className="countries_container-content">{countries}</div>
    </div>
  );
}
