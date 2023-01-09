import React, { Component } from "react";
import "./CountriesDetails.css";
import arrow from "../assets/arrow-left.svg";

export default class CountriesDetails extends Component {
  render() {
    return (
      <>
        <button id="backButton">
          <span>
            <img src={arrow} alt="arrow" />
            Back
          </span>
        </button>
        <div className="countries_details-container">
          <div className="details_image">
            <img src="" alt="country-flag" />
          </div>
          <div className="details_content">
            <h1>Belgium</h1>
            <div className="points-container">
              <div className="content_pointsone">
                <span>
                  <b>Native Name: </b>Belgie
                </span>
                <span>
                  <b>Population: </b>11,319,511
                </span>
                <span>
                  <b>Region: </b>Europe
                </span>
                <span>
                  <b>Sub Region: </b>Western Europe
                </span>
                <span>
                  <b>Capital: </b>Brussels
                </span>
              </div>
              <div className="content_pointstwo">
                <span>
                  <b>Top Level Domain: </b>.be
                </span>
                <span>
                  <b>Currencies: </b>Euro
                </span>
                <span>
                  <b>Languages: </b>Dutch, French, German
                </span>
              </div>
            </div>
            <div className="details_border">
              <span>France</span>
              <span>Germany</span>
              <span>Netherlands</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}
