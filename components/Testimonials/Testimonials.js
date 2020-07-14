import React from "react";
import strings from "./strings";
import "../../styles/sass/testimonials.scss";

export default function Testimonials() {
  return (
    <div id="testimonials-wrapper">
      {strings.testimonials.map((testimonial, i) => {
        return (
          <div key={i} id="testimonial-item">
            <div id="testimonial-logo-wrapper">
              <img id="testimonial-logo" src="Logo.png" alt={strings.logoAlt} />
            </div>
            <div id="testimonial-company">{testimonial.company}</div>
            <div id="testimonial-description">{testimonial.description}</div>
          </div>
        );
      })}
    </div>
  );
}
