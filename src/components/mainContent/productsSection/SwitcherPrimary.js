import React from "react";
import pH0 from "../shopSection/shopImages/bigP0.jpg";
import pH1 from "../shopSection/shopImages/bigP1.jpg";
import { ProductsContext } from "../../../context/ProductsContext";

export default function SwitcherPrimary() {
  return (
    <ProductsContext.Consumer>
      {(context) => {
        const { collectionStatus } = context;

        const productsStatus =
          collectionStatus === "statik" ? null :"none";

        return (
          <div
            className="grid collection-switcher_collection-grid slick-initialized"
            style={{ display: productsStatus }}
          >
            <div className=" grid_item  medium-up-one-half  ">
              <a href="/">
                <div className="krhn_image-mask">
                  <img data-sizes="auto" alt="resim" src={pH0}></img>
                  <img
                    className="krhn_secondary-image"
                    data-sizes="auto"
                    alt="resim"
                    src={pH1}
                  ></img>
                </div>

                <div>Statik Site</div>
                <div>
                  <span>1499₺</span>
                </div>
              </a>
            </div>

            {/* ikinci resmin başladığı yer diğerine yazmadığın kodlar bundada yazılı değil dikkat */}
            <div className=" grid_item  medium-up-one-half">
              <a href="/">
                <div className="krhn_image-mask">
                  <img data-sizes="auto" alt="resim" src={pH1}></img>
                  <img
                    className="krhn_secondary-image"
                    data-sizes="auto"
                    alt="resim"
                    src={pH0}
                  ></img>
                </div>

                <div>Dinamik Site</div>
                <div>
                  <span>4799₺</span>
                </div>
              </a>
            </div>
          </div>
        );
      }}
    </ProductsContext.Consumer>
  );
}
