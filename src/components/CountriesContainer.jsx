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
          <span>
            <b>Population: </b>
            {item.population}
          </span>
          <span>
            <b>Region: </b>
            {item.region}
          </span>
          <span>
            <b>Capital: </b>
            {item.capital}
          </span>
        </div>
      </div>
    );
  });
  return <div className="countries_container">{countries}</div>;
}
