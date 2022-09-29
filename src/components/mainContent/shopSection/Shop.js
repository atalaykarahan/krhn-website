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

import Form from "react-bootstrap/Form";

export default class Shop extends Component {
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
      <div className="index-section">
        <div className="page-width">
          <div className="grid">
            {/* Slider başlangıç */}
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

            {/* Satın alma kısmı */}
            <div className="medium-up-one-half grid_item">
              <div className="product-single_meta">
                <div className="krhn-h1 product-single_title">WEB SITESI</div>

                <span className="product_price">1499₺</span>

                {/* Ayraç */}
                <hr className="hr-medium" />

                {/* Form başlangıç */}
                <Form className="product-single_form">
                  <div className="variant-wrapper variant-wrapper-dropdown">
                    <label className="variant_label">Site turu</label>

                    <div className="variant-input-wrap">
                      <select>
                        <option className="variant-input">Statik</option>
                        <option className="variant-input">Dinamik</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    style={{ color: "white" }}
                    className="add-to-cart-secondary add-to-cart krhn-btn btn-full"
                  >
                    SEPETE EKLE
                  </button>
                </Form>

                {/* Daha fazla bilgi edin düğmesi */}
                <div className="product-single_description rte">
                  <p>
                    <a href="/" className="text-link">
                      Daha Fazla Bilgi Edin
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
