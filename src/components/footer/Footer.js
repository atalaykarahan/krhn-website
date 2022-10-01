import React from "react";
import LogoSocials from "./LogoSocials";
import MenuLegals from "./MenuLegals";

export default function Footer() {
  return (
    <>
      {/*  Footer */}
      <footer
        className="text-lg-start text-white pt-5"
        style={{ backgroundColor: "#101010" }}
      >
        {/*  links */}
        <section>

          <div className="container mt-5">
            {/* Grid Row */}
            
            <div className="row d-flex flex-wrap-reverse">
              {/* Logo and social Media section  */}
              <LogoSocials />
              {/* Logo and social Media section-end  */}

              {/* Menu and legal pages */}
              <MenuLegals />
              {/* menu and legal pages end */}
            </div>


            {/* Grid Row-end */}
          </div>
        </section>
        {/*  links-end  */}

        {/* Copyright*/}
        <div className="text-center p-3">© 2022 Karahan Website</div>
        {/*  Copyright-end */}
      </footer>
      {/*  Footer-end */}
    </>
  );
}
