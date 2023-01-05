import React from "react";
import data from "./data";

export default function CountriesContainer() {
  const countries = data.map((item) => {
    return (
      <div>
        <h1>{item.name}</h1>
        <h3>{item.capital}</h3>
        <span>{item.population}</span>
      </div>
    );
  });
  return <div className="countries_container">{countries}</div>;
}
