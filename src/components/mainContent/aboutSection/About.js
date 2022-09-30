import React from "react";
import bigPlaceholder from "../../../images/bigPlaceHolder.jpg";
export default function About() {
  return (
    <div className="index-section-flush">
      <div className="background-media-text">
        <div className="background-media-text_container">
          <div className="parallax-container">
            <div
              className="parallax-image background-media-text_image lazyloaded"
              style={{ backgroundImage: `url( ${bigPlaceholder} )` }}
            />
          </div>
        </div>
      </div>

    <div
    className="background-media-text_spacer"
    ></div>

    </div>
  );
}
