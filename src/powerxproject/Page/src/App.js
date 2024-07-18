import React from "react";
import Header from "./powerxproject/Header";
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
import Footer from "./powerxproject/Footer";
import ImageSlider from "./powerxproject/ImageSlider";

function App() {
  // const App = () => {

  return (
    <div classname="">
      <div className="">
        <Header />
        <div>
          <ImageSlider />
        </div>
        <Bannerslider />
        <div>{Motherboard()}</div>
        <div class="">{LatestProduct()}</div>
        <div>{Printer()}</div>
        <div>{ProductShow()}</div>
        <div className="">{CPUcooling()}</div>
        <div>{CardRead()}</div>
        <div>{Ram()}</div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
// export { App };
