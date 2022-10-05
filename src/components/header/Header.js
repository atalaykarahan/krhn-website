import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logoBrand.png";
import Navigation from "./Navigation";
// import CartSummary from "../cart/CartSummary";

function Header() {
  return (
    <>
      {/* {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => ( */}
      <Navbar key="sm">
        <Container fluid="sm" style={{ position: "absolute" }}>
          <div className="d-flex justify-content-start">
            <Navigation />
          </div>
        </Container>
        <Container fluid="sm" className="d-flex justify-content-center">
          <Navbar.Brand
            href="#home"
            className="d-flex justify-content-center ms-3"
          >
            <img src={logo} width="100" height="100" alt="Krhn logo" />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
