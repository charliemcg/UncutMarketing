import React from "react";
import strings from "./strings";
import "../../styles/sass/services.scss";
import Carousel from "./Carousel";
import ServiceItem from "./ServiceItem";

export default function Services() {
  return (
    <div id="services-wrapper">
      <div id="services-first-paragraph">{strings.nobodyKnowsYourBusiness}</div>
      <div id="services-second-paragraph">{strings.thatsWhatWeDo}</div>
      <div id="services-third-paragraph">{strings.weCreateCompletely}</div>
      <div style={{ width: "100%" }}>
        <Carousel />
      </div>
      <div id="service-items-wrapper">
        {strings.serviceItemArr.map((service, i) => (
          <ServiceItem key={i} details={service} />
        ))}
      </div>
    </div>
  );
}
