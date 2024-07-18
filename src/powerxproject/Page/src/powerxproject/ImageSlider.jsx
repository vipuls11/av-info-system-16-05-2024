import React from 'react'
import Slider from "react-slick";
function ImageSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const BannerImage = [{}];
  return (
    <Slider
      {...settings}
      className="w-[90%] m-auto mt-5 mb-20 rounded-xl shadow-xl"
    >
      <img
        src="https://www.power-x.in/cdn/shop/files/PowerX_Moniter_8ee55431-2c1d-4940-a536-3eb1cad66221.png?v=1708496342&width=1400"
        alt="..."
        className="rounded-xl "
      />
      <img
        src="https://www.power-x.in/cdn/shop/files/PowerX_SSD_81807e39-57ef-4658-8b6f-078884d86121.png?v=1708496377&width=1400"
        alt="..."
        className="rounded-xl "
      />
      <img
        src="https://www.power-x.in/cdn/shop/files/PowerX_Keyboard_and_Mouse_a35aad46-57b6-49fb-84db-dabf2ce26914.png?v=1708496395&width=1400"
        alt="..."
        className="rounded-xl"
      />
      <img
        src="https://www.power-x.in/cdn/shop/files/PowerX_Cabinets_d9eae516-83d6-482d-9f90-65c3d4ab1f73.png?v=1708496413&width=1400"
        alt="..."
        className="rounded-xl "
      />
      <img
        src="https://www.power-x.in/cdn/shop/files/PowerX_Motherboard_6cdb5c55-7391-4546-8c2f-66f092ba7f31.png?v=1708509736&width=1400"
        alt="..."
        className="rounded-xl "
      />
    </Slider>
  );
}

export default ImageSlider;