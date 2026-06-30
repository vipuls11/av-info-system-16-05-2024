import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Header from "./powerxproject/Header";
import Footer from "./powerxproject/Footer";
import CookieBanner from "./components/CookieBanner";

// Lazy Loaded Routes
const AboutUs = lazy(() => import("./powerxproject/AboutUs"));
const Branch = lazy(() => import("./powerxproject/Branch"));
const RmaPolicy = lazy(() => import("./powerxproject/RmaPolicy"));
const ContactUs = lazy(() => import("./powerxproject/ContactUs"));
const Product = lazy(() => import("./powerxproject/Product"));
const MotherBoard = lazy(() => import("./submenu/MotherBoard"));
const ATXCabinets = lazy(() => import("./submenu/ATXCabinets"));
const LEDMonitors = lazy(() => import("./submenu/LEDMonitors"));
const KeyboardandMouse = lazy(() => import("./submenu/KeyboardandMouse"));
const CPUCooler = lazy(() => import("./submenu/CPUCooler"));
const ExternalCasingandWiFi = lazy(() => import("./submenu/ExternalCasingandWiFi"));
const GraphicCard = lazy(() => import("./submenu/GraphicCard"));
const LaptopAccessories = lazy(() => import("./submenu/LaptopAccessories"));
const RAM = lazy(() => import("./submenu/RAM"));
const ScreenCleaningKit = lazy(() => import("./submenu/ScreenCleaningKit"));
const SMPS = lazy(() => import("./submenu/SMPS"));
const Speakers = lazy(() => import("./submenu/Speakers"));
const TonerCartridge = lazy(() => import("./submenu/TonerCartridge"));
const SSD = lazy(() => import("./submenu/SSD"));
const NotFound = lazy(() => import("./powerxproject/NotFound"));

// Premium Loading Spinner
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-slate-50">
    <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin"></div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <CookieBanner />
    
    <Suspense fallback={<LoadingSpinner />}>
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
        
        {/* Catch-all route for 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>

    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
