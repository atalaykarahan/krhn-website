import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "../components/header/Header";
import Dashboard from "./Dashboard";
import MenuStatik from "../components/pages/statik/menu/MenuStatik";
import OthersStatik from "../components/pages/statik/others/OthersStatik";
import PortfoyStatik from "../components/pages/statik/portfoy/PortfoyStatik";
import Footer from "../components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsContextProvider from "../context/ProductsContext";
import ScroolToTop from "./ScroolToTop";
import Sss from "../components/pages/sss/Sss";



import "swiper/css/bundle";

function App() {
  return (
    <Router>
      <ScroolToTop />

      <div className="App">
        <Header />
        <ProductsContextProvider>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="statik/menu/" element={<MenuStatik />} />
            <Route path="statik/portfoy/" element={<PortfoyStatik />} />
            <Route path="statik/others/" element={<OthersStatik />} />
            <Route path="sss" element={<Sss />} />
          </Routes>
        </ProductsContextProvider>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
