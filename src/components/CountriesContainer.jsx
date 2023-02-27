import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import CountriesItem from "./CountriesItem";
import countriesData from "./countries";
import "./CountriesContainer.css";
import SearchFilter from "./SearchFilter";

export default function CountriesContainer(props) {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  const getCountry = async (searchValue) => {
    // setIsLoading(false);
    const urlsearch = `https://api.countries.com/search=${searchValue}filter=${filterValue}`;
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
    getCountry(searchValue);
  }, [searchValue]);
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
      </div>
    </div>
  );
}
