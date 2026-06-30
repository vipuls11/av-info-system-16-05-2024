import React from "react";
import { motion } from "framer-motion";
// import Header from "./powerxproject/Header";
import Bannerslider, {
  Motherboard,
  LatestProduct,
  Printer,
  ProductShow,
  CPUcooling,
  CardRead,
  Ram,
} from "./powerxproject/Bannerslider";
import "./App.css";
// import Footer from "./powerxproject/Footer";
import ImageSlider from "./powerxproject/ImageSlider";
import Faq from "./powerxproject/Faq";
import GroupBussiness from "./powerxproject/GroupBussiness";

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <div className="pb-12">
      <FadeIn>
        <ImageSlider />
      </FadeIn>
      <FadeIn delay={0.2}>
        <Bannerslider />
      </FadeIn>
      <FadeIn>
        {Motherboard()}
      </FadeIn>
      <FadeIn>
        {LatestProduct()}
      </FadeIn>
      <FadeIn>
        {Printer()}
      </FadeIn>
      <FadeIn>
        {ProductShow()}
      </FadeIn>
      <FadeIn>
        {CPUcooling()}
      </FadeIn>
      <FadeIn>
        {CardRead()}
      </FadeIn>
      <FadeIn>
        {Ram()}
      </FadeIn>
      <FadeIn>
        <Faq />
      </FadeIn>
      <FadeIn>
        <GroupBussiness />
      </FadeIn>
    </div>
  );
}

export default App;
