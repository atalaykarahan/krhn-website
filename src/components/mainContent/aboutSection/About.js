import React from "react";
import { Parallax } from "react-parallax";
import bigPlaceholder from "../../../images/bigPlaceHolder.jpg";

export default function About() {
  return (
    <div className="index-section-flush">
      <Parallax
        bgImage={bigPlaceholder}
        className="parallax-container"
        strength={-200}
      >
        <div className="black-card">
          <p>Hakkında</p>
          <h2>Atalay</h2>
          <div>
            Bilgisayar programcısı olarak bir web sayfası yapmanın ne kadar
            karmaşık ve zor bir durum olabileceğinin farkındayım. Bundan dolayı kafanızı karıştırmadan hayalinizdeki
            siteyi hızlıca size ulaştırmak hedefim.
          </div>
        </div>
      </Parallax>
    </div>
  );
}
