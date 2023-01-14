import React from "react";
import { Link } from "react-router-dom";
import CountriesItem from "./CountriesItem";
import data from "./data";
import "./CountriesContainer.css";
import SearchFilter from "./SearchFilter";

export default function CountriesContainer() {
  const countries = data.slice(0, 8).map((item) => {
    return (
      <>
        {/* <Link to="/details"> */}
        <CountriesItem />
        {/* </Link> */}
      </>
    );
  });
  return (
    <div className="countries_container">
      <SearchFilter />
      <div className="countries_container-content">{countries}</div>
    </div>
  );
}
