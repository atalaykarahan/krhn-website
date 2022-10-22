import React from "react";
import Accordion from "react-bootstrap/Accordion";

export default function Sss() {
  const SssText = [
    {
      key: 0,
      header: "Fiyatlar neye göre belirlenmekte",
      text: "Web tasarım fiyatları; İşlenecek olan içerik, sayfa sayısı, Yazılacak olan web site yazılımı web site içinde kaç dil olacağı SSL olup olmama durumu ve çeşitli özel formlara göre fiyatlandırılmaktadır.",
    },
    {
      key: 1,
      header: "Web hosting ve domain seçimini siz mi yapıyorsunuz",
      text: "Evet. Sizin yerinize web hosting ve domain seçimi yaparak gerekli tescil işlemlerini gerçekleştirebiliyoruz. Aylık ve birkaç yıllık şekilde yapılabilmektedir. Zamanı geldiğinde gerekli uzatma işlemlerini sizin yerinize de gerçekleştirebilmekteyiz.",
    },
    {
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

      <Accordion bsPrefix="krhn-accordion" defaultActiveKey={0}>
        {SssText.map((subject) => (
          <Accordion.Item
            bsPrefix="accordion-item text-center"
            eventKey={subject.key}
            key={subject.key}
          >
            <Accordion.Header>
              <div className="krhn-baslik_ortala">
                <h2>{subject.header}</h2>
              </div>
              <div id="krhn-arrow">
                <svg
                  focusable="false"
                  viewBox="0 0 28 16"
                  className="icon-chevron-down"
                >
                  <path
                    d="M1.57 1.59l12.76 12.77L27.1 1.59"
                    strokeWidth="2"
                    stroke="#000"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </Accordion.Header>

            <Accordion.Body>{subject.text}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}
