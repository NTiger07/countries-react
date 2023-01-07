import React from "react";
import data from "./data";
import "./CountriesContainer.css";

export default function CountriesContainer() {
  const countries = data.slice(0, 8).map((item) => {
    return (
      <div className="countries_item">
        <h1>{item.name}</h1>
        <h3>{item.capital}</h3>
        <span>{item.population}</span>
      </div>
    );
  });
  return <div className="countries_container">{countries}</div>;
}
