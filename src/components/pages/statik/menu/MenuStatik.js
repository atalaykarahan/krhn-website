import React from "react";
import StatikTemplate from "../template/StatikTemplate";
import specialCoffePub_Gif from "../../../../gif/specialCoffePub.gif"
export default function MenuStatik() {
  const props = {
    header: "MENÜ SİTELERİ",
    headerUnderText:
      "Cumhurbaşkanlığı kararnamesi ile işletmeler, dijital veya tek kullanımlık menü kullanmak zorunda bırakıldı. Bu yönetmelik ile cafe ve restorantlar için QR kodlu menü veya QR menü patlaması yaşandı. Dijital menü oluşturabileceğiniz web siteleri ile hem müşterilerinize farklılaştırılmış hizmet verebilir hem de dijital dünyada potansiyel müşterilerinize erişebilirsiniz.",
    sections: [
      {
        topHeader: "Aklınızda ne varsa",
        header: "Dilediğiniz Tarzda",
        text: "Cafe web sitesi, restorant web sitesi, bar web sitesi, pub web sitesi derken aslında hemen hemen hepsi aynı alt yapı ve aynı mantıkla çalışan web siteleri kullanıyor.",
        image: specialCoffePub_Gif
      },
      {
        topHeader: "Statik mi Dinamik mi",
        header: "Hangisi bana uygun",
        text: "Aralarındaki fark sadece admin paneli olmasından kaynaklanıyor. Peki ama dinamik veya statik nedir?",
      },
      {
        topHeader: "Sil baştan menü yap ya da..",
        header: "Tekrar tekrar menü yapmaya son",
        text: "Şu şekilde düşünelim günümüz türkiyesinde neredeyse her ay fiyat güncellemek zorunda kalan kafe, restorant var. Sürekli olarak yeni menü basmak veya billboardları güncellemek bir yerden sonra can sıkıcı bir duruma gelebilir.",
      },
      {
        topHeader: "Acilen fiyat güncellemeliyim",
        header: "Yeni Fiyatları daha kolay yazın",
        text: "Bunun daha kolay bir yolu olarak. Fiyat listenizi bir internet sitesinde tutup dilediğiniz saat bilgisayar yardımıyla sitenizin kaynak kodlarını düzenleyip fiyatlarınızı güncelleyebilirsiniz.",
      },
      {
        topHeader: "Kaynak mı o da ne?",
        header: "Kaynak kodu nedir?",
        text: "Ben kaynak kodundan anlamam bunun daha basit bir yolu yok mu? diye düşünüyorsanız merak etmeyin statik site satın alanlara kaynak kodunda nasıl düzenleme yapılacağını sitenizi kurduktan hemen sonra göstericem.",
      },
      {
        topHeader: "Kaynak kodu ile uğraşmak istemiyorum",
        header: "Bunun daha basit bir yolu olmalı.",
        text: "Tüm bunlara rağmen “bilgisayar ile uğraşmak istemiyorum” diyorsanız size tavsiyem sitenizi dinamik olarak almanız.",
      },
    ],
  };

  return (
    <div>
      <StatikTemplate {...props} />

      {/* Bonus Section */}
      <div className="d-flex justify-content-center my-5">
        <div className="g-0 krhn-template_section">
          <div className="krhn-template_tside px-5">
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
      </div>
    </div>
  );
}
