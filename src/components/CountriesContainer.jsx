import React from "react";
import { Link } from "react-router-dom";
import CountriesDetails from "./CountriesDetails";
import data from "./data";
import "./CountriesContainer.css";

export default function CountriesContainer() {
  const countries = data.slice(0, 8).map((item) => {
    return (
      <Link to="/details">
        <div className="countries_item">
          <div className="countries_image">
            <img src={item.flag} alt="country_image" />
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
      </Link>
    );
  });
  return <div className="countries_container">{countries}</div>;
}
