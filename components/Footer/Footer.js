import React from "react";
import strings from "./strings";
import "../../styles/sass/footer.scss";

export default function Footer() {
  const socialArr = [
    { id: "footer-social", src: "Facebook.png", alt: strings.facebookAlt },
    { id: "footer-social", src: "Linkedin.png", alt: strings.linkedinAlt },
  ];
  return (
    <div id="footer-wrapper">
      <div id="footer-left">
        <div id="footer-social-wrapper">
          {socialArr.map((icon, i) => {
            const { id, src, alt } = icon;
            return (
              <a key={i} href="#">
                <img id={id} src={src} alt={alt} />
              </a>
            );
          })}
        </div>
        <div id="footer-details">
          <div id="footer-phone">{strings.phone}</div>
          <div id="footer-copyright">
            © {new Date().getFullYear()} {strings.company}
          </div>
        </div>
      </div>
      <div id="footer-plug">
        {strings.websiteBy}
        {"\u2004"}
        <span style={{ fontWeight: "bold" }}>{strings.myName}</span>
      </div>
      <div id="footer-right">
        <img id="footer-logo" src="UncutLogo.png" alt={strings.logoAlt} />
      </div>
    </div>
  );
}
