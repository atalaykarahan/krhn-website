import React from "react";

export default function MenuSection() {
  return (
    <>
      <h6 className="nav-link text-center">Menu</h6>
      <div className="row">
        {/* Statik  */}
        <div className="col-md-4 ">
          <ul className="list-group ">
            <li className="list-group-item mb-2">
              STATİK
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
                  Diğer...
                </a>
              </li>
            </li>
          </ul>
        </div>

        {/* Dinamik */}
        <div className="col-md-4 ">
          <ul className="list-group">
            <li className="list-group-item mb-2">
              DİNAMİK
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
                <a href="/" className="footer-link">
                  Diğer...
                </a>
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
