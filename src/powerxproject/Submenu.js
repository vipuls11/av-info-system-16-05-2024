import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import Productlist from "../datalist/Productlist";
function Submenu({ onClickItem }) {
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

  // eslint-disable-next-line no-unused-vars
  const [items, setItems] = useState(Productlist);
  const filterItem = (cateItem) => {
    const updatedItems = Productlist.filter((curElem) => {
      return curElem.name === cateItem;
    });
    setItems(updatedItems);
  };

  return (
    <>
      <div className="hidden lg:grid grid-cols-3 gap-3 p-6 bg-white/95 backdrop-blur-2xl shadow-2xl shadow-slate-300/50 rounded-2xl border border-slate-100 w-[800px] absolute left-1/2 -translate-x-1/2 z-[100]">
        {produtlist.map((item) => (
          <NavLink
            to={item.links}
            key={item.id}
            onClick={() => filterItem(item.list)}
            className={({ isActive }) => `group flex items-center px-4 py-3 rounded-xl transition-all duration-300 border hover:shadow-sm ${isActive ? 'bg-primary-50 border-primary-100' : 'border-transparent hover:bg-primary-50 hover:border-primary-100'}`}
          >
            {({ isActive }) => (
              <>
                <div className={`w-2 h-2 rounded-full bg-primary-500 mr-3 transition-all transform ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0'}`}></div>
                <p className={`font-semibold transition-colors text-sm ${isActive ? 'text-primary-700' : 'text-slate-700 group-hover:text-primary-700'}`}>{item.list}</p>
              </>
            )}
          </NavLink>
        ))}
      </div>

      {/* .....Formobile... */}
      <ul className="lg:hidden flex flex-col px-6 py-4 bg-white/90 backdrop-blur-xl rounded-2xl mt-4 mx-4 shadow-xl shadow-slate-200/50 border border-white">
        {produtlist.map((item) => (
          <li key={item.id} className="border-b border-slate-100 last:border-0">
            <NavLink
              to={item.links}
              onClick={() => {
                filterItem(item.list);
                if (onClickItem) onClickItem();
              }}
              className={({ isActive }) => `flex items-center py-4 font-semibold transition-colors ${isActive ? 'text-primary-600' : 'text-slate-700 hover:text-primary-600'}`}
            >
              {({ isActive }) => (
                <>
                  <i className={`fa-solid fa-chevron-right text-xs mr-3 ${isActive ? 'text-primary-500' : 'text-primary-300'}`}></i>
                  {item.list}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Submenu;
