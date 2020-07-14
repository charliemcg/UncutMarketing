import React from "react";
import strings from "./strings";
import "../../styles/sass/quote.scss";

export default function Quote() {
  return (
    <div id="quote-relativity-wrapper">
      <img src="Desk.png" id="quote-background-img" alt={strings.deskAlt} />
      <div id="quote-wrapper">
        <div id="quote-left">
          <div id="quote-top">{strings.quote}</div>
          <div id="quote-bottom">{strings.ceo}</div>
        </div>
        <div id="quote-right">
          <img
            id="quote-ceo-img"
            src="CEOImage.png"
            alt={strings.ceoImageAlt}
          />
        </div>
      </div>
    </div>
  );
}
