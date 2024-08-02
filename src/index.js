import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import AboutUs from "./powerxproject/AboutUs";
import Header from "./powerxproject/Header";
import Footer from "./powerxproject/Footer";
import Branch from "./powerxproject/Branch";
import RmaPolicy from "./powerxproject/RmaPolicy";
import ContactUs from "./powerxproject/ContactUs";
import Product from "./powerxproject/Product";
import MotherBoard from "./submenu/MotherBoard";
import ATXCabinets from "./submenu/ATXCabinets";
import LEDMonitors from "./submenu/LEDMonitors";
import KeyboardandMouse from "./submenu/KeyboardandMouse";
import CPUCooler from "./submenu/CPUCooler";
import ExternalCasingandWiFi from "./submenu/ExternalCasingandWiFi";
import GraphicCard from "./submenu/GraphicCard";
import LaptopAccessories from "./submenu/LaptopAccessories";
import RAM from "./submenu/RAM";
import ScreenCleaningKit from "./submenu/ScreenCleaningKit";
import SMPS from "./submenu/SMPS";
import Speakers from "./submenu/Speakers";
import TonerCartridge from "./submenu/TonerCartridge";
import SSD from "./submenu/SSD";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/branch" element={<Branch />} />
      <Route path="/product" element={<Product />} />
      <Route path="/rma-policy" element={<RmaPolicy />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/motherboards" element={<MotherBoard />} />
      <Route path="/atx-cabinets" element={<ATXCabinets />} />
      <Route path="/led-monitors" element={<LEDMonitors />} />
      <Route path="/keyboard-mouse" element={<KeyboardandMouse />} />
      <Route path="/cpu-cooler-fans" element={<CPUCooler />} />
      <Route path="/external-casing-wifi" element={<ExternalCasingandWiFi />} />
      <Route path="/graphic-card" element={<GraphicCard />} />
      <Route path="/latop-accessories" element={<LaptopAccessories />} />
      <Route path="/ram" element={<RAM />} />
      <Route path="/screen-cleaning-kit" element={<ScreenCleaningKit />} />
      <Route path="/smd-spms" element={<SMPS />} />
      <Route path="/speaker" element={<Speakers />} />
      <Route path="/toner-catridges" element={<TonerCartridge />} />
      <Route path="/ssd" element={<SSD />} />
    </Routes>

    <Footer />
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
