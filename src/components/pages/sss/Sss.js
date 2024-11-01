import React from "react";
import Accordion from "react-bootstrap/Accordion";
import ContactMe from "../../contactMe/ContactMe";

export default function Sss() {
  const SssText = [
    {
      key: 0,
      header: "Fiyatlar neye göre belirlenmekte?",
      text: "Web tasarım fiyatları; İşlenecek olan içerik, sayfa sayısı, Yazılacak olan web site yazılımı SSL olup olmama durumu ve çeşitli özel formlara göre fiyatlandırılmaktadır.",
    },
    {
      key: 1,
      header: "Web hosting ve domain seçimini siz mi yapıyorsunuz?",
      text: "Hayır ama isterseniz sizin yerinize web hosting ve domain seçimi yaparak gerekli tescil işlemlerini gerçekleştirebiliyoruz. Yıllık ve birkaç aylık şekilde yapılabilmektedir. Zamanı geldiğinde gerekli uzatma işlemlerini sizin yerinize de gerçekleştirebilmekteyiz.",
    },
    {
      key: 2,
      header: "Web sitemi kendim yönetebilir miyim?",
      text: "Yaptığımız siteler için içeriğe uygun olarak bir yönetim paneli oluşturmaktayız. Bu yönetim paneli yardımıyla web site üzerinde gerekli değişiklikleri yapabilirsiniz. Yönetim paneline giriş yaparak bize ihtiyaç duymadan yeni güncellemeler yapmanız mümkündür. Eğer bu tip güncelleme işlemlerini bizim takip etmemizi istiyorsanız tüm bunları sizin yerinize yaptığımız bir pakedimiz mevcut.",
    },
    {
      key: 3,
      header: "Neden Karahan Websites alt yapısını kullanmalıyım?",
      text: "Özellikle küçük ve orta büyüklükte'ki işletmeler için bütçe dostu seçenekler sağlamaktayız.",
    },
    {
      key: 4,
      header: "Karahan Websites alt yapısına geçmek için neye ihtiyacım var?",
      text: 'Karahan Websites altyapısına geçmek istiyorsanız. firamanızın ihtiyaclarına ve hedeflerine en uygun site alt yapısı hakkında bilgi sahibi olup karar kıldığınız alt yapıyı sayfaların altında bulunan "SATIN AL" yazısı ile satın alabilirsiniz.',
    },
    {
      key: 5,
      header: "Karahan Websites ile nasıl iletişime geçerim?",
      text: 'Sayfalarına altında bulunan "İLETİŞİME GEÇ" yazısına tıklayarak ilgili sayfadan bana ulaşabilirsiniz.',
    },
    {
      key: 6,
      header: "Karahan Websites sitemi kurmamda bana destek olur mu?",
      text: "Sitenizi kurarken veya güncellerken takıldığınız herhangi bir yerde bana ulaşabilirsiniz. 36 saat içerisinde size geri dönüş yapmaktayım.",
    },
    {
      key: 7,
      header: "Websiteme bakım hizmeti alabilir miyim?",
      text: "Eğer domain veya hosting ile uğraşıp yıllık veya aylık olarak para vermek istemiyor veya kafanız hiç karışmadan sitenize sahip olmak istiyorsanız bakım hizmetimizden faydalanabilirsiniz. Bunun içinde hosting, Domain adı, SSL sertifikası gibi düzenli satın alımlarımız vardır. Ücreti web sayfanızın ücretinin %12 değeri kadardır. ilk 6 ay peşin sonraki 6 ayın fiyatı 12 taksit ile alınmaktadır.",
    },
    {
      key: 8,
      header:
        "Web sayfamın yedeklenmesi ve olası bir tehdit & saldırı durumunda yeniden hayata döndürülmesi mümkün mü?",
      text: "Bu normal plana dahil değildir ama isteyen müşterilerimiz için web sayfanızın aylık olarak yedeğini alıp olası bir tehdit sonunda yeniden hayata döndürme çalışmalarımız vardır. Ücreti aylık 30 yıllık peşin öderseniz 300₺ civarındadır.",
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

            <Accordion.Body className="pt-3" style={{ color: "gray" }}>
              {subject.text}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

      <ContactMe />
    </div>
  );
}
