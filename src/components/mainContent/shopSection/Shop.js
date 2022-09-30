import SliderSection from "./SliderSection";
import AddToCartSection from "./AddToCartSection";
import React, { Component } from "react";

export default class Shop extends Component {
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
