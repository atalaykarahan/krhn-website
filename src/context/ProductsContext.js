import React, { createContext, Component } from "react";

export const ProductsContext = createContext();

class ProductsContextProvider extends Component {
  state = {
    collectionStatus: "statik",
    showStatik: { option1: "", option2: "none" },
    showDinamik: { option1: "none", option2: "" },
  };

  collectionDinamik = (e) => {
    e.preventDefault();
    this.setState({ collectionStatus: "dinamik" });
  };

  collectionStatik = (e) => {
    e.preventDefault();
    this.setState({ collectionStatus: "statik" });
  };

  render() {
    return (
      <ProductsContext.Provider
        value={{
          ...this.state,
          collectionDinamik: this.collectionDinamik,
          collectionStatik: this.collectionStatik,
        }}
      >
        {this.props.children}
      </ProductsContext.Provider>
    );
  }
}

export default ProductsContextProvider;
