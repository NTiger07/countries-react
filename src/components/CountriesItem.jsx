import React from "react";
import { Link } from "react-router-dom";
import "./CountriesItem.css";

export default function CountriesItem(props) {
  return (
    <Link to="/details">
      <div className="countries_item">
        <div className="countries_image">
          <img src={props.flag} alt="country_image" />
        </div>
        <div className="countries_content">
          <h1>{props.name}</h1>
          <span>
            <b>Population: </b>
            {props.population}
          </span>
          <span>
            <b>Region: </b>
            {props.region}
          </span>
          <span>
            <b>Capital: </b>
            {props.capital}
          </span>
        </div>
      </div>
    </Link>
  );
}
