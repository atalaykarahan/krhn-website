import React from "react";
import pencelImage from "../../../images/sss/pencel.png";

export default function Sss() {
  const SssText = [
    {
      icon: pencelImage,
      header: "Fiyatlar neye göre belirlenmekte",
      text: "Web tasarım fiyatları; İşlenecek olan içerik, sayfa sayısı, Yazılacak olan web site yazılımı web site içinde kaç dil olacağı SSL olup olmama durumu ve çeşitli özel formlara göre fiyatlandırılmaktadır.",
    },
    {
      icon: "test",
      header: "Web hosting ve domain seçimini siz mi yapıyorsunuz",
      text: "Evet. Sizin yerinize web hosting ve domain seçimi yaparak gerekli tescil işlemlerini gerçekleştirebiliyoruz. Aylık ve birkaç yıllık şekilde yapılabilmektedir. Zamanı geldiğinde gerekli uzatma işlemlerini sizin yerinize de gerçekleştirebilmekteyiz.",
    },
    {
      icon: "test",
      header: "Web sitemi kendim yönetebilir miyim",
      text: "Yaptığımı projeler için içeriğe uygun olarak bir yönetim paneli oluşturmaktayız. Bu yönetim paneli yardımıyla web site üzerinde gerekli değişiklikleri yapabilirsiniz. Yönetim paneline giriş yaparak bize ihtiyaç duymadan yeni güncellemeler yapmanız mümkündür. Eğer bu tip güncelleme işlemlerini bizim takip etmemizi istiyorsanız tüm bunları sizin yerinize biz yapıyoruz.",
    },
    { icon: "test", header: "deneme", text: "deneme" },
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

      <ul id="accordion">
        {/* ========= ilk liste  ========= */}
        <li>
          <div className="d-flex justify-content-between align-items-center">
            {/* ========= Resim ========= */}
            <div className="d-flex">
              <img
                className="img-fluid"
                alt="ikon-resmi"
                src={SssText[0].icon}
              />
            </div>

            {/* ========= Başlık ========= */}
            <div className="d-flex pt-2">
              <label htmlFor="first" className="template-section_header">
                <h2>{SssText[0].header}</h2>
              </label>
              <input type={"radio"} name="accordion" id="first" checked={true} />
            </div>

            {/* ========= Arrow ikonu ========= */}
            <div className="d-flex pe-2">
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
          </div>

          {/* ========= Açıklama yazısı ========= */}
          <div className="content">
            <p>{SssText[0].text}</p>
          </div>
        </li>

        {/* ========= ikinci liste ========= */}
        <li>
          <div className="d-flex justify-content-between align-items-center">
            {/* ========= Resim ========= */}
            <div className="d-flex">
              <img
                className="img-fluid"
                alt="ikon-resmi"
                src={SssText[0].icon}
              />
            </div>

            {/* ========= Başlık ========= */}
            <div className="d-flex pt-2">
              <label htmlFor="second" className="template-section_header">
                <h2>{SssText[0].header}</h2>
              </label>
              <input type={"radio"} name="accordion" id="second" />
            </div>

            {/* ========= Arrow ikonu ========= */}
            <div className="d-flex pe-2">
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
          </div>

          {/* ========= Açıklama yazısı ========= */}
          <div className="content">
            <p>{SssText[0].text}</p>
          </div>
        </li>

        {/* ========= üçüncü liste ========= */}
        <li>
          <div className="d-flex justify-content-between align-items-center">
            {/* ========= Resim ========= */}
            <div className="d-flex">
              <img
                className="img-fluid"
                alt="ikon-resmi"
                src={SssText[0].icon}
              />
            </div>

            {/* ========= Başlık ========= */}
            <div className="d-flex pt-2">
              <label htmlFor="third" className="template-section_header">
                <h2>{SssText[0].header}</h2>
              </label>
              <input type={"radio"} name="accordion" id="third" />
            </div>

            {/* ========= Arrow ikonu ========= */}
            <div className="d-flex pe-2">
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
          </div>

          {/* ========= Açıklama yazısı ========= */}
          <div className="content">
            <p>{SssText[0].text}</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
