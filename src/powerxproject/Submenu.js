import React, { useState } from "react";
import classes from "./Submenu.module.css";
import { Link } from "react-router-dom";
import Productlist from "../datalist/Productlist";
function Submenu(props) {
  const produtlist = [
    {
      list: "Motherboards",
      links: "/motherboards",
    },
    {
      list: "SSD's",
      links: "/ssd",
    },
    {
      list: "ATX Cabinets",
      links: "/atx-cabinets",
    },
    {
      list: "LED Monitors",
      links: "/led-monitors",
    },
    {
      list: "Keyboard and Mouse",
      links: "/keyboard-mouse",
    },
    {
      list: "SMD SMPS",
      links: "/smd-spms",
    },
    {
      list: "Toner Cartridges",
      links: "/toner-catridges",
    },
    {
      list: "Graphic Card",
      links: "/graphic-card",
    },
    {
      list: "CPU Cooler Fans",
      links: "/cpu-cooler-fans",
    },
    {
      list: "External Casing and WiFi",
      links: "/external-casing-wifi",
    },
    {
      list: "Speakers",
      links: "/speaker",
    },
    {
      list: "Screen Cleaning Kit",
      links: "/screen-cleaning-kit",
    },
    {
      list: "RAM's",
      links: "/ram",
    },
    {
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
      <ul className={`${classes.Productlist} lg:md:block hidden`}>
        {produtlist.map((item) => {
          return (
            <li
              onClick={() => {
                filterItem(
                  item.list
                  // console.log(item.list, "iuiyhdfgydbnbnvfdjnjn")
                );
              }}
            >
              <Link to={item.links}>{item.list}</Link>
            </li>
          );
        })}
      </ul>

      {/* .....Formobile... */}
      <ul className={`lg:md:hidden block py-2`}>
        {produtlist.map((item) => {
          return (
            <li className="border-b bottom-1 border-black">
              <Link to="">{item.list}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Submenu;
