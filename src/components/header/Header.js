import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logoBrand.png";
import Navigation from "./Navigation";
import CartSummary from "../cart/CartSummary";

function Header() {
  return (
    <>
      {/* {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => ( */}
      <Navbar key="sm">
        {/* normalde container fluid yazısı var */}
        <Container fluid="sm" className="flex-nowrap">
          <Container className="d-flex justify-content-start">
            <Navigation />
          </Container>

          <Container className="d-flex justify-content-center">
            <Navbar.Brand href="#home">
              <img
                src={logo}
                width="100"
                height="100"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Container>

          <Container className="d-flex justify-content-end">
            <CartSummary />
          </Container>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
