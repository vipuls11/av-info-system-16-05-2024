import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const Example = () => {
  const image1 =
    "https://www.power-x.in/cdn/shop/files/PowerX_Ram_Laptop.png?v=1708515620&width=1000";
    
  const image2 =
    "https://www.power-x.in/cdn/shop/files/PowerX_RamDesktop_f330c749-abc5-4612-abcd-51c574ca4175.png?v=1708515633&width=1000";
  return (
    <ReactCompareSlider
      itemOne={
        <ReactCompareSliderImage src={image1} srcSet={image1} alt="Image one"/>
      }
      itemTwo={
        <ReactCompareSliderImage src={image2} srcSet={image2} alt="Image two" />
      }
    />
  );
};

export default Example;