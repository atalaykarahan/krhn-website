import SliderSection from "./sliderSection/SliderSection";
import AddToCartSection from "./shopSection/AddToCartSection";
import React, { Component } from "react";

export default class ShopMain extends Component {
  render() {
    return (
      <div className="index-section">
        <div className="page-width">
          <div className="grid">
            {/* Slider başlangıç */}

            <SliderSection />

            {/* Sepete ekleme kısmı */}

            <AddToCartSection />
          </div>
        </div>
      </div>
    );
  }
}
