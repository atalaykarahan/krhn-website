import React from "react";
import StatikTemplate from "../template/StatikTemplate";

export default function MenuStatik() {
  const props = {
    header: "MENÜ SİTELERİ",
    headerUnderText:
      "Cumhurbaşkanlığı kararnamesi ile işletmeler, dijital veya tek kullanımlık menü kullanmak zorunda bırakıldı. Bu yönetmelik ile cafe ve restorantlar için QR kodlu menü veya QR menü patlaması yaşandı. Dijital menü oluşturabileceğiniz web siteleri ile hem müşterilerinize farklılaştırılmış hizmet verebilir hem de dijital dünyada potansiyel müşterilerinize erişebilirsiniz.",
      sections:[]
  };

  return (
    <div>
      <StatikTemplate {...props} />
    </div>
  );
}
