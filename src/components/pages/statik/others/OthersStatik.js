import React from "react";
import StatikTemplate from "../template/StatikTemplate";

export default function OthersStatik() {
  const props = {
    header: "BEN BAŞKA BİR SİTE BAKMIŞTIM",
    headerUnderText:
      "Yaptırmak istediğiniz siteyi diğer seçeneklerde bulamıyorsanız merak etmeyin. Kafanızdaki site; İşletme, Etkinlik, Online Forum, Kişisel, Üyelik… gibi aklınıza ne geliyorsa tam olarak istediğiniz siteyi bize açıklayarak aktarırsanız yapamıyacağımız bir şey değildir.",
    sections: [
      {
        topHeader: "İşletmem için değer",
        header: "İşletmeye özel",
        text: "İşletme siteleri, belirli bir hizmeti veya ürünü satmanıza olanak tanır. Genellikle ne sattığınızı göstermek ve açıklamak için özel bölümler içerirler ve sitenizden doğrudan para kazanmanıza imkan sağlayan yerleşik özelliklere sahiptirler.",
      },
      {
        topHeader: "Güzel bir parti olucak",
        header: "Etkinlik",
        text: "21. yüzyılda etkinlik siteleri de son derece popüler hale geldi. Bu siteler, etkinliğiniz hakkında ayrıntılı bilgiler paylaşmanıza olanak tanır ve kapsamlı programlar, ulaşım önerileri, haritalar ve çok daha fazlasını içerir.",
      },
      {
        topHeader: "Topluluk forum siteleri",
        header: "Forum",
        text: "Kullanıcılarınızın çeşitli konular üzerinde tartışmasını, sorular sormasını ve birbirleriyle etkileşim kurmasını sağlamak. Giderek daha fazla sayıda web sitesi, site üyelerinin birbirleriyle konuşmasını sağlamak ve kullanıcıları sitelerinde sohbete teşvik etmek için online bir forum içermeye başladı. Dipnot: forumlar dinamik sitelerdir.",
      },
      {
        topHeader: "İnternetteki varlığımı güçlendirmeliyim",
        header: "Kişisel",
        text: "Bu web sitesi türü, aslında belirli bir kişiyi kapsayan ve temsil eden bir sitedir. Birçok kişi, kim olduklarını ve neler başardıklarını göstermek için kullanır. Çoğunlukla, daha az görsel ögeye sahip bir portfolyo sitesine benzer; bu da onu yazar ve oyuncu siteleri için mükemmel bir format haline getirir.",
      },
      {
        topHeader: "Üye sayımı öğrenmeli kaç kişi takip ediyor bilmeliyim.",
        header: "Üyelik",
        text: "Katılmak için üyelik gerektiren online bir derginiz veya yayınınız olabilir. Alternatif olarak, web sitesi kurmak istediğiniz bir kulüp veya özel bir grubunuz olabilir, ancak yalnızca üyelere erişim vermek istediğinizi varsayalım. Bunlar gibi birçok senaryo; bir üyelik sitesini, hedef kitlenizi yönetmenin ve potansiyel olarak sitenizden para kazanmanın kesin bir yolu haline getirir.",
      },
      {
        topHeader: "Bizim parayla işimiz olmaz.",
        header: "Kar amacı gütmeyen",
        text: "Ticari web sitelerine benzeyen bu siteler, genellikle kâr amacı gütmeyen kuruluşun bir tanıtımını, yaptıkları işle ilgili ayrıntıları, geçmiş etkinliklerin bir galerisini ve bağış yapılacak bir bölüm içerir.",
      },
      {
        topHeader: "Bilgi güçtür",
        header: "Bilgilendirici",
        text: "Ansiklopediler, haber siteleri, wiki'ler ve daha fazlası bulunur. Genellikle bu tür web sitelerinin, daha uzun içeriklere sahip olmaları bakımından bloglara benzer birçok yönü vardır. Bilgilendirici sitelerin bir başka birleştirici özelliği de site ziyaretçilerinin aradıklarını bulabilmeleri için arama işlevlerini devreye sokmalarıdır.",
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
              <p className="template-section-summary">
                Halen daha aradığımı bulamadım
              </p>
            </div>
            <h3 className="template-section_header">İstediğimi bulamadım</h3>
            <p className="template-section_text">
              Kafandaki site burda yoksa merak etme burda yazılı olanlar günümüz
              dünyasında en popüler olan internet site türleri. Eğer aklında
              daha farklı bir site yapmak varsa bize istediğin siteyi
              olabildiğince açık ve anlaşılır bir dil ile yaz. En kısa zamanda
              sana dönücez.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
