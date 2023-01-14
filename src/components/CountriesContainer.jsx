import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import CountriesDetails from "./CountriesDetails";
import CountriesItem from "./CountriesItem";
import data from "./data";
import "./CountriesContainer.css";

export default function CountriesContainer() {
  const countries = data.slice(0, 8).map((item) => {
    return (
      <>
        <Link to="/details">
          <CountriesItem />
        </Link>
        <CountriesDetails />
      </>
    );
  });
  return <div className="countries_container">{countries}</div>;
}
