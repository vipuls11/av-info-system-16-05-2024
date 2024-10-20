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
    <div>
      <div className="relative">
        <img src={motherboard.img} alt="" />
        <div className="absolute bottom-0 right-0 my-5">
          <h5 className="text-4xl font-semibold">{motherboard.title}</h5>
          <p className="text-lg font-semibold my-5">{motherboard.para}</p>
          <button
            type=""
            className="border border-black bg-black text-white font-semibold py-2 px-4 mr-3 rounded-lg hover:opacity-"
          >
            {motherboard.btn1}
          </button>
          <button
            type=""
            className=" bg-blue-600 text-white font-semibold py-2 px-4 mr-3 rounded-lg hover:opacity-"
          >
            {motherboard.btn2}
          </button>
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
    console.log(item);
    return (
      <div
        key={index}
        className="slider_slide relative border-2 border-black text-center"
      >
        <img src={item.img} alt="" ClassName="" />
        <p className="absolute bottom-2 left-10">{item.disc}</p>
      </div>
    );
  });
  return (
    <div className="w-[90%] m-auto my-5">
      <h5 className="text-blue-600 font-semibold">{banner.title}</h5>
      <h2 className="text-3xl my-2 font-medium">{banner.title2}</h2>

      {/* <div className="grid grid-cols-6 gap-5"> */}
      <Slider {...settings} className="">
        {Computerpart}
      </Slider>

      {/* <div className="relative border-2 border-black">
          <img src={banner.img} alt="" ClassName="" />
          <p className="absolute bottom-2 left-2">{banner.disc}</p>
        </div> */}
      {/* <div className="relative border-2 border-black">
          <img src={banner.img} alt="" ClassName="" />
          <p className="absolute bottom-2 left-2">{banner.disc}</p>
        </div>
        <div className="relative border-2 border-black">
          <img src={banner.img} alt="" ClassName="" />
          <p className="absolute bottom-2 left-2">{banner.disc}</p>
        </div>
        <div className="relative border-2 border-black">
          <img src={banner.img} alt="" ClassName="" />
          <p className="absolute bottom-2 left-2">{banner.disc}</p>
        </div>
        <div className="relative border-2 border-black">
          <img src={banner.img} alt="" ClassName="" />
          <p className="absolute bottom-2 left-2">{banner.disc}</p>
        </div>
        <div className="relative border-2 border-black">
          <img src={banner.img} alt="" ClassName="" />
          <p className="absolute bottom-2 left-2">{banner.disc}</p>
        </div> */}
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
    console.log(item, "nkbfjbjhdf");
    return (
      <div key={item.id}>
        <div className="relative mb-5">
          <img src={item.img1} className="w-full h-full" />
          <div className="absolute top-0 left-0 opacity-0 w-full h-full hover:opacity-100 hover:bg-white">
            <img src={item.img2} />
          </div>
          <span className="absolute top-2 left-2 text-white rounded-xl text-xs bg-red-600 px-2 py-0.5">
            {item.save}
          </span>
        </div>
        <div className="p-3">
          <h4 className="font-semibold">{item.title}</h4>
          <p className="text-lg text-red-600">{item.rupess}</p>
          <del className="text-gray-500 text-sm">{item.deleterupees}</del>
        </div>
      </div>
    );
  });

  return (
    <div className="w-[90%] m-auto my-5">
      <h5 className="text-blue-600 font-semibold">{product.title}</h5>
      <h2 className="text-3xl my-2 font-medium">{product.title2}</h2>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-5">
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
    <div>
      <div className="bg-[url('/image/TonersPowerX.webp')] h-screen w-full bg-no-repeat bg-center bg-origin-content">
        {/* <img src="" /> */}
        <div className=" flex items-end justify-center lg:pb-24 pb-14 h-full text-center">
          <div>
            <h3 className="text-3xl font-extrabold">{dataprinter.heading}</h3>
            <p className="py-4">
              <b className="">{dataprinter.parabold}</b> {dataprinter.para}
            </p>
            <div className="">
              <div>
                <button type="" className="px-6 py-2  bg-blue-500 rounded-lg">
                  {dataprinter.btn1}
                </button>
                <button
                  type=""
                  className="px-6 py-2 mx-2 bg-blue-500 rounded-lg"
                >
                  {dataprinter.btn2}
                </button>
                <button type="" className="px-6 py-2 bg-blue-500 rounded-lg">
                  {dataprinter.btn3}
                </button>
                <button
                  type=""
                  className="px-6 py-2 mx-2  bg-blue-500 rounded-lg"
                >
                  {dataprinter.btn4}
                </button>
              </div>
            </div>
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
    console.log(item, "HandleClick");
    setImage(item.img);
  };
  return (
    <div className="w-[95%] m-auto my-5 bg-gray-300 p-5 rounded-xl">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <div class="flex items-center gap-5">
            <div class="">
              {productlist.map((item, index) => {
                console.log(productlist, "productlist ");
                return (
                  <img
                    src={item.img}
                    key={index}
                    className="w-20 my-2"
                    onClick={() => productClick(item)}
                  />
                );
              })}
            </div>
            <div className="">
              <img src={Image} alt="Mein Image" className="rounded-xl w-100" />
            </div>
          </div>
        </div>
        <div>
          <p className="text-2xl mb-5">{product.head}</p>
          <h4 className="text-3xl font-semibold my-5">{product.head1}</h4>
          <p className="flex gap-5 items-end pb-5 border-b border-b-white">
            <span className="text-red-600 text-2xl">{product.rupess}</span>
            <del className="text-xl">{product.discountprice}</del>
            <span className="bg-red-600 text-white text-sm px-4 py-1 rounded-lg">
              {product.span}
            </span>
          </p>
          <Accordion />
          <label htmlFor="" className="text-lg">
            Quantity :
          </label>
          <div className="flex items-center gap-5 border rounded-lg my-3 py-2 px-4 border-black text-xl w-40 mb-10">
            <button className="px-3 text-2xl ">-</button>
            <span>2</span>
            <button className="px-3 text-2xl">+</button>
          </div>
          <button className="mr-4 px-8 py-2 rounded-lg font-semibold text-lg bg-blue-400 text-white">
            {product.btn1}
          </button>
          <button className=" px-8 py-2 rounded-lg font-semibold text-lg bg-black text-white">
            {product.btn2}
          </button>
        </div>
      </div>
    </div>
  );
};

const CPUcooling = () => {
  return (
    <div className="w-[95%] m-auto">
      <div className="">
        <h6 className="text-md font-semibold">Chill Your Worries Away</h6>
        <h2 className="text-3xl font-semibold my-5">
          The Ultimate CPU Cooling Experience
        </h2>
        <p>Unleash Peak Performance</p>
        <button
          type=""
          className="my-5 bg-blue-600 text-white px-6 py-3 font-semibold rounded-lg"
        >
          Learn more
        </button>

        <table className="w-full my-10 overflow-x-auto">
          <tbody>
            <tr className="">
              <td className="w-96"></td>
              <td className="">
                <div className="grid place-items-start pl-3">
                  <img
                    src="/image/Inclined_b5a8b4e8-6812-496d-9e0d-1a83b4d1563c.avif"
                    alt="hello"
                  />
                </div>
                <h4 className="font-semibold mt-2">Ultra CPU Cooler</h4>
                <p className=" my-2">
                  <span className="text-red-600 mr-2 text-lg">
                    Rs. 2,999.00
                  </span>
                  <del className="text-grey-400">Rs. 3,999.00</del>
                </p>
                <button className="mt-3 mb-10 py-2 px-4 bg-gray-300 font-medium rounded-lg">
                  View
                </button>
              </td>
              <td className="">
                <div className="grid place-items-start pl-3">
                  <img
                    src="/image/Inclined_b5a8b4e8-6812-496d-9e0d-1a83b4d1563c.avif"
                    alt="hello"
                  />
                </div>
                <h4 className="font-semibold mt-2">Ultra CPU Cooler</h4>
                <p className=" my-2">
                  <span className="text-red-600 mr-2 text-lg">
                    Rs. 2,999.00
                  </span>
                  <del className="text-grey-400">Rs. 3,999.00</del>
                </p>
                <button className="mt-3 mb-10 py-2 px-4 bg-gray-300 font-medium rounded-lg">
                  View
                </button>
              </td>
              <td className="">
                <div className="grid place-items-start pl-3">
                  <img
                    src="/image/Inclined_b5a8b4e8-6812-496d-9e0d-1a83b4d1563c.avif"
                    alt="hello"
                  />
                </div>
                <h4 className="font-semibold mt-2">Ultra CPU Cooler</h4>
                <p className=" my-2">
                  <span className="text-red-600 mr-2 text-lg">
                    Rs. 2,999.00
                  </span>
                  <del className="text-grey-400">Rs. 3,999.00</del>
                </p>
                <button className="mt-3 mb-10 py-2 px-4 bg-gray-300 font-medium rounded-lg">
                  View
                </button>
              </td>
            </tr>

            <tr className="border-y-2 border-gray-300  ">
              <th className="py-5 ">Lightweight</th>
              <td>Weighs 300g</td>
              <td>Weighs 200g+/-5g</td>
              <td>Weighs 175g+/-5g</td>
            </tr>

            <tr className="border-y-2 border-gray-300  ">
              <th className="py-5 ">Support</th>
              <td>Processor 12th & 13th Generation</td>
              <td>All Processors 1st Gen to 11th Generation</td>
              <td>All Processors 1st Gen to 11th Generation</td>
            </tr>

            <tr className="border-y-2 border-gray-300  ">
              <th className="py-5 ">Speed Range</th>
              <td>Operates at 800-3000rpm range for customizable cooling</td>
              <td>Operates at 900-2900rpm+/-10% for customizable fan speed.</td>
              <td>Operates at 2300rpm+/-10% for effective heat dissipation</td>
            </tr>

            <tr className="border-y-2 border-gray-300  ">
              <th className="py-5 ">PWM Control</th>
              <td>Precise temperature regulation</td>
              <td>Allows dynamic control</td>
              <td>Enhances cooling efficiency</td>
            </tr>
          </tbody>
        </table>
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
    <>
      <div className="relative">
        <div className="lg:absolute lg:top-12 lg:left-24 lg:w-96 w-[95%] lg:m-0 m-auto">
          <h3 className="text-3xl font-semibold">
            High-Speed 6 in 1 Card Reader
          </h3>
          <h6 className="mt-8 mb-1 font-bold text-md">
            Plug-and-play convenience
          </h6>
          <p className="leading-7 tracking-wide">
            Compatible with a wide range of memory card formats, including SDXC,
            SDHC, SD, MMC, RS-MMC, Micro SDXC, Micro SD, Micro SDHC, and UHS-I
            Cards.
          </p>
          <button
            type=""
            className="px-6 py-3 bg-blue-500 text-white my-3 rounded-lg font-semibold"
          >
            Buy Now
          </button>
        </div>
        <img src={Cradread} />

        <div className="absolute top-28 right-1/4 lg:block hidden">
          <Popover content={content1} placement="right">
            <Button className="rounded-full ">
              <span class="text-lg font-bold">
                <i class="fa-solid fa-plus"></i>
              </span>
            </Button>
          </Popover>
        </div>
        <div className="absolute top-2/3 left-1/4 lg:block hidden">
          <Popover content={content2} placement="right">
            <Button className="rounded-full ">
              <span class="text-lg font-bold">
                <i class="fa-solid fa-plus"></i>
              </span>
            </Button>
          </Popover>
        </div>
        <div className="absolute top-2/3 right-1/3 lg:block hidden">
          <Popover content={content3} placement="right">
            <Button className="rounded-full ">
              <span class="text-lg font-bold">
                <i class="fa-solid fa-plus"></i>
              </span>
            </Button>
          </Popover>
        </div>

        <div className="absolute top-96 right-24 lg:block hidden">
          <Popover content={content4} placement="right">
            <Button className="rounded-full ">
              <span class="text-lg font-bold">
                <i class="fa-solid fa-plus"></i>
              </span>
            </Button>
          </Popover>
        </div>
      </div>
    </>
  );
};

const Ram = () => {
  return (
    <>
      <div className="w-[95%] m-auto my-5">
        <div className="lg:flex gap-5">
          <div class=" py-5">
            <div className="mb-5">
              <h3 className="text-3xl font-semibold mb-8">RAM's</h3>
              <p>Dominate Every Task with Our Premium Quality RAM Modules</p>
            </div>
            <div className="leading-10 my-5">
              <h5 className="text-md font-semibold">LAPTOP RAMS</h5>
              <ul>
                <li>DDR3 1600 - 16IC - 4GB / 8GB</li>
                <li>DDR4 2666 - 4GB / 8GB / 16GB / 32GB</li>
                <li>DDR4 3200 - 4GB / 8GB / 16GB / 32GB</li>
              </ul>
            </div>

            <div className="leading-10 mt-5">
              <h5 className="text-md font-semibold">DESKTOP RAMS</h5>
              <ul>
                <li>DDR3 1600 - 16IC - 4GB / 8GB</li>
                <li>DDR4 2666 - 4GB / 8GB / 16GB / 32GB</li>
                <li>DDR4 3200 - 4GB / 8GB / 16GB / 32GB</li>
              </ul>
            </div>
          </div>
          <div>
            <Example />
          </div>
        </div>
      </div>
    </>
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
