import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const Example = () => {
  const image1 =
    "/image/PowerX_RamDesktop_f330c749-abc5-4612-abcd-51c574ca4175.webp";

  const image2 =
    "/image/PowerX_Ram_Laptop.webp";
  return (
    <ReactCompareSlider
      itemOne={
        <ReactCompareSliderImage src={image1} srcSet={image1} alt="Image one" />
      }
      itemTwo={
        <ReactCompareSliderImage src={image2} srcSet={image2} alt="Image two" />
      }
    />
  );
};

export default Example;