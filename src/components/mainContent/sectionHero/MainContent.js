import ReactPlayer from "react-player";
import React from "react";
import Card from "react-bootstrap/Card";
const MainContent = () => {
  return (
    <>
      <Card className="text-white hero-550px hero hero-mobile-250px">
        <div>
          <ReactPlayer
            className="hero-media"
            loop={true}
            muted={true}
            width="1280"
            height="720"
            playing={true}
            url="https://www.youtube.com/embed/W_MfNQ9cv9M?controls=0"
          />
        </div>

        {/* <Card.Img src="holder.js/100px270" alt="Card image" /> */}
        <Card.ImgOverlay className="row align-items-center">
          <div>
            <Card.Title className="text-center krhn-main_header-text hero_title d-flex justify-content-center ">
              <h1>PROFESYONEL GÖRÜN. SATIŞLARINI ARTTIR.</h1>
            </Card.Title>
            <Card.Text className="hero_subtitle  d-flex justify-content-center text-uppercase text-center">
            KİŞİSEL ÇALIŞMAM SİTENİZE DAHA FAZLA ZİYARETÇİ VE GELİŞMİŞ ÖZELLİKLER SAĞLAR
            </Card.Text>
          </div>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default MainContent;
