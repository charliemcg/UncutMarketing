import React from "react";
import strings from "./strings";
import "../../styles/sass/main.scss";
import Typewriter from "typewriter-effect";

export default function Main() {
  return (
    <div id="main-wrapper">
      <img src="Skyline.png" alt={strings.skylineAlt} id="main-img" />
      <div id="main-overlay-wrapper">
        <div id="main-quote">
          <Typewriter
            options={{
              strings: [strings.weMakePeople],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div id="main-btn-wrapper">
          <button
            id="main-contact-btn"
            onClick={() =>
              document
                .getElementById("contact-wrapper")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            {strings.getInTouch}
          </button>
        </div>
      </div>
    </div>
  );
}
