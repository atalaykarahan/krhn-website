import React from "react";
import { Link } from "react-router-dom";

export default function MenuSection() {
  return (
    <>
      <h6 className="nav-link text-center">Menu</h6>
      <div className="row">
        {/* Statik  */}
        <div className="col-md-4 ">
          <ul className="list-group ">
            <li className="list-group-item mb-2">
              <span className="footer-menu_header">STATİK</span>
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
            </li>
          </ul>
        </div>

        {/* Dinamik */}
        <div className="col-md-4 ">
          <ul className="list-group">
            <li className="list-group-item mb-2">
              <span className="footer-menu_header">DİNAMİK</span>
              <li className="list-group-item">
                <a href="/" className="footer-link">
                  Menü
                </a>
              </li>
              <li className="list-group-item">
                <a href="/" className="footer-link">
                  Portföy
                </a>
              </li>
              <li className="list-group-item">
                <a href="/" className="footer-link">
                  E-ticaret
                </a>
              </li>
              <li className="list-group-item">
                <Link to="statik/others" className="footer-link">
                  Diğer...
                </Link>
              </li>
            </li>
          </ul>
        </div>

        {/* SSS */}
        <div className="col-md-4 ">
          <a href="/!" className="footer-link">
            Sss
          </a>
        </div>
      </div>
    </>
  );
}
