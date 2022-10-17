import { useState } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="d-md-none">
        <svg className="krhn-icon-hamburger icon" viewBox="0 0 64 64">
          <path d="M7 15h51M7 32h43M7 49h51"></path>
        </svg>
      </Button>
      {/* className="d-flex flex-row-reverse" */}
      <Offcanvas responsive="md" show={show} onHide={handleClose}>
        <Offcanvas.Header>
          <div className=" d-flex p-2 drawer-header justify-content-between ">
            <div>
              <Offcanvas.Title></Offcanvas.Title>
            </div>

            <div className="d-flex justify-content-end">
              <Button onClick={handleClose} className="drawer-close-button">
                <svg
                  focusable="false"
                  viewBox="0 0 64 64"
                  className="icon-close icon"
                >
                  <path d="M19 17.61l27.12 27.13m0-27.12L19 44.74" />
                </svg>
              </Button>
            </div>
          </div>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Nav className=" flex-grow-1 pe-3">
            <Dropdown as={NavItem} id={`offcanvasNavbarDropdown-expand-md`}>
              <Dropdown.Toggle as={NavLink}>
                Statik
                <svg
                  focusable="false"
                  viewBox="0 0 28 16"
                  className="icon-chevron-down"
                >
                  <path
                    d="M1.57 1.59l12.76 12.77L27.1 1.59"
                    strokeWidth="2"
                    stroke="#000"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </Dropdown.Toggle>

              <Dropdown.Menu className="krhn-nav-dropdown">
                <NavDropdown.Item className="krhn-nav-dropdown-item">
                  <Link to="statik/menu/" style={{ display: "block" }}>
                    Menü
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="krhn-nav-dropdown-item">
                  <Link to="statik/portfoy/" style={{ display: "block" }}>
                    Portföy
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="krhn-nav-dropdown-item">
                  <Link to="statik/others/" style={{ display: "block" }}>
                    Diğer...
                  </Link>
                </NavDropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown as={NavItem} id={`offcanvasNavbarDropdown-expand-md`}>
              <Dropdown.Toggle as={NavLink}>
                Dinamik
                <svg
                  focusable="false"
                  viewBox="0 0 28 16"
                  className="icon-chevron-down"
                >
                  <path
                    d="M1.57 1.59l12.76 12.77L27.1 1.59"
                    strokeWidth="2"
                    stroke="#000"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </Dropdown.Toggle>

              <Dropdown.Menu className="krhn-nav-dropdown">
                <NavDropdown.Item
                  href="#action3"
                  className="krhn-nav-dropdown-item"
                >
                  Menü
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action3"
                  className="krhn-nav-dropdown-item"
                >
                  Portföy
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action3"
                  className="krhn-nav-dropdown-item"
                >
                  E-ticaret
                </NavDropdown.Item>
                <NavDropdown.Item className="krhn-nav-dropdown-item">
                  <Link to="statik/others/" style={{ display: "block" }}>
                    Diğer...
                  </Link>
                </NavDropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <div>
              <Nav.Link className="nav-item" href="#action1">
                Sss
              </Nav.Link>
            </div>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navigation;
