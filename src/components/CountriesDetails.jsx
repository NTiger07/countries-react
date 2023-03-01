import React from "react";
import { Link, useParams } from "react-router-dom";
import Error from "./Error";
import "./CountriesDetails.css";
import arrow from "../assets/arrow-left.svg";

export default function CountriesDetails(props) {
  const { id } = useParams();
  const country = props.countries.find((c) => String(c.ccn3) === id);

  if (!country) {
    return <Error />;
  }

  return (
    <div className="countries_details-container" id="detailtest">
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
          <img src={country.flags.png} alt="country-flag" />
        </div>
        <div className="details_content">
          <h1>{country.name.official}</h1>
          <div className="points-container">
            <div className="content_pointsone">
              <span>
                <b>Native Name: </b>
                {Object.values(country.name.nativeName)[0].common
                  ? Object.values(country.name.nativeName)[0].common
                  : "N/A"}
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
                {country.subregion}
              </span>
              <span>
                <b>Capital: </b>
                {country.capital}
              </span>
            </div>
            <div className="content_pointstwo">
              <span>
                <b>Top Level Domain: </b>
                {country.tld[0]}
              </span>
              <span>
                <b>Currencies: </b>
                {Object.values(country.currencies)[0].name
                  ? Object.values(country.currencies)[0].name
                  : "N/A"}
              </span>
              <span>
                <b>Languages: </b>
                {Object.values(country.languages)[0]
                  ? Object.values(country.languages)[0]
                  : "N/A"}
              </span>
            </div>
          </div>
          <div className="details_border">
            <b id="head">Border Countries: </b>
            <div id="cont">
              {country.borders
                ? country.borders.map((border) => {
                    return <span>{border}</span>;
                  })
                : "N/A"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
