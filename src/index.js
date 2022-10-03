import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./root/App";
import "./fonts/ITC-Avant-Garde-Gothic-LT.otf"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // stric mode swiper konusunda sıkıntı çıkardığı için sildin duruma göre tekrar eklersin
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
