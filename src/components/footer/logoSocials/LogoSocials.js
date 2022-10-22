import React from "react";
import LogoPng from "../../../images/logoBrand.png";
import { SocialIcon } from "react-social-icons";

export default function LogoSocials() {
  return (
    <div className="row col-md-2  mb-4">
      {/* Logo Image */}
      <div className="col  col-md-12 ">
        <a href="/">
          <img alt="logo" src={LogoPng} className="img-fluid" />
        </a>
      </div>
      {/* Logo Image  */}

      {/* Social Media Icons */}
      <div className="col col-md-12 d-flex justify-content-md-center justify-content-end ">
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">
            <SocialIcon
              url="https://www.youtube.com/channel/UCAcHYaoAcxU5H39NrIGq-sQ"
              bgColor="transparent"
              fgColor="#fb6304"
            />
          </li>

          <li className="list-group-item">
            <SocialIcon
              url="https://www.instagram.com/krhnatalay/"
              bgColor="transparent"
              fgColor="#fb6304"
            />
          </li>
        </ul>
      </div>
      {/* Social Media Icons */}
    </div>
  );
}
