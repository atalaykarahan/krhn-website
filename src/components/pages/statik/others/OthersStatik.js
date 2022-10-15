import React from "react";
import StatikTemplate from "../template/StatikTemplate";

export default function OthersStatik() {
  const props = {
    header: "BEN BAŞKA BİR SİTE İÇİN BAKMIŞTIM",
    headerUnderText:
      "Cumhurbaşkanlığı kararnamesi ile işletmeler, dijital veya tek kullanımlık menü kullanmak zorunda bırakıldı. Bu yönetmelik ile cafe ve restorantlar için QR kodlu menü veya QR menü patlaması yaşandı. Dijital menü oluşturabileceğiniz web siteleri ile hem müşterilerinize farklılaştırılmış hizmet verebilir hem de dijital dünyada potansiyel müşterilerinize erişebilirsiniz.",
    section: [],
  };

  return (
    <div>
      <StatikTemplate {...props} />

      {/* Bonus Section */}
      {/* <div className="d-flex justify-content-center my-5">
        <div className="g-0 krhn-template_section">
          <div className="krhn-template_tside mx-5">
            <div>
              <p className="template-section-summary">Bonus</p>
            </div>
            <h3 className="template-section_header">Bedava QR kod</h3>
            <p className="template-section_text">
              Sitenizin yanında size özel QR kod hediyemizdir. Bunu bir sticker
              haline getirip istediğiniz yere yapıştırabilir veya masalarınıza
              metal baskı halinde koyabilirsiniz.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
