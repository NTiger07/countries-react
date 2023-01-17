import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import CountriesContainer from "./CountriesContainer";
import CountriesDetails from "./CountriesDetails";
import "../App.css";

export default function App() {
  return (
    <div className="main_container">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <CountriesContainer />
              </>
            }
          />
          <Route
            path="details"
            element={
              <>
                <Header />
                <CountriesDetails />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
