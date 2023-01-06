import React from "react";
import Header from "./Header";
import SearchFilter from "./SearchFilter";
import CountriesContainer from "./CountriesContainer";
import "../App.css";

export default function App() {
  return (
    <div className="main_container">
      <Header />
      <SearchFilter />
      <CountriesContainer />
    </div>
  );
}
