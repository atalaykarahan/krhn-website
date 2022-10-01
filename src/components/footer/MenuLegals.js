import React from "react";

export default function MenuLegals() {
  return (
    <div className="row col-sm-12 col-md-10 d-flex justify-content-end">
      {/*  Menu Section */}
      <div className="col-sm-12 col-md-2 mb-4 ">
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

      {/* Menu end */}

      {/*  Yasal sayfalar kısmı */}
      <div className="col-sm-12 col-md-2 mb-4 ">
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

      {/* Yasal sayfalar end */}
    </div>
  );
}
