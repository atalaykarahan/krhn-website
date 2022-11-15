import React from "react";
import LogoSocials from "./logoSocials/LogoSocials";
import MenuSection from "./menuSection/MenuSection";

export default function Footer() {
  return (
    <>
      {/*  Footer */}
      <footer
        className="text-lg-start pt-5"
        style={{ backgroundColor: "#101010" }}
      >
        {/*  links */}
        <section>
          <div className="container mt-5">
            <div className="row d-flex flex-wrap-reverse justify-content-between">
              <LogoSocials />

              <MenuSection />
            </div>
          </div>
        </section>

        {/* Copyright*/}
        <div className="text-center p-3 footer-link">
          © 2022 Karahan Websites
        </div>
        {/*  Copyright-end */}
      </footer>
      {/*  Footer-end */}
    </>
  );
}
