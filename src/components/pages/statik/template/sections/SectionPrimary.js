import React from "react";

export default function SectionPrimary(props) {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="row g-0 krhn-template_section">
        {/* --- Sol kısım */}
        <div className="col krhn-template_tside">
          <div>
            <p className="template-section-summary">
              {props.sections.topHeader}
            </p>
          </div>
          <h3 className="template-section_header text-uppercase">
            {props.sections.header}
          </h3>
          <p className="template-section_text">{props.sections.text}</p>
        </div>

        {/* --- Sağ kısım  */}
        <div className="col">
          <img
            className="img-fluid"
            style={{ minWidth: 336 }}
            alt="example"
            height={396}
            src="https://cdn.shopify.com/s/files/1/0509/4522/8956/files/GIF_16x9_Responsive_Scaling_401eaa39-b438-4b87-b158-deb6993da7e5_1024x1024.gif?v=1653327814"
          />
        </div>
      </div>
    </div>
  );
}
