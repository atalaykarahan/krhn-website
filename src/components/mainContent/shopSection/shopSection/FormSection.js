import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";

export default function FormSection(props) {
  const options = [{ value: "1499₺" }, { value: "4799₺" }];

  const [selected, setSelected] = useState(options[0].value);

  useEffect(() => {
    props.veriTasi(selected);
  });

  const handleChange = (event) => {
    event.preventDefault();
    setSelected(event.target.value);
  };
  return (
    <Form className="product-single_form">
      <div className="variant-wrapper variant-wrapper-dropdown">
        <label className="variant_label">Site turu</label>

        <div className="variant-input-wrap">
          <select value={selected} onChange={handleChange}>
            <option value={options[0].value} className="variant-input">
              Statik
            </option>
            <option value={options[1].value} className="variant-input">
              Dinamik
            </option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="add-to-cart-secondary add-to-cart krhn-btn btn-full"
      >
        SEPETE EKLE
      </button>
    </Form>
  );
}
