import React, { useState } from "react";
import bigP0 from "../shopImages/bigP0.jpg";
import bigP1 from "../shopImages/bigP1.jpg";
import bigP2 from "../shopImages/bigP2.jpg";
import bigP3 from "../shopImages/bigP3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";

export default function SliderSection() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  let mySliderImage = [bigP0, bigP1, bigP2, bigP3];

  return (
    <div className=" grid_item">
      {/* ********** üst slider ********** */}
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 mb-2"
      >
        {mySliderImage.map((slider) => (
          <SwiperSlide key={slider}>
            <img alt="slider" src={slider} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ********** alt slider ********** */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {mySliderImage.map((slider) => (
          <SwiperSlide key={slider}>
            <img alt="bottomSlider" src={slider} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
