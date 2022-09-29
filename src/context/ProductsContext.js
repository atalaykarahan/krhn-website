import React, { createContext, Component } from "react";

export const ProductsContext = createContext();

class ProductsContextProvider extends Component {
  state = {
    isStatikActive: true,
    showStatik: { option1: "", option2: "none" },
    showDinamik: { option1: "none", option2: "" },
  };
  render() {
    return (
      <ProductsContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ProductsContext.Provider>
    );
  }
}

export default ProductsContextProvider;
