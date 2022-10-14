import React from "react";

export default function SectionSecondary() {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="row d-flex flex-wrap-reverse g-0 krhn-template_section">
        {/* --- Sol kısım */}

        <div className="col">
          <img
            className="img-fluid"
            style={{ minWidth: 336 }}
            alt="example"
            height={396}
            src="https://cdn.shopify.com/s/files/1/0509/4522/8956/files/GIF_16x9_Responsive_Scaling_401eaa39-b438-4b87-b158-deb6993da7e5_1024x1024.gif?v=1653327814"
          />
        </div>
        {/* --- Sağ kısım  */}
        <div className="col krhn-template_tside">
          <div>
            <p className="template-section-summary">
              Akılda kalıcı küçük özet bir yazı
            </p>
          </div>
          <h3 className="template-section_header">Mini bir başlık</h3>
          <p className="template-section_text">
            Web siteleri dinamik ve statik olarak ikiye ayrılmaktadır. Alt
            yapısı, sunucu ilişkileri, kullanıcı etkileşimi, yönetici panel
            imkanları ve güncelleme yetenekleri bir web sitesinin dinamik ya da
            statik durumunu belirler.
          </p>
        </div>
      </div>
    </div>
  );
}
