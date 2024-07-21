import React from "react";
import classes from "./Submenu.module.css";
import { Link } from "react-router-dom";

function Submenu(props) {
  const produtlist = [
    {
      list: "Motherboards",
      link: "",
    },
    {
      list: "SSD's",
      links: "",
    },
    {
      list: "ATX Cabinets",
      links: "",
    },
    {
      list: "LED Monitors",
      links: "",
    },
    {
      list: "Keyboard and Mouse",
      links: "",
    },
    {
      list: "SMD SMPS",
      links: "",
    },
    {
      list: "Toner Cartridges",
      links: "",
    },
    {
      list: "Graphic Card",
      links: "",
    },
    {
      list: "CPU Cooler Fans",
      links: "",
    },
    {
      list: "External Casing and WiFi",
      links: "",
    },
    {
      list: "Speakers",
      links: "",
    },
    {
      list: "Screen Cleaning Kit",
      links: "",
    },
    {
      list: "RAM's",
      links: "",
    },
    {
      list: "Laptop Accessories",
      links: "",
    },
  ];

  return (
    <>
      <ul className={`${classes.Productlist} lg:md:block hidden`}>
        {produtlist.map((item) => {
          return (
            <li>
              <Link to="">{item.list}</Link>
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
