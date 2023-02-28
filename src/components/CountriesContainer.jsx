import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import CountriesItem from "./CountriesItem";
import LoadingSpinner from "./LoadingSpinner";
import SearchFilter from "./SearchFilter";
import "./CountriesContainer.css";

export default function CountriesContainer(props) {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("/all");
  const [filterValue, setFilterValue] = useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const getCountry = async (searchValue, filterValue) => {
    setIsLoading(true);
    const urlsearch = `https://restcountries.com/v3.1${searchValue}`;
    const result = await Axios.get(urlsearch).catch(() => {
      setIsLoading(true);
    });
    const resultJson = await result.data;
    console.log(resultJson);
    if (resultJson) {
      setCountries(resultJson);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getCountry(searchValue, filterValue);
  }, [searchValue, filterValue]);
  return (
    <div className="countries_container" id="containtest">
      <SearchFilter
        setSearchValue={setSearchValue}
        setFilterValue={setFilterValue}
      />
      <div className="countries_container-content">
        {countries.map((country) => (
          <Link to={`/countries/${country.ccn3}`}>
            <CountriesItem
              key={country.ccn3}
              flag={country.flag.png}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          </Link>
        ))}
        {isLoading && (
          <div className="loading_container">
            <LoadingSpinner />
          </div>
        )}
      </div>
    </div>
  );
}
