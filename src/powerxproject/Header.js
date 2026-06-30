import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import Submenu from "./Submenu";
import SideDrawer from "../SideDrawer/SideDrawer";
import BackDrop from "../SideDrawer/BackDrop";
import Userlogin from "./Userlogin";
import Productlist from "../datalist/Productlist";
import SearchProduct from "../components/SearchProduct";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function Header(props) {
  const [open, setOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState(false);
  const OpenDrawerHandler = () => {
    setOpen(true);
  };

  const closeDrawerHandler = () => {
    setOpen(false);
  };
  const header = {
    img_log: "image/logoavs.png",
    about: "About",
    branches: "Branches",
    products: "Products",
    rma_poloicy: "RMA Policy",
    contact_us: "Contact Us",
  };
  // const compo = (
  //   <div className="lg:md:hidden block text-black">
  //     <ul className="text-left p-5">
  //       <li className={classes.Menu_mobile}>
  //         <Link to="/about-us">{header.about}</Link>
  //       </li>
  //       <li className={classes.Menu_mobile}>
  //         <Link to="/branch">{header.branches}</Link>
  //       </li>
  //       <li className={classes.Menu_mobile}>
  //         <Link to="/product">{header.products}</Link>
  //         <div className="">
  //           <Submenu />
  //         </div>
  //       </li>

  //       <li className={classes.Menu_mobile}>
  //         <Link to="/rma-policy">{header.rma_poloicy}</Link>
  //       </li>
  //       <li className={classes.Menu_mobile}>
  //         <Link to="/contact-us">{header.contact_us}</Link>
  //       </li>
  //     </ul>
  //   </div>
  // );
  return (
    <>
      {open && <BackDrop onClick={closeDrawerHandler} />}

      <SideDrawer show={open}
      //onClick={closeDrawerHandler}
      >
        <div className="md:hidden block text-slate-800 w-72 h-full bg-white shadow-2xl overflow-y-auto">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <img src={header.img_log} alt="Logo" className="w-32 object-contain" />
            <button onClick={closeDrawerHandler} className="text-slate-400 hover:text-slate-700 text-xl p-2 bg-slate-50 rounded-full">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <ul className="text-left p-4 flex flex-col gap-2">
            <li>
              <NavLink
                to="/about-us"
                onClick={closeDrawerHandler}
                className={({ isActive }) => `block py-3.5 px-4 rounded-xl transition-all font-medium ${isActive ? 'bg-primary-50 text-primary-600 font-bold' : 'text-slate-700 hover:bg-slate-50'}`}
              >{header.about}</NavLink>
            </li>
            <li>
              <NavLink
                to="/branch"
                onClick={closeDrawerHandler}
                className={({ isActive }) => `block py-3.5 px-4 rounded-xl transition-all font-medium ${isActive ? 'bg-primary-50 text-primary-600 font-bold' : 'text-slate-700 hover:bg-slate-50'}`}
              >{header.branches}</NavLink>
            </li>
            <li className="flex flex-col">
              <div className="flex items-center justify-between py-1 px-2 rounded-xl hover:bg-slate-50 transition-colors">
                <NavLink
                  to="/product"
                  onClick={() => setIsMobileSubmenuOpen(!isMobileSubmenuOpen)}
                  className={({ isActive }) => `flex-1 py-2.5 px-2 font-medium transition-colors ${isActive ? 'text-primary-600 font-bold' : 'text-slate-700'}`}
                >
                  {header.products}
                </NavLink>
                <button
                  className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors flex items-center justify-center w-10 h-10"
                >
                  <ArrowDropDownIcon className={`transition-transform duration-300 ${isMobileSubmenuOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isMobileSubmenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                  <Submenu prodList={Productlist} onClickItem={closeDrawerHandler} />
                </div>
              </div>
            </li>

            <li>
              <NavLink
                to="/rma-policy"
                onClick={closeDrawerHandler}
                className={({ isActive }) => `block py-3.5 px-4 rounded-xl transition-all font-medium ${isActive ? 'bg-primary-50 text-primary-600 font-bold' : 'text-slate-700 hover:bg-slate-50'}`}
              >{header.rma_poloicy}</NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                onClick={closeDrawerHandler}
                className={({ isActive }) => `block py-3.5 px-4 rounded-xl transition-all font-medium ${isActive ? 'bg-primary-50 text-primary-600 font-bold' : 'text-slate-700 hover:bg-slate-50'}`}
              >{header.contact_us}</NavLink>
            </li>
          </ul>
        </div>
      </SideDrawer>
      {/* <SideDrawer show={open} onClick={closeDrawerHandler} children={compo} /> */}

      <div className={classes.navbar}>
        <nav className={classes.Main_Header}>
          <div className="Log">
            <Link to="/">
              <img
                src={header.img_log}
                alt="Logo"
                className="w-32 sm:w-48 lg:w-64 object-contain"
              />
            </Link>
          </div>
          <div className="hidden lg:block">
            <ul className={classes.Header_Subcat}>
              <li className={classes.Menu}>
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    isActive
                      ? `${classes.headerItem} ${classes.active}`
                      : `${classes.headerItem}`
                  }
                >
                  {header.about}
                </NavLink>
              </li>
              <li className={classes.Menu}>
                <NavLink
                  to="/branch"
                  className={({ isActive }) =>
                    isActive
                      ? `${classes.headerItem} ${classes.active}`
                      : `${classes.headerItem}`
                  }
                >
                  {header.branches}
                </NavLink>
              </li>
              {/* Product Mega Menu - We don't use classes.Menu here to avoid 'relative' positioning constraint */}
              <li className="relative hover:text-primary-600 transition-colors duration-300 py-2 px-1 rounded-md group">
                <NavLink
                  to="/product"
                  className={({ isActive }) =>
                    isActive
                      ? `${classes.headerItem} ${classes.active}`
                      : `${classes.headerItem}`
                  }
                >{header.products}</NavLink>
                <div className="absolute top-full left-0 w-full hidden group-hover:block z-[100]">
                  <Submenu prodList={Productlist} />
                </div>
              </li>
              <li className={classes.Menu}>
                <NavLink
                  to="/rma-policy"
                  className={({ isActive }) =>
                    isActive
                      ? `${classes.headerItem} ${classes.active}`
                      : `${classes.headerItem}`
                  }
                >{header.rma_poloicy}</NavLink>
              </li>
              <li className={classes.Menu}>
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    isActive
                      ? `${classes.headerItem} ${classes.active}`
                      : `${classes.headerItem}`
                  }
                >{header.contact_us}</NavLink>
              </li>
            </ul>
          </div>
          <div className={classes.User_Header}>
            <button
              type="button"
              className="text-slate-700 hover:text-primary-600 transition-colors text-xl p-2 rounded-full hover:bg-slate-100"
              onClick={() => { setIsSearchOpen(true); }}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <Userlogin />
            {/* <button type="" className="">
              <i class="fa-solid fa-cart-shopping"></i>
            </button> */}

            <button className="block lg:hidden ml-4 text-2xl text-slate-800 p-2" onClick={OpenDrawerHandler}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </nav>
      </div>

      {/* Global Search Overlay */}
      {isSearchOpen && (
        <SearchProduct
          setIsSearchOpen={setIsSearchOpen}
          closeDrawerHandler={closeDrawerHandler}
          OpenDrawerHandler={OpenDrawerHandler}
          Productlist={Productlist}
        />
      )}
    </>
  );
}

export default Header;
