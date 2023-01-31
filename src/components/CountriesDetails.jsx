import React from "react";
import { Link, useParams } from "react-router-dom";
import Error from "./Error";
import countries from "./countries";
import "./CountriesDetails.css";
import arrow from "../assets/arrow-left.svg";

export default function CountriesDetails() {
  const { id } = useParams();
  const country = countries.find((c) => String(c.id) === id);

  if (!country) {
    return <Error />;
  }
  return (
    <div className="countries_details-container">
      <Link to="/">
        <button id="backButton">
          <span>
            <img src={arrow} alt="arrow" />
            Back
          </span>
        </button>
      </Link>
      <div className="details_container">
        <div className="details_image">
          <img src={country.flag} alt="country-flag" />
        </div>
        <div className="details_content">
          <h1>{country.name}</h1>
          <div className="points-container">
            <div className="content_pointsone">
              <span>
                <b>Native Name: </b>
                {country.capital}
              </span>
              <span>
                <b>Population: </b>
                {country.population}
              </span>
              <span>
                <b>Region: </b>
                {country.region}
              </span>
              <span>
                <b>Sub Region: </b>
                {country.region}
              </span>
              <span>
                <b>Capital: </b>
                {country.capital}
              </span>
            </div>
            <div className="content_pointstwo">
              <span>
                <b>Top Level Domain: </b>-
              </span>
              <span>
                <b>Currencies: </b>-
              </span>
              <span>
                <b>Languages: </b>
                {country.languages}
              </span>
            </div>
          </div>
          <div className="details_border">
            <b>Border Countries: </b>
            <span>-</span>
            <span>-</span>
            <span>-</span>
          </div>
        </div>
      </div>
    </div>
  );
}
