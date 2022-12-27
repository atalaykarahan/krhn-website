import ProductHeader from "./ProductHeader";
import React, { Component } from "react";

import SwitcherPrimary from "./SwitcherPrimary";
import SwitchSecondary from "./SwitchSecondary";

class Products extends Component {
  render() {
    return (
      <div className="index-section">
        {/* Section Header kısmı */}
        <ProductHeader />

        <div className="page-width">
          {/* burada 2 adet div var bir tanesi gizli olucak ve yukarıdaki dinamik veya statik düğmelerine göre gözükecek */}

          {/* Statik Switcher */}
          <SwitcherPrimary />

          {/* Dinamik Switcher */}
          <SwitchSecondary />
        </div>
      </div>
    );
  }
}

export default Products;
