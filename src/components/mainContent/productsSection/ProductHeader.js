import React from "react";
import { ProductsContext } from "../../../context/ProductsContext";

export default function ProductHeader() {
  return (
    <ProductsContext.Consumer>
      {(context) => {
        const { collectionDinamik, collectionStatik, collectionStatus } =
          context;

        // is-active kodunu yazmalısın tıklandığı zaman

        return (
          <div className="page-width">
            <div className="section-header text-center">
              <div className="larger-text">
                <p className="subtitle">URUNLER</p>
              </div>
              <h3 className="collection-switcher_title">
                <a
                  href="/"
                  className={
                    collectionStatus === "statik"
                      ? "collection-switcher_trigger is-active"
                      : "collection-switcher_trigger"
                  }
                  onClick={collectionStatik}
                >
                  STATIK
                </a>
              </h3>
              <h3 className="collection-switcher_title">
                <a
                  href="/"
                  className={
                    collectionStatus === "dinamik"
                      ? "collection-switcher_trigger is-active"
                      : "collection-switcher_trigger"
                  }
                  onClick={collectionDinamik}
                >
                  DINAMIK
                </a>
              </h3>
            </div>
          </div>
        );
      }}
    </ProductsContext.Consumer>
  );
}
