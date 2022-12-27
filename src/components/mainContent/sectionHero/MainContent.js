import ReactPlayer from "react-player";
import React from "react";
import Card from "react-bootstrap/Card";
const MainContent = () => {
  return (
    <>
      <Card className="text-white hero-550px hero hero-mobile-250px">
        {/* ========= Öndeki siyahlık ========= */}
        {/* Bu siyahlığı sağlamak için player kısmına opaklık ayarı ile oynadın!! */}
        <div
          className="hero-media"
          style={{ color: "black", backgroundColor: "black" }}
        />
        {/* ========= Öndeki siyahlık end ========= */}
        <div>
          <ReactPlayer
            style={{ opacity: 0.7 }}
            className="hero-media"
            loop={true}
            muted={true}
            width="1280"
            height="720"
            playing={true}
            //Eski link
            // url="https://www.youtube.com/embed/W_MfNQ9cv9M?controls=0"
            //Eski link end
            url="https://www.youtube.com/embed/cqDBgqeUw4Y?controls=0"
          />
        </div>

        {/* <Card.Img src="holder.js/100px270" alt="Card image" /> */}
        <Card.ImgOverlay className="row align-items-center">
          <div>
            <Card.Title className="text-center krhn-main_header-text hero_title d-flex justify-content-center ">
              <h1>PROFESYONEL GÖRÜN.</h1>
            </Card.Title>
            <Card.Text className="hero_subtitle  d-flex justify-content-center text-uppercase text-center">
              KİŞİSEL ÇALIŞMAM DAHA FAZLA ZİYARETÇİ VE GELİŞMİŞ ÖZELLİKLER
              SAĞLAR.
            </Card.Text>
          </div>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default MainContent;
