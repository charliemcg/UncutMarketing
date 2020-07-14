import React from "react";

export default function ServiceItem(props) {
  const { logo, title, description } = props.details;
  return (
    <div id="service-item-wrapper">
      <div id="service-item-img-wrapper">
        <img id="service-item-img" src={logo} alt={`${title} icon`} />
      </div>
      <div id="service-item-details">
        <div id="service-item-title">{title}</div>
        <div id="service-item-description">{description}</div>
      </div>
    </div>
  );
}
