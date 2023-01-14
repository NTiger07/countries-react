import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "./CountriesDetails.css";
import arrow from "../assets/arrow-left.svg";

export default class CountriesDetails extends Component {
  render() {
    return (
      <>
        {" "}
        <Header />
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
              <img src={this.props.flag} alt="country-flag" />
            </div>
            <div className="details_content">
              <h1>{this.props.name}</h1>
              <div className="points-container">
                <div className="content_pointsone">
                  <span>
                    <b>Native Name: </b>
                    {this.props.capital}
                  </span>
                  <span>
                    <b>Population: </b>
                    {this.props.population}
                  </span>
                  <span>
                    <b>Region: </b>
                    {this.props.region}
                  </span>
                  <span>
                    <b>Sub Region: </b>
                    {this.props.region}
                  </span>
                  <span>
                    <b>Capital: </b>
                    {this.props.capital}
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
                    {this.props.languages}
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
      </>
    );
  }
}
