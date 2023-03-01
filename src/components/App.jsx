import React, { useState, useEffect } from "react";
import Axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import CountriesContainer from "./CountriesContainer";
import CountriesDetails from "./CountriesDetails";
import "../App.css";

export default function App() {
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
    if (resultJson) {
      setCountries(resultJson);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getCountry(searchValue, filterValue);
  }, [searchValue, filterValue]);

  return (
    <div className="main_container">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <CountriesContainer
                  countries={countries}
                  isLoading={isLoading}
                  setSearchValue={setSearchValue}
                  setFilterValue={setFilterValue}
                />
              </>
            }
          />
          <Route
            path="/countries/:id"
            element={
              <>
                <Header />
                <CountriesDetails countries={countries} />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
