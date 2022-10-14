import React from "react";
import SectionPrimary from "./sections/SectionPrimary";
import SectionSecondary from "./sections/SectionSecondary";

export default function StatikTemplate() {
  return (
    <div className="krhn-template_container">
      {/* Main Page Header  */}
      <div className="text-center ">
        <h1 className="text-uppercase krhn-template_header">Your Header</h1>

        <div className="d-flex justify-content-center">
          <div className="krhn-header_inner">
            <p className="header-explain">
              Web siteleri dinamik ve statik olarak ikiye ayrılmaktadır. Alt
              yapısı, sunucu ilişkileri, kullanıcı etkileşimi, yönetici panel
              imkanları ve güncelleme yetenekleri bir web sitesinin dinamik ya
              da statik durumunu belirler.
            </p>
          </div>
        </div>
      </div>

      {/* ---- Sections ---- */}

      <SectionPrimary />
      <SectionSecondary />
    </div>
  );
}
