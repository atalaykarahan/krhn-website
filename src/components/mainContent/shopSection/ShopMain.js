import SliderSection from "./sliderSection/SliderSection";
import React, { Component } from "react";

export default class ShopMain extends Component {
  render() {
    return (
      <div className="index-section">
        <div className="page-width">
          <div className="grid">
            {/* Slider başlangıç */}

            <SliderSection />
          </div>
        </div>
      </div>
    );
  }
}
