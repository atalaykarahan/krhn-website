import React from "react";
import pencelImage from "../../../images/sss/pencel.png";
import Accordion from "react-bootstrap/Accordion";

export default function Sss() {
  const SssText = [
    {
      icon: pencelImage,
      key: 0,
      header: "Fiyatlar neye göre belirlenmekte",
      text: "Web tasarım fiyatları; İşlenecek olan içerik, sayfa sayısı, Yazılacak olan web site yazılımı web site içinde kaç dil olacağı SSL olup olmama durumu ve çeşitli özel formlara göre fiyatlandırılmaktadır.",
    },
    {
      icon: pencelImage,
      key: 1,
      header: "Web hosting ve domain seçimini siz mi yapıyorsunuz",
      text: "Evet. Sizin yerinize web hosting ve domain seçimi yaparak gerekli tescil işlemlerini gerçekleştirebiliyoruz. Aylık ve birkaç yıllık şekilde yapılabilmektedir. Zamanı geldiğinde gerekli uzatma işlemlerini sizin yerinize de gerçekleştirebilmekteyiz.",
    },
    {
      icon: pencelImage,
      key: 2,
      header: "Web sitemi kendim yönetebilir miyim",
      text: "Yaptığımı projeler için içeriğe uygun olarak bir yönetim paneli oluşturmaktayız. Bu yönetim paneli yardımıyla web site üzerinde gerekli değişiklikleri yapabilirsiniz. Yönetim paneline giriş yaparak bize ihtiyaç duymadan yeni güncellemeler yapmanız mümkündür. Eğer bu tip güncelleme işlemlerini bizim takip etmemizi istiyorsanız tüm bunları sizin yerinize biz yapıyoruz.",
    },
  ];

  return (
    <div className="krhn-template_container">
      {/* ========= Sayfanın başlık kısmı ========= */}

      <div className="text-center ">
        <h1 className="text-uppercase krhn-template_header">
          Sık Sorulan Sorular
        </h1>
      </div>

      {/* ========= Soruların sıralandığı bölüm ========= */}

      <Accordion bsPrefix="krhn-accordion" defaultActiveKey="0">
        {SssText.map((subject) => (
          <Accordion.Item
            bsPrefix="accordion-item d-flex align-items-center"
            eventKey={subject.key}
            key={subject.key}
          >
            <Accordion.Header>
              <img alt="ikon resmi" src={subject.icon} />
              <div className="container-item_header">
                <h2>{subject.header}</h2>
              </div>
            </Accordion.Header>
            <Accordion.Body>{subject.text}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}
