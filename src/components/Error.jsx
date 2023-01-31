import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";
import arrow from "../assets/arrow-left.svg";

export default function Error() {
  return (
    <div>
      <>
        <Link to="/">
          <button id="backButton">
            <span>
              <img src={arrow} alt="arrow" />
              Back
            </span>
          </button>
        </Link>
        <h1>Error 404</h1>
      </>
    </div>
  );
}
