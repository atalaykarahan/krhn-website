import React from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logoBrand.png";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      {/* {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => ( */}
      <Navbar key="sm">
        <div>
          <div className="d-flex justify-content-start">
            <Navigation />
          </div>
        </div>

        <div className="modal-fullscreen d-flex justify-content-center krhn-brand_center">
          <Navbar.Brand className="d-flex justify-content-center ms-3">
            <Link to="/" style={{ display: "block" }}>
              <img src={logo} width="100" height="100" alt="Krhn logo" />
            </Link>
          </Navbar.Brand>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
