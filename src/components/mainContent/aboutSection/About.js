import React from "react";
import { Parallax } from "react-parallax";
import bigPlaceholder from "../../../images/bigPlaceHolder.jpg";

export default function About() {
  return (
    <div className="index-section-flush">
      <Parallax
        bgImage={bigPlaceholder}
        className="parallax-container"
        strength={-150}
      >
        <div className="black-card">
          <p>Hakkında</p>
          <h2>Atalay</h2>
          <div>
            As a life-long creator I know how challenging the editing process
            can be. That's why I decided to build tools which help you level up
            your work while saving time along the way.
          </div>
        </div>
      </Parallax>
    </div>
  );
}
