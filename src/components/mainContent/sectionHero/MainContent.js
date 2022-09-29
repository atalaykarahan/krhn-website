import ReactPlayer from "react-player";
import React from "react";
import Card from 'react-bootstrap/Card';
const MainContent = () => {
  return (
    <>
      <Card className="text-white hero-550px hero hero-mobile-250px">

      <div>

        <ReactPlayer className="hero-media" loop={true}  muted={true} width="1280" height="720" playing={true} url="https://www.youtube.com/embed/W_MfNQ9cv9M?controls=0"/>

      </div>

      {/* <Card.Img src="holder.js/100px270" alt="Card image" /> */}
      <Card.ImgOverlay>
        <Card.Title>Lorem ipsum</Card.Title>
        <Card.Text>
          Lorem ipsum
        </Card.Text>
      </Card.ImgOverlay>





    </Card>
    </>
  );
};

export default MainContent;
