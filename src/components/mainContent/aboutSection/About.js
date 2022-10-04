import React from "react";
import {Parallax} from 'react-parallax';
import bigPlaceholder from "../../../images/bigPlaceHolder.jpg";
export default function About() {

  return (
    <div className="index-section-flush">
       <Parallax bgImage={bigPlaceholder}>
        <div style={{ height: 550 }}>
        <div> Test yazısı buraya geleckek hadi bakalım</div>
        </div>
       </Parallax>
    </div>
  );
}
