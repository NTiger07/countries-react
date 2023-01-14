import React from "react";
import Header from "./Header";
import CountriesContainer from "./CountriesContainer";
import "../App.css";

export default function App() {
  return (
    <div className="main_container">
      <Header />
      <CountriesContainer />
    </div>
  );
}
