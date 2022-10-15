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
      {
        topHeader: "Çok fazla içerik var hangisini koymalıyım",
        header: "Karar veremiyorum",
        text: "Portfolyo sitenizin en önemli bölümünü geçmiş çalışmalarınız oluşturur. Bundan dolayı çeşitli beceri ve projelerinizi koymalısınız yalnız en iyi çalışmalarınızı eklemeye özen gösterin.",
      },
      {
        topHeader: "Porfolyo sitesi gerekli mi",
        header: "Gerçekten buna ihtiyacım var mı",
        text: "Portfolyolar sayesinde yaratıcı çalışmalar profesyonelce sergilenebilir. İnsanlar tam olarak kim olduğunuzu ve neler başarabileceğinizi gösterebilmeniz için son derece önemlidir.",
      },
      {
        topHeader: "Değişmeyen tek şey değişimin kendisi",
        header: "Portfolyomu nasıl güncellerim",
        text: "Bunun için 2 seçeneğiniz var ya dinamik bir site almışsınızdır ve telefondan bile halledebilirsiniz. ya da Statik bir site almışsınızdır ve bilgisayar ile kaynak kodlarını düzenlemeniz gerekmektedir.",
      },
      {
        topHeader: "Kaynak mı o da ne?",
        header: "Kaynak kodu nedir?",
        text: "Ben kaynak kodundan anlamam bunun daha basit bir yolu yok mu? diye düşünüyorsanız merak etmeyin statik site alanlara kaynak kodunda nasıl düzenleme yapılacağını elimden geldiğince göstermeye çalışıcam",
      },
      {
        topHeader: "Kaynak kodu ile uğraşmak istemiyorum",
        header: "Bunun daha basit bir yolu olmalı.",
        text: "Tüm bunlara rağmen “bilgisayar ile uğraşmak istemiyorum” diyorsanız size tavsiyem sitenizi dinamik olarak almanız.",
      },
      {
        topHeader: "Dinamik sayfa mı?",
        header: "Dinamik sayfa",
        text: "Temel olarak dinamik sayfa kaynak koduna müdahale gerekmeksizin sizin sonradan istediğiniz istekleri yerine getirebilecek bir düzeydedir. Daha fazla bilgi için Dinamik sayfalardaki örneklere bakabilirsiniz.",
      },
    ],
  };

  return (
    <div>
      <StatikTemplate {...props} />
      {/* Bonus kısım buraya eklenecek */}
    </div>
  );
}
