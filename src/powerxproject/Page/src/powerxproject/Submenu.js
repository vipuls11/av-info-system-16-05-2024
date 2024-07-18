import React from "react";
import classes from "./Submenu.module.css";

function Submenu(props) {
  const produtlist = [
    //         Motherboards
    // SSD's
    // ATX Cabinets
    // LED Monitors
    // Keyboard and Mouse
    // SMD SMPS
    // Toner Cartridges
    // Graphic Card
    // CPU Cooler Fans
    // External Casing and WiFi
    // Speakers
    // Screen Cleaning Kit
    // RAM's
    // Laptop Accessories
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
      <ul className={classes.Productlist}>
        <li>Motherboards</li>

        <li>SSD's</li>

        <li>ATX Cabinets</li>

        <li>LED Monitors</li>

        <li>Motherboards</li>

        <li>Motherboards</li>

        <li>Motherboards</li>
        <li>Motherboards</li>
        <li>Motherboards</li>
        <li>Motherboards</li>
        <li>Motherboards</li>

        <li>Motherboards</li>
        <li>Motherboards</li>
      </ul>
    </>
  );
}

export default Submenu;
