import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import CountriesContainer from "./CountriesContainer";
import CountriesDetails from "./CountriesDetails";
import "../App.css";

export default function App() {
  const [lightmode, setLightmode] = React.useState(true);
  async function toggle() {
    setLightmode(!lightmode);
    console.log("toggled");
  }
  return (
    <div className="main_container">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header toggle={toggle} lightmode={lightmode} />
                <CountriesContainer />
              </>
            }
          />
          <Route
            path="/countries/:id"
            element={
              <>
                <Header toggle={toggle} lightmode={lightmode} />
                <CountriesDetails />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
