import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

const CartSummary = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav.Link className="me-2" onClick={handleShow}>
        <span>
          <svg focusable="false" viewBox="0 0 64 64" className="icon">
            <path
              stroke="null"
              fillOpacity="null"
              stroke-opacticty="null"
              fill="null"
              d="M11.375 17.863h41.25v36.75h-41.25z"
            ></path>
            <path
              stroke="null"
              d="M22.25 18c0-7.105 4.35-9 9.75-9s9.75 1.895 9.75 9"
            ></path>
          </svg>

          {/* tam bu kısma svg cinsinden sepette bir ürün olduğu zaman bunu belli edecek bir yuvarlak daire gelecek onu sonra eklersin */}
        </span>
      </Nav.Link>

      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <div className=" d-flex p-2 drawer-header justify-content-between ">
            <div className="center-cart">
              <Offcanvas.Title className="drawer-title drawer">
                SEPET
              </Offcanvas.Title>
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
        <Offcanvas.Body className="drawer">
          <p> Sepetinde ürün bulunmamaktadır.</p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CartSummary;
