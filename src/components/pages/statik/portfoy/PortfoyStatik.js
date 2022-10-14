import React from "react";
import StatikTemplate from "../template/StatikTemplate";

export default function PortfoyStatik() {
  const props = {
    header: "PORTFÖY SİTELERİ",
    headerUnderText:
      "Portföy veya portfolyo sitesi en iyi çalışmalarınızı gösterebileceğiniz online bir alandır. Bunun en güzel örneklerinden birisi şu anda bu site. Bu site bir portfolyo sitesi diye geçmektedir. Becerilerinizin fark edilmesi için online portföy oluşturmanız çok önemlidir. Yaratıcı profesyoneller arayan insanlar yeni yetenekler bulmak ve sipariş vermek için sıklıkla internet üzerinde arama yapıp portfolyo sitelerine bakarlar. Eğer bir siteniz yoksa sizi bulamazlar.",
    sections: [
      {
        topHeader: "Porfolyo sitesi nasıl adlandırılır",
        header: "Siteme ne isim versem",
        text: "Bu oldukça kişisel bir seçenek. Bazı kişiler kendi isimlerini seçerken, bazılarıysa daha kolay hatırlanan bir isim için farklı isimler veya kısaltmalar tercih eder.",
      },
      {
        topHeader: "Porfolyo sitemi neye göre yaptırmalıyım",
        header: "Belli başlı istediğim özellikler var",
        text: "Dilerseniz şablon veya kafanızda bir plan varsa istediğinize göre hazırlayabiliriz. Bunun için hoşunuza giden örnek portfolyo site tasarımları, renk paletleri gibi şeyleri bizle paylaşmanız yeterli.",
      },
    ],
  };

  return (
    <div>
      <StatikTemplate {...props} />
    </div>
  );
}
