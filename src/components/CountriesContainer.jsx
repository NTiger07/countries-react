import React from "react";
import data from "./data";
import "./CountriesContainer.css";

export default function CountriesContainer() {
  const countries = data.slice(0, 8).map((item) => {
    return (
      <div className="countries_item">
        <div className="countries_image">
          <img src="" alt="" />
        </div>
        <div className="countries_content">
          <h1>{item.name}</h1>
          <h2>{item.population}</h2>
          <h2>{item.region}</h2>
          <h3>{item.capital}</h3>
        </div>
      </div>
    );
  });
  return <div className="countries_container">{countries}</div>;
}
