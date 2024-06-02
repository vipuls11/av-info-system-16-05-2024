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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/branch" element={<Branch />} />
        <Route path="/rma-policy" element={<RmaPolicy />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
