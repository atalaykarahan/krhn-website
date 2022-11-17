import React from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logoBrand.png";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      {/* {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => ( */}
      <Navbar key="sm" className="d-flex justify-content-between">
        {/* ========= Offcanvas kısmı ========= */}
        <div>
          <div>
            <Navigation />
          </div>
        </div>
        {/* ========= Offcanvas kısmı end ========= */}

        {/* ========= Logo ========= */}
        <div>
          <Navbar.Brand className="d-flex justify-content-center ms-3">
            <Link to="/" style={{ display: "block" }}>
              <img src={logo} width="100" height="100" alt="Krhn logo" />
            </Link>
          </Navbar.Brand>
        </div>
        {/* ========= Logo end ========= */}

        {/* ========= Text Mode div ========= */}
        <div className="offcanvas-md offcanvas-end krhn-header_text-mod-div" />
        {/* ========= Text Mode div end ========= */}

        {/* ========= Button Mod div  ========= */}
        <div
          className="d-md-none btn btn-primary krhn-header_button-mod-div"
          style={{ visibility: "hidden" }}
        >
          <svg class="krhn-icon-hamburger icon" viewBox="0 0 64 64">
            <path d="M7 15h51M7 32h43M7 49h51"></path>
          </svg>
        </div>
        {/* ========= Button Mod div end ========= */}
      </Navbar>
    </>
  );
}

export default Header;
