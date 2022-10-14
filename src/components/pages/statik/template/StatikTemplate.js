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
      {props.sections[0] ? (
        <SectionPrimary sections={props.sections[0]} />
      ) : null}

      {props.sections[1] ? (
        <SectionSecondary sections={props.sections[1]} />
      ) : null}
    </div>
  );
}
