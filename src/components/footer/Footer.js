import React from "react";
import LogoPng from "../../images/logoBrand.png";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer
        className="text-lg-start text-white pt-5"
        style={{ backgroundColor: "#101010" }}
      >
        {/* <!-- Section: Links  --> */}
        <section>
          <div className="container text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div className="row align-items-center">
              {/* <!-- Logo section  --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Logo Image */}
                <div>
                  <a href="/">
                    <img alt="logo" src={LogoPng} className="img-fluid" />
                  </a>
                </div>
                {/* Logo Image */}

                {/* Social Media Icons */}
                <div className=" d-flex justify-content-center">
                  <SocialIcon
                    url="https://www.youtube.com/channel/UCAcHYaoAcxU5H39NrIGq-sQ"
                    bgColor="transparent"
                    fgColor="#fb6304"
                  />
                  <SocialIcon
                    url="https://www.instagram.com/krhnatalay/"
                    bgColor="transparent"
                    fgColor="#fb6304"
                  />
                </div>
                {/* Social Media Icons */}
              </div>
              {/* <!-- Logo section --> */}

              <div className="">
                {/* <!-- Menu Section --> */}
                <div className="col-md-2 col-lg-2 col-xl-5 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold">Menu</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    <a href="#!" className="text-white">
                      Statik
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Dinamik
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Sss
                    </a>
                  </p>
                </div>
                {/* <!-- Menu Section --> */}

                {/* <!-- Yasal sayfalar kısmı --> */}
                <div className="col-md-3 col-lg-2 col-xl-5 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold">Yasal Sayfalar</h6>
                  <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    <a href="#!" className="text-white">
                      Yasal Uyarı
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Gizlilik Politikası
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Kullanım Şartları
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Çerez Politikası
                    </a>
                  </p>
                </div>

                {/* <!-- Yasal sayfalar kısmı --> */}
              </div>
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        <div className="text-center p-3">© 2022 Karahan Website</div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </>
  );
}
