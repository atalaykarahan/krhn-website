import React from "react";
import bigPlaceholder from "../../../images/bigPlaceHolder.jpg";
export default function About() {
  return (
    <div className="index-section-flush">
      {/* Telefon ekranına geçildiğinde arkada çıkan gri kutu */}
      <div className="background-media-text background-media-text-550 loaded aos-init aos-animate background-media-text-graybox">
        {/* Resim */}
        <div className="background-media-text_container">
          <div className="parallax-container">
            <div
              className="parallax-image background-media-text_image lazyloaded"
              style={{ backgroundImage: `url( ${bigPlaceholder})` }}
            />
          </div>
        </div>

        {/* Yazı  */}
        <div className="background-media-text_inner">
          <div className="background-media-text_aligner background-media-text-left">
            <div className="animation-cropper">
              <div className="animation-contents">
                <div className="background-media-text_text larger-text">
                  <p className="subtitle">HAKKINDA</p>
                  <h2 className="h3">ATALAY</h2>
                  <div className="rte background-media-text_subtext">
                    <p>
                      Hedefim Basit
                      <br />
                      <strong>Hayalinizdeki siteyi yapmak</strong>
                      <br />
                      <br />
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nulla facilis aut voluptatem autem incidunt, ratione
                      pariatur excepturi a fugiat, ipsum, ipsa doloribus
                      aspernatur nostrum quibusdam voluptate nobis cupiditate.
                      Consectetur, nemo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="background-media-text_spacer background-media-text-550"></div>
    </div>
  );
}
