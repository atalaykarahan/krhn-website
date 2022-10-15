import React from "react";
import MenuSection from "./MenuSection";
import LegalSection from "./LegalSection";

export default function MenuLegals() {
  return (
    <div className="row col-sm-12 col-md-10 d-flex justify-content-end">
      {/*  Menu  */}
      <div className="col-sm-12 col-md-5 mb-4">
        <MenuSection />
      </div>

      {/* Menu end */}

      {/*  Legals */}
      <div className="col-sm-12 col-md-2 mb-4 ">
        <LegalSection />
      </div>

      {/* legals end */}
    </div>
  );
}
