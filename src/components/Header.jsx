import React from "react";
import moon from "../assets/moon.svg";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="header_container" id="test">
      <h1>Where in the world?</h1>
      <span onClick={props.toggle}>
        <img src={moon} alt="moon" className="svgs" />
        Dark mode
      </span>
    </div>
  );
}
