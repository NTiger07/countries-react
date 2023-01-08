import React from "react";
import Header from "./Header";
// import SearchFilter from "./SearchFilter";
// import CountriesContainer from "./CountriesContainer";
import CountriesDetails from "./CountriesDetails";
import "../App.css";

export default function App() {
  return (
    <div className="main_container">
      <Header />
      <CountriesDetails />
      {/* <SearchFilter />
      <CountriesContainer /> */}
    </div>
  );
}
