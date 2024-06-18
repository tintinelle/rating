import React from "react";
import ReactDOM from "react-dom/client";
import "./style/css/normalize.css";
import "./style/css/fonts.scss";
import "./style/css/global.scss";
import "./style/css/mixins.scss";
import { HashRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import ProvidersPage from "./pages/ProvidersPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/providers" element={<ProvidersPage />} />
    </Routes>
  </HashRouter>
);
