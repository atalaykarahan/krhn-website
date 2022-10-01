import React from "react";
import LogoSocials from "./logoSocials/LogoSocials";
import MenuLegals from "./menuLegals/MenuLegals";

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
              {/* Logo  social  */}
              <LogoSocials />
              {/* Logo  social end  */}

              {/* Menu  legal  */}
              <MenuLegals />
              {/* menu  legal  end */}
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
