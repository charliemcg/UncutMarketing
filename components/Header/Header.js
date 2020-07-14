import React from "react";
import strings from "./strings";
import "../../styles/sass/header.scss";

export default function Header() {
  return (
    <div id="header-wrapper">
      <a href="#header-wrapper">
        <img src="/UncutLogo.png" alt={strings.logoAlt} id="header-logo" />
      </a>
      <div id="header-right">
        <div id="header-phone">{strings.phone}</div>
        <div id="header-navbar">
          {strings.links.map((string, i) => (
            <div
              key={i}
              className="header-link"
              // smooth scroll to component on click
              onClick={() =>
                //need to figure out which component to scroll to based on the string that's passed in
                document
                  .getElementById(
                    string === "Home"
                      ? "main-wrapper"
                      : `${string.toLowerCase()}-wrapper`
                  )
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              {string}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
