import React, { Component } from "react";
import Slider from "react-slick";
import bigP0 from "./shopImages/bigP0.jpg";
import bigP1 from "./shopImages/bigP1.jpg";
import bigP2 from "./shopImages/bigP2.jpg";
import bigP3 from "./shopImages/bigP3.jpg";
import smallP0 from "./shopImages/smallP0.jpg";
import smallP1 from "./shopImages/smallP1.jpg";
import smallP2 from "./shopImages/smallP2.jpg";
import smallP3 from "./shopImages/smallP3.jpg";

export default class SliderSection extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }
  render() {
    return (
      <div className="medium-up-one-half grid_item">
        <div className="product_photos">
          {/* Üst Slider başlangıç */}

          <div className="product_main-photos">
            <Slider
              infinite={false}
              asNavFor={this.state.nav2}
              ref={(slider) => (this.slider1 = slider)}
              adaptiveHeight={true}
            >
              <div>
                <img src={bigP0} alt="index resim" />
              </div>
              <div>
                <img src={bigP1} alt="index resim" />
              </div>
              <div>
                <img src={bigP2} alt="index resim" />
              </div>
              <div>
                <img src={bigP3} alt="index resim" />
              </div>
            </Slider>
          </div>

          {/* Alt slider başlangıç */}
          <div className="product_thumbs product_thumbs-below">
            <Slider
              asNavFor={this.state.nav1}
              ref={(slider) => (this.slider2 = slider)}
              slidesToShow={3}
              swipeToSlide={true}
              focusOnSelect={true}
              infinite={false}
              adaptiveHeight={true}
            >
              <img src={smallP0} alt="index resim" />

              <img src={smallP1} alt="index resim" />

              <img src={smallP2} alt="index resim" />

              <img src={smallP3} alt="index resim" />
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
