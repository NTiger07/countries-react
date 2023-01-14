import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import SearchFilter from "./SearchFilter";
import CountriesContainer from "./CountriesContainer";
import "../App.css";
import CountriesDetails from "./CountriesDetails";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="main_container">
                <Header />
                <CountriesContainer />
              </div>
            }
          />
          <Route path="details" element={<CountriesDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
