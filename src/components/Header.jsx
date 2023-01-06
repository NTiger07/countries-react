import React from "react";
import moon from "../assets/moon.svg";
import "./Header.css";

export default function Header() {
  return (
    <div className="header_container">
      <h1>Where in the world?</h1>
      <span>
        <img src={moon} alt="moon" className="svgs"/>
        Dark mode
      </span>
    </div>
  );
}
