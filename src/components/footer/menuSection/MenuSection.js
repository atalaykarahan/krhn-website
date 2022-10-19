import React from "react";
import { Link } from "react-router-dom";

export default function MenuSection() {
  return (
    <>
      <div className="text-md-center" style={{ width: "350px" }}>
        {/* ========= Menü header kısmı ========= */}

        <h6 className="nav-link">Menu</h6>
        <div className="row">
          {/* ========= Statik | Dinaimk ========= */}
          <div className="col-md-6 pt-2">
            <ul className="list-group">
              <li className="list-group-item">
                <span className="footer-menu_header">STATİK & DİNAMİK</span>
              </li>
              <li className="list-group-item">
                <Link to="statik/menu" className="footer-link">
                  Menü
                </Link>
              </li>
              <li className="list-group-item">
                <Link to="statik/portfoy" className="footer-link">
                  Portföy
                </Link>
              </li>
              <li className="list-group-item">
                <Link to="statik/others" className="footer-link">
                  Diğer...
                </Link>
              </li>
            </ul>
          </div>
          {/* ========= SSS ========= */}

          <div className="col-md-6 pt-2">
            <Link to="sss" className="footer-link">
              Sss
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
