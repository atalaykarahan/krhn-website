import React from "react";
import { Link } from "react-router-dom";

export default function MenuSection() {
  return (
    <>
      <h6 className="nav-link text-md-center">Menu</h6>
      <div className="row d-flex justify-content-between">
        {/* Statik  */}
        <div className="col-md-8 ">
          <ul className="list-group text-md-center">
            <li className="list-group-item mb-2">
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

        {/* SSS */}
        <div className="col-md-4">
          <a href="/!" className="footer-link">
            Sss
          </a>
        </div>
      </div>
    </>
  );
}
