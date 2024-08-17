import React, { useState } from "react";
import classes from "./Submenu.module.css";
import { Link } from "react-router-dom";
import Productlist from "../datalist/Productlist";
function Submenu() {
  const produtlist = [
    {
      id: 1,
      list: "Motherboards",
      links: "/motherboards",
    },
    { id: 2, list: "SSD's", links: "/ssd" },
    {
      id: 3,
      list: "ATX Cabinets",
      links: "/atx-cabinets",
    },
    {
      id: 4,
      list: "LED Monitors",
      links: "/led-monitors",
    },
    {
      id: 5,
      list: "Keyboard and Mouse",
      links: "/keyboard-mouse",
    },
    {
      id: 6,
      list: "SMD SMPS",
      links: "/smd-spms",
    },
    {
      id: 7,
      list: "Toner Cartridges",
      links: "/toner-catridges",
    },
    {
      id: 8,
      list: "Graphic Card",
      links: "/graphic-card",
    },
    {
      id: 9,
      list: "CPU Cooler Fans",
      links: "/cpu-cooler-fans",
    },
    {
      id: 10,
      list: "External Casing and WiFi",
      links: "/external-casing-wifi",
    },
    {
      id: 11,
      list: "Speakers",
      links: "/speaker",
    },
    {
      id: 12,
      list: "Screen Cleaning Kit",
      links: "/screen-cleaning-kit",
    },
    {
      id: 13,
      list: "RAM's",
      links: "/ram",
    },
    {
      id: 14,
      list: "Laptop Accessories",
      links: "/latop-accessories",
    },
  ];

  const [items, setItems] = useState(Productlist);
  console.log(items, "fhdjh");
  const filterItem = (cateItem) => {
    const updatedItems = Productlist.filter((curElem) => {
      return curElem.name === cateItem;
    });
    setItems(updatedItems);
  };

  return (
    <>
      <div className={`${classes.Productlist} lg:md:block hidden`}>
        {produtlist.map((item) => {
          return (
            <Link
              onClick={() => {
                filterItem(
                  item.list
                  // console.log(item.list, "iuiyhdfgydbnbnvfdjnjn")
                );
              }}
              key={item.id}
              to={item.links}
            >
              <p to={item.links}>{item.list}</p>
            </Link>
          );
        })}
      </div>

      {/* .....Formobile... */}
      <ul className={`lg:md:hidden block py-2`}>
        {produtlist.map((item) => {
          return (
            <li
              className="border-b bottom-1 border-black"
              onClick={() => {
                filterItem(
                  item.list
                  // console.log(item.list, "iuiyhdfgydbnbnvfdjnjn")
                );
              }}
              key={item.id}
            >
              <Link to={item.links}>{item.list}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Submenu;
