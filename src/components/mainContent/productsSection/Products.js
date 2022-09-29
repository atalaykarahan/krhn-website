import React, { Component } from "react";
import pH0 from "../shopSection/shopImages/bigP0.jpg";
import pH1 from "../shopSection/shopImages/bigP1.jpg";
import { ProductsContext } from "../../../context/ProductsContext";

class Products extends Component {

    static contextType = ProductsContext;

  render() {

    const {isStatikActive, showStatik, showDinamik} = this.context;

    const productsStatus = isStatikActive? showStatik:showDinamik;

    return (
      <div className="index-section">

        {/* Section Header kısmı */}
        <div className="page-width">
          <div className="section-header text-center">
            <div className="larger-text">
              <p className="subtitle">URUNLER</p>
            </div>
            <h3 className="collection-switcher_title">
              <a href="/" className="collection-switcher_trigger is-active">
                STATIK
              </a>
            </h3>
            <h3 className="collection-switcher_title">
              <a href="/" className="collection-switcher_trigger">
                DINAMIK
              </a>
            </h3>
          </div>
        </div>



        <div className="page-width">


          {/* burada 2 adet div var bir tanesi gizli olucak ve yukarıdaki dinamik veya statik düğmelerine göre gözükecek */}

          <div className="grid collection-switcher_collection-grid slick-initialized" style={{display: productsStatus.option1}}>
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
          <div className="grid collection-switcher_collection-grid slick-initialized" style={{display: productsStatus.option2}}>
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
  }
}

export default Products;
