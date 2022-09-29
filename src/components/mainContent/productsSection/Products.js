import ProductHeader from "./ProductHeader";
import React, { Component } from "react";
import pH0 from "../shopSection/shopImages/bigP0.jpg";
import pH1 from "../shopSection/shopImages/bigP1.jpg";
import { ProductsContext } from "../../../context/ProductsContext";

class Products extends Component {
  // static contextType = ProductsContext;

  render() {
    return (
      <ProductsContext.Consumer>
        {(context) => {
          const { collectionStatus, showStatik, showDinamik } = context;

          const productsStatus =
            collectionStatus === "statik" ? showStatik : showDinamik;

          return (
            <div className="index-section">
              {/* Section Header kısmı */}
              <ProductHeader />

              <div className="page-width">
                {/* burada 2 adet div var bir tanesi gizli olucak ve yukarıdaki dinamik veya statik düğmelerine göre gözükecek */}

                <div
                  className="grid collection-switcher_collection-grid slick-initialized"
                  style={{ display: productsStatus.option1 }}
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

                {/* Bu alttaki gizli olan buna sonradan ekleyeceksin */}
                <div
                  className="grid collection-switcher_collection-grid slick-initialized"
                  style={{ display: productsStatus.option2 }}
                >
                  <div className=" grid_item  medium-up-one-half  ">
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
                        <img data-sizes="auto" alt="resim" src={pH0}></img>
                        <img
                          className="krhn_secondary-image"
                          data-sizes="auto"
                          alt="resim"
                          src={pH1}
                        ></img>
                      </div>

                      <div>Dinamik Site</div>
                      <div>
                        <span>4799₺</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductsContext.Consumer>
    );
  }
}

export default Products;
