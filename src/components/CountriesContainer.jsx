import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import CountriesItem from "./CountriesItem";
import LoadingSpinner from "./LoadingSpinner";
import countriesData from "./countries";
import "./CountriesContainer.css";
import SearchFilter from "./SearchFilter";

export default function CountriesContainer(props) {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  const getCountry = async (searchValue, filterValue) => {
    // setIsLoading(false);
    const url = "https://restcountries.com/v3.1/all";
    const urlsearch = `https://restcountries.com/v3.1/name/${searchValue}/region/${filterValue}`;
    console.log(urlsearch);
    // const result = await Axios.get(urlsearch).catch(() => {
    //   setIsLoading(true);
    // });
    // const resultJson = await result.data.results;
    // if (resultJson) {
    //   setCountries(resultJson);
    // }
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
        {countriesData.map(
          ({ id, name, capital, population, flag, region }) => (
            <Link to={`/countries/${id}`}>
              <CountriesItem
                key={id}
                flag={flag}
                name={name}
                population={population}
                region={region}
                capital={capital}
                lightmode={props.lightmode}
              />
            </Link>
          )
        )}
        {isLoading && (
          <div className="loading_container">
            <LoadingSpinner />
          </div>
        )}
      </div>
    </div>
  );
}
