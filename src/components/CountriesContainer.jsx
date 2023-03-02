import React from "react";
import { Link } from "react-router-dom";
import CountriesItem from "./CountriesItem";
import Error from "./Error";
import LoadingSpinner from "./LoadingSpinner";
import SearchFilter from "./SearchFilter";
import "./CountriesContainer.css";

export default function CountriesContainer(props) {
  return (
    <div className="countries_container" id="containtest">
      <SearchFilter
        setSearchValue={props.setSearchValue}
        setFilterValue={props.setFilterValue}
      />
      <div className="countries_container-content">
        {props.countries || props.countries.length === 0 ? (
          props.countries.map((country) => (
            <Link to={`/countries/${country.ccn3}`}>
              <CountriesItem
                key={country.ccn3}
                flag={country.flags.png}
                name={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            </Link>
          ))
        ) : (
          <Error />
        )}
        {props.isLoading && (
          <div className="loading_container">
            <LoadingSpinner />
          </div>
        )}
      </div>
    </div>
  );
}
