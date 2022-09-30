import React, { useState } from "react";
import FormSection from "./FormSection";

import MoreInformation from "./MoreInformation";
export default function AddToCartSection() {
  const [upSelected, setUpSelected] = useState();

  return (
    <div className="medium-up-one-half grid_item">
      <div className="product-single_meta">
        <div className="krhn-h1 product-single_title">WEB SITESI</div>

        <span className="product_price">{upSelected}</span>

        {/* Ayraç */}
        <hr className="hr-medium" />

        {/* Form başlangıç */}
        <FormSection
          veriTasi={(veri) => {
            setUpSelected(veri);
          }}
        />

        {/* Daha fazla bilgi edin düğmesi */}

        <MoreInformation />
      </div>
    </div>
  );
}
