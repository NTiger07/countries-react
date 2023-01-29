import React from "react";
import { Link } from "react-router-dom";
import CountriesItem from "./CountriesItem";
import countries from "./countries";
import "./CountriesContainer.css";
import SearchFilter from "./SearchFilter";

export default function CountriesContainer() {
  return (
    <div className="countries_container">
      <SearchFilter />
      <div className="countries_container-content">
        {countries.map(({ id, name, capital, population, flag, region }) => (
          <Link to={`/countries/${id}`}>
            <CountriesItem
              key={id}
              flag={flag}
              name={name}
              population={population}
              region={region}
              capital={capital}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
