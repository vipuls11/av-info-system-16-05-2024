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

  const BannerImage = [
    {
      sliderimage: "/banner/banner_cabinet.webp",
      alt: "Cabinet"
    },
    {
      sliderimage: "/banner/banner_moniter.webp",
      alt: "Moniter"
    },
    {
      sliderimage: "/banner/banner_motherboard.webp",
      alt: "Motherboard"
    },
    {
      sliderimage: "/banner/banner_ram.webp",
      alt: "ram"
    }
  ];
  return (
    <Slider
      {...settings}
      className="w-[90%] m-auto mt-32 mb-20 rounded-xl shadow-xl"
    >
      {BannerImage.map((item) => <img
        src={item.sliderimage}
        alt={item.alt}
        className="rounded-xl "
      />)}

    </Slider>
  );
}

export default ImageSlider;