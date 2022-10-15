import React from "react";
import SectionPrimary from "./sections/SectionPrimary";
import SectionSecondary from "./sections/SectionSecondary";

export default function StatikTemplate(props) {
  return (
    <div className="krhn-template_container">
      {/* Main Page Header  */}
      <div className="text-center ">
        <h1 className="text-uppercase krhn-template_header">{props.header}</h1>

        <div className="d-flex justify-content-center">
          <div className="krhn-header_inner">
            <p className="header-explain">{props.headerUnderText}</p>
          </div>
        </div>
      </div>

      {/* ---- Sections ---- */}

      {props.sections
        ? props.sections.map((sectionPart, index) =>
            index % 2 === 0 ? (
              <SectionPrimary key={index} sections={sectionPart} />
            ) : (
              <SectionSecondary key={index} sections={sectionPart} />
            )
          )
        : null}
    </div>
  );
}
