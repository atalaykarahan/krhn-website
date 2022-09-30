import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/header/Header";
import Dashboard from "./Dashboard";
import Footer from "../components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsContextProvider from "../context/ProductsContext";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ProductsContextProvider>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
          </Routes>
        </ProductsContextProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
