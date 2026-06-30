import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Bannerslider.css";
import { Button, Popover } from "flowbite-react";

import "../index.css";
import Example from "./Example";
import Accordion from "../descriptionaccordion/Accordion";
import Productlist from "../datalist/Productlist";

function Motherboard() {
  const motherboard = {
    img: "/image/Garphic_Cards.webp",
    title: "Graphic Cards",
    para: "Unleash silent power with our NVIDIA GeForce GT 730.",
    btn1: "GT 610LP-2GB-DDR3",
    btn2: "GT 730LP-4GB-DDR3",
  };
  return (
    <div className="w-[95%] max-w-7xl mx-auto my-12">
      <div className="relative flex flex-col lg:block bg-slate-50 rounded-[2rem] overflow-hidden shadow-sm border border-slate-100">
        <img src={motherboard.img} alt="Graphic Cards" className="w-full object-cover" />
        <div className="lg:absolute lg:bottom-10 lg:right-10 p-8 lg:p-10 text-center lg:text-left bg-white/90 backdrop-blur-xl rounded-2xl lg:shadow-2xl lg:border border-white/60 w-full lg:w-auto">
          <h5 className="text-3xl lg:text-4xl font-extrabold text-slate-900">{motherboard.title}</h5>
          <p className="text-lg font-medium text-slate-600 my-4 max-w-md mx-auto lg:mx-0">{motherboard.para}</p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6">
            <button className="w-full sm:w-auto bg-slate-900 text-white font-semibold py-3 px-6 rounded-xl hover:bg-slate-800 transition-colors shadow-md">
              {motherboard.btn1}
            </button>
            <button className="w-full sm:w-auto bg-primary-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/30">
              {motherboard.btn2}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bannerslider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const banner = {
    title: "Bestseller Alert",
    title2: "Trending Categories",
    CardImage: [
      {
        img: "/categories_product/Cat_PowerX_Monitor.webp",
        disc: "LED Monitors",
      },

      {
        img: "/categories_product/Cat_PowerX_Motherboards.webp",
        disc: "Motherboard",
      },

      {
        img: "/categories_product/Cat_PowerX_SSD.webp",
        disc: "SSD's",
      },

      {
        img: "/categories_product/Cat_PowerX_Keyboard_and_Mouse.webp",
        disc: "I/O Devices",
      },

      {
        img: "/categories_product/Cat_PowerX_Cabinets.webp",
        disc: "Cabinets",
      },

      {
        img: "/image/Cat_PowerX_Toners_83.webp",
        disc: "Toner Catridges",
      },

      {
        img: "/categories_product/Cat_PowerX_Graphic_Cards.webp",
        disc: "Graphic Card",
      },

      {
        img: "/categories_product/Cat_PowerX_SSD.webp",
        disc: "SMD SMPS",
      },

      {
        img: "/categories_product/Cat_PowerX_CPU_Cooler_Fans.webp",
        disc: "Coolerfans",
      },

      {
        img: "/categories_product/Cat_PowerX_accessories.webp",
        disc: "Cable and Accessories",
      },

      {
        img: "/categories_product/Cat_PowerX_speakers.webp",
        disc: "Speaker",
      },
    ],
  };
  const Computerpart = banner.CardImage.map((item, index) => {
    return (
      <div key={index} className="px-3 py-4 outline-none">
        <div className="relative group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 bg-white aspect-square flex items-center justify-center cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity z-10"></div>
          <img
            src={item.img}
            alt={item.disc}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute bottom-0 left-0 w-full p-4 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-white font-bold text-center text-sm lg:text-base tracking-wide drop-shadow-md">
              {item.disc}
            </p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="w-[95%] max-w-7xl mx-auto my-16">
      <div className="text-center mb-10">
        <h5 className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2 inline-block bg-primary-50 px-4 py-1.5 rounded-full">{banner.title}</h5>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">{banner.title2}</h2>
      </div>

      <Slider {...settings} className="category-slider">
        {Computerpart}
      </Slider>
    </div>
    // </div>
  );
}

function LatestProduct() {
  // Function to shuffle the array
  const getRandomProducts = (arr, count) => {
    const result = new Set();
    while (result.size < count) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      result.add(arr[randomIndex]);
    }
    return Array.from(result);
  };
  const product = {
    title: "Explore",
    title2: "Latest Products",
    ProductImage: getRandomProducts(Productlist, 10),
  };
  const LatestProductdetails = product.ProductImage.map((item, pos) => {
    return (
      <div key={item.id} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer">
        <div className="relative p-6 bg-slate-50 aspect-square flex items-center justify-center overflow-hidden">
          <img src={item.img1} alt={item.title} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
          {item.img2 && (
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white flex items-center justify-center p-6">
              <img src={item.img2} alt={`${item.title} alt`} className="w-full h-full object-contain mix-blend-multiply scale-110" />
            </div>
          )}
          {item.save && (
            <span className="absolute top-4 left-4 text-red-600 font-bold bg-red-50 border border-red-100 rounded-full text-xs px-3 py-1 shadow-sm">
              {item.save}
            </span>
          )}
        </div>
        <div className="p-6 flex flex-col flex-grow justify-between">
          <div>
            <h4 className="font-bold text-slate-900 leading-tight mb-2 line-clamp-2">{item.title}</h4>
          </div>
          <div className="mt-4 flex items-end gap-3">
            <span className="text-xl font-extrabold text-slate-900">{item.rupess}</span>
            {item.deleterupees && (
              <del className="text-sm font-medium text-slate-400 mb-1">{item.deleterupees}</del>
            )}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="w-[95%] max-w-7xl mx-auto my-16">
      <h5 className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2">{product.title}</h5>
      <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-8">{product.title2}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {LatestProductdetails}
      </div>
    </div>
  );
}

function Printer() {
  const dataprinter = {
    printering: "/image/TonersPowerX.webp",
    parabold: "Streamlined Solutions",
    para: "for Toner Refills and Waste Management",
    heading: "Toner Cartridges",
    btn1: " Q2612A",
    btn2: " CC388A",
    btn3: " CRG925",
    btn4: "CRG337",
  };
  return (
    <div className="my-12">
      <div
        className="min-h-[60vh] lg:min-h-[80vh] w-full bg-no-repeat bg-cover bg-center flex items-center lg:items-end justify-center lg:pb-24 pb-14 text-center px-4"
        style={{ backgroundImage: "url('/image/TonersPowerX.webp')" }}
      >
        <div className="bg-white/95 backdrop-blur-xl p-8 lg:p-12 rounded-[2.5rem] border border-white/60 shadow-2xl max-w-4xl mx-auto mt-20 lg:mt-0 w-full">
          <h3 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-4">{dataprinter.heading}</h3>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            <b className="text-slate-900 font-bold">{dataprinter.parabold}</b> {dataprinter.para}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all font-semibold shadow-md">{dataprinter.btn1}</button>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all font-semibold shadow-lg shadow-primary-500/30">{dataprinter.btn2}</button>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-slate-100 text-slate-800 rounded-xl hover:bg-slate-200 transition-all font-semibold border border-slate-200">{dataprinter.btn3}</button>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-slate-100 text-slate-800 rounded-xl hover:bg-slate-200 transition-all font-semibold border border-slate-200">{dataprinter.btn4}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const ProductShow = () => {
  const [Image, setImage] = useState("/image/ScreenCleaningkit1.webp");
  const product = {
    mein_image: "/image/ScreenCleaningkit1.webp",
    head: "Premium Screen Cleaning Kit",
    head1: "PX-S61",
    rupess: "Rs. 1,499.00",
    discountprice: "Rs. 1,999.00",
    span: "Save 25%",
    btn1: "Add to cart",
    btn2: "Buy it now",
  };
  const productlist = [
    {
      id: "1",
      img: "/image/ScreenCleaningkit1.webp",
    },
    {
      id: "2",
      img: "/image/ScreenCleaningkit2.webp",
    },
    {
      id: "3",
      img: "/image/ScreenCleaningkit3.webp",
    },
    {
      id: "4",
      img: "/image/ScreenCleaningkit4.webp",
    },
  ];
  const productClick = (item) => {
    setImage(item.img);
  };
  return (
    <div className="max-w-7xl mx-auto my-20 bg-white shadow-2xl shadow-slate-200/50 p-8 lg:p-12 rounded-[2rem] border border-slate-100 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-primary-100 blur-3xl opacity-50 pointer-events-none"></div>

      <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex gap-4 lg:gap-6">
          <div className="flex flex-col gap-3 lg:gap-4">
            {productlist.map((item, index) => (
              <div
                key={index}
                className={`w-16 h-16 lg:w-20 lg:h-20 rounded-xl cursor-pointer transition-all duration-300 border-2 overflow-hidden flex items-center justify-center bg-slate-50 ${Image === item.img ? 'border-primary-500 shadow-md ring-2 ring-primary-100' : 'border-transparent hover:border-slate-300'}`}
                onClick={() => productClick(item)}
              >
                <img src={item.img} className="w-full h-full object-contain p-2" alt="Thumbnail" />
              </div>
            ))}
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center p-8 border border-slate-100 group">
            <img src={Image} alt="Main Banner" className="w-full h-auto drop-shadow-2xl transition-transform duration-500 group-hover:scale-105 object-contain" />
          </div>
        </div>

        <div>
          <div className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-red-600 font-bold text-xs tracking-wider uppercase mb-4 shadow-sm border border-red-100">
            {product.span}
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-2 text-slate-900 tracking-tight">{product.head}</h2>
          <h4 className="text-lg font-medium text-slate-500 mb-8">{product.head1}</h4>

          <div className="flex items-end gap-4 mb-8">
            <span className="text-4xl font-extrabold text-slate-900">{product.rupess}</span>
            <del className="text-lg text-slate-400 font-medium mb-1">{product.discountprice}</del>
          </div>

          <div className="mb-8 border-y border-slate-100 py-6">
            <Accordion />
          </div>

          <div className="flex flex-wrap lg:flex-nowrap items-center gap-4">
            <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl p-1 shadow-sm">
              <button className="w-12 h-12 flex items-center justify-center text-xl text-slate-500 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors">-</button>
              <span className="w-12 text-center font-bold text-slate-700">2</span>
              <button className="w-12 h-12 flex items-center justify-center text-xl text-slate-500 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors">+</button>
            </div>
            <button className="flex-1 py-4 px-6 rounded-xl font-semibold text-lg bg-primary-50 text-primary-600 hover:bg-primary-100 transition-colors shadow-sm border border-primary-100 text-center">
              {product.btn1}
            </button>
            <button className="flex-1 py-4 px-6 rounded-xl font-semibold text-lg bg-primary-600 text-white shadow-xl shadow-primary-500/30 hover:bg-primary-700 hover:shadow-primary-600/40 transition-all hover:-translate-y-0.5 text-center">
              {product.btn2}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CPUcooling = () => {
  return (
    <div className="max-w-7xl mx-auto my-24 bg-white shadow-2xl shadow-slate-200/50 p-8 lg:p-12 rounded-[2rem] border border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-64 h-64 rounded-full bg-primary-100 blur-3xl opacity-50 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center mb-16">
        <h6 className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-4 bg-primary-50 px-4 py-1.5 rounded-full inline-block border border-primary-100 shadow-sm">Chill Your Worries Away</h6>
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight max-w-2xl">
          The Ultimate CPU Cooling Experience
        </h2>
        <p className="text-xl text-slate-500 mb-8 max-w-xl">Unleash Peak Performance</p>
        <button
          type="button"
          className="bg-primary-600 text-white px-8 py-4 font-semibold text-lg rounded-xl shadow-xl shadow-primary-500/30 hover:bg-primary-700 hover:shadow-primary-600/40 transition-all hover:-translate-y-0.5"
        >
          Explore Coolers
        </button>
      </div>

      <div className="relative z-10 overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-left whitespace-nowrap min-w-[800px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="p-6 font-semibold text-slate-700 w-1/4 border-r border-slate-200">Features</th>
                <th className="p-6 text-center w-1/4 border-r border-slate-200">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 inline-block w-full max-w-[240px]">
                    <img src="/image/Inclined_b5a8b4e8-6812-496d-9e0d-1a83b4d1563c.avif" alt="Cooler 1" className="h-32 object-contain mx-auto mb-4" />
                    <h4 className="font-bold text-slate-900 text-lg">Ultra Cooler</h4>
                    <p className="mt-2 mb-4">
                      <span className="text-red-600 font-bold text-xl">Rs. 2,999</span>
                      <del className="text-slate-400 text-sm ml-2">Rs. 3,999</del>
                    </p>
                    <button className="w-full py-2.5 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors shadow-md">View Details</button>
                  </div>
                </th>
                <th className="p-6 text-center w-1/4 border-r border-slate-200">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 inline-block w-full max-w-[240px]">
                    <img src="/image/Inclined_b5a8b4e8-6812-496d-9e0d-1a83b4d1563c.avif" alt="Cooler 2" className="h-32 object-contain mx-auto mb-4" />
                    <h4 className="font-bold text-slate-900 text-lg">Pro Cooler</h4>
                    <p className="mt-2 mb-4">
                      <span className="text-red-600 font-bold text-xl">Rs. 2,999</span>
                      <del className="text-slate-400 text-sm ml-2">Rs. 3,999</del>
                    </p>
                    <button className="w-full py-2.5 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors shadow-md">View Details</button>
                  </div>
                </th>
                <th className="p-6 text-center w-1/4">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 inline-block w-full max-w-[240px]">
                    <img src="/image/Inclined_b5a8b4e8-6812-496d-9e0d-1a83b4d1563c.avif" alt="Cooler 3" className="h-32 object-contain mx-auto mb-4" />
                    <h4 className="font-bold text-slate-900 text-lg">Elite Cooler</h4>
                    <p className="mt-2 mb-4">
                      <span className="text-red-600 font-bold text-xl">Rs. 2,999</span>
                      <del className="text-slate-400 text-sm ml-2">Rs. 3,999</del>
                    </p>
                    <button className="w-full py-2.5 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors shadow-md">View Details</button>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-6 font-semibold text-slate-800 bg-slate-50/50 border-r border-slate-200">Lightweight</td>
                <td className="p-6 text-center text-slate-600 font-medium border-r border-slate-200">Weighs 300g</td>
                <td className="p-6 text-center text-slate-600 font-medium border-r border-slate-200">Weighs 200g+/-5g</td>
                <td className="p-6 text-center text-slate-600 font-medium">Weighs 175g+/-5g</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-6 font-semibold text-slate-800 bg-slate-50/50 border-r border-slate-200">Support</td>
                <td className="p-6 text-center text-slate-600 font-medium border-r border-slate-200">12th & 13th Gen</td>
                <td className="p-6 text-center text-slate-600 font-medium border-r border-slate-200">1st to 11th Gen</td>
                <td className="p-6 text-center text-slate-600 font-medium">1st to 11th Gen</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-6 font-semibold text-slate-800 bg-slate-50/50 border-r border-slate-200">Speed Range</td>
                <td className="p-6 text-center text-slate-600 font-medium border-r border-slate-200">800-3000rpm</td>
                <td className="p-6 text-center text-slate-600 font-medium border-r border-slate-200">900-2900rpm+/-10%</td>
                <td className="p-6 text-center text-slate-600 font-medium">2300rpm+/-10%</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-6 font-semibold text-slate-800 bg-slate-50/50 border-r border-slate-200">PWM Control</td>
                <td className="p-6 text-center text-slate-600 font-medium border-r border-slate-200">Precise temp regulation</td>
                <td className="p-6 text-center text-slate-600 font-medium border-r border-slate-200">Allows dynamic control</td>
                <td className="p-6 text-center text-slate-600 font-medium">Enhances efficiency</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const CardRead = () => {
  const Cradread = "/image/Card_Desktop_final.webp";

  const content1 = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          Reliable USB 3.0 Card Reader
        </h3>
      </div>
      <div className="px-3 py-2">
        <p>
          Forget about complicated installations and driver downloads. Our USB
          3.0 Card Reader offers plug-and-play convenience, allowing you to
          simply plug it into your device and start transferring files
          immediately. Enjoy seamless connectivity and effortless data
          management with this user-friendly device.
        </p>
      </div>
    </div>
  );

  const content2 = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          Reliable USB 3.0 Card Reader
        </h3>
      </div>
      <div className="px-3 py-2">
        <p>
          Forget about complicated installations and driver downloads. Our USB
          3.0 Card Reader offers plug-and-play convenience, allowing you to
          simply plug it into your device and start transferring files
          immediately. Enjoy seamless connectivity and effortless data
          management with this user-friendly device.
        </p>
      </div>
    </div>
  );

  const content3 = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          Reliable USB 3.0 Card Reader
        </h3>
      </div>
      <div className="px-3 py-2">
        <p>
          Forget about complicated installations and driver downloads. Our USB
          3.0 Card Reader offers plug-and-play convenience, allowing you to
          simply plug it into your device and start transferring files
          immediately. Enjoy seamless connectivity and effortless data
          management with this user-friendly device.
        </p>
      </div>
    </div>
  );

  const content4 = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          Reliable USB 3.0 Card Reader
        </h3>
      </div>
      <div className="px-3 py-2">
        <p>
          Forget about complicated installations and driver downloads. Our USB
          3.0 Card Reader offers plug-and-play convenience, allowing you to
          simply plug it into your device and start transferring files
          immediately. Enjoy seamless connectivity and effortless data
          management with this user-friendly device.
        </p>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto my-16 px-4 sm:px-6 lg:px-8">
      <div className="relative flex flex-col lg:block">
        <div className="lg:absolute lg:top-12 lg:left-24 lg:w-[450px] w-full lg:m-0 m-auto bg-white/90 backdrop-blur-xl p-8 lg:p-10 rounded-[2.5rem] shadow-2xl border border-white/60 z-10 mb-8 lg:mb-0">
          <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
            High-Speed 6 in 1 Card Reader
          </h3>
          <h6 className="mt-6 mb-3 font-bold text-lg text-primary-600 uppercase tracking-wide">
            Plug-and-play convenience
          </h6>
          <p className="leading-relaxed text-slate-600 mb-8 font-medium">
            Compatible with a wide range of memory card formats, including SDXC,
            SDHC, SD, MMC, RS-MMC, Micro SDXC, Micro SD, Micro SDHC, and UHS-I
            Cards.
          </p>
          <button
            type="button"
            className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-primary-500/30"
          >
            Buy Now
          </button>
        </div>
        <img src={Cradread} alt="Card Reader" className="w-full object-cover lg:rounded-[3rem] shadow-sm" />

        <div className="absolute top-28 right-1/4 lg:block hidden">
          <Popover content={content1} placement="right">
            <Button className="rounded-full shadow-lg border-2 border-white">
              <span className="text-lg font-bold">
                <i className="fa-solid fa-plus"></i>
              </span>
            </Button>
          </Popover>
        </div>
        <div className="absolute top-2/3 left-1/4 lg:block hidden">
          <Popover content={content2} placement="right">
            <Button className="rounded-full shadow-lg border-2 border-white">
              <span className="text-lg font-bold">
                <i className="fa-solid fa-plus"></i>
              </span>
            </Button>
          </Popover>
        </div>
        <div className="absolute top-2/3 right-1/3 lg:block hidden">
          <Popover content={content3} placement="right">
            <Button className="rounded-full shadow-lg border-2 border-white">
              <span className="text-lg font-bold">
                <i className="fa-solid fa-plus"></i>
              </span>
            </Button>
          </Popover>
        </div>

        <div className="absolute top-96 right-24 lg:block hidden">
          <Popover content={content4} placement="right">
            <Button className="rounded-full shadow-lg border-2 border-white">
              <span className="text-lg font-bold">
                <i className="fa-solid fa-plus"></i>
              </span>
            </Button>
          </Popover>
        </div>
      </div>
    </div>
  );
};

const Ram = () => {
  return (
    <div className="w-[95%] max-w-7xl mx-auto my-16 bg-slate-50 rounded-[2rem] p-6 sm:p-8 lg:p-12 border border-slate-200">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1 w-full text-center lg:text-left">
          <div className="mb-8">
            <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">High Performance RAM</h3>
            <p className="text-lg text-slate-600 font-medium">Dominate Every Task with Our Premium Quality RAM Modules.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 text-left bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="leading-relaxed">
              <h5 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <i className="fa-solid fa-laptop text-primary-500 mr-3"></i>
                LAPTOP RAMS
              </h5>
              <ul className="space-y-3 text-slate-600 font-medium">
                <li className="flex items-start"><i className="fa-solid fa-check text-green-500 mr-3 mt-1 text-sm"></i> DDR3 1600 - 16IC - 4GB / 8GB</li>
                <li className="flex items-start"><i className="fa-solid fa-check text-green-500 mr-3 mt-1 text-sm"></i> DDR4 2666 - 4GB / 8GB / 16GB / 32GB</li>
                <li className="flex items-start"><i className="fa-solid fa-check text-green-500 mr-3 mt-1 text-sm"></i> DDR4 3200 - 4GB / 8GB / 16GB / 32GB</li>
              </ul>
            </div>

            <div className="leading-relaxed">
              <h5 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <i className="fa-solid fa-desktop text-primary-500 mr-3"></i>
                DESKTOP RAMS
              </h5>
              <ul className="space-y-3 text-slate-600 font-medium">
                <li className="flex items-start"><i className="fa-solid fa-check text-green-500 mr-3 mt-1 text-sm"></i> DDR3 1600 - 16IC - 4GB / 8GB</li>
                <li className="flex items-start"><i className="fa-solid fa-check text-green-500 mr-3 mt-1 text-sm"></i> DDR4 2666 - 4GB / 8GB / 16GB / 32GB</li>
                <li className="flex items-start"><i className="fa-solid fa-check text-green-500 mr-3 mt-1 text-sm"></i> DDR4 3200 - 4GB / 8GB / 16GB / 32GB</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full lg:w-1/2">
          <Example />
        </div>
      </div>
    </div>
  );
};

export default Bannerslider;
export {
  Motherboard,
  LatestProduct,
  Printer,
  ProductShow,
  CPUcooling,
  CardRead,
  Ram,
};
