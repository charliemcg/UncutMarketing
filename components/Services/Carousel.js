import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import strings from "./strings";

const items = strings.carouselItemArr.map((content, i) => {
  return (
    <div key={i} id="services-carousel">
      <div id="services-headline">{content.headline}</div>
      <div id="services-description">{content.description}</div>
    </div>
  );
});

export default () => (
  <Carousel autoPlay showStatus={false} showThumbs={false} infiniteLoop={true}>
    {items}
  </Carousel>
);
