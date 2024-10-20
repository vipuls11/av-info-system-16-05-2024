import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import Submenu from "./Submenu";
import SideDrawer from "../SideDrawer/SideDrawer";
import BackDrop from "../SideDrawer/BackDrop";
import Productlist from "../datalist/Productlist";
import Userlogin from "./Userlogin";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header(props) {
  const [open, setOpen] = useState(false);
  //  const myRef = useRef(null);

  const OpenDrawerHandler = () => {
    setOpen(true);
  };

  const closeDrawerHandler = () => {
    setOpen(false);
  };
  const header = {
    img_log: "./image/logoavs.png",
    about: "About",
    branches: "Branches",
    products: "Products",
    rma_poloicy: "RMA Policy",
    contact_us: "Contact Us",
  };
  console.log(open, "open");
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

      <SideDrawer show={open} onClick={closeDrawerHandler}>
        <div className="lg:md:hidden block text-black">
          <ul className="text-left p-5">
            <li className={classes.Menu_mobile}>
              <Link to="/about-us">{header.about}</Link>
            </li>
            <li className={classes.Menu_mobile}>
              <Link to="/branch">{header.branches}</Link>
            </li>
            <li className={`${classes.Menu_mobile} `}>
              <Link to="/product" className="flex justify-between">
                {header.products}
                <span className="">
                  <ArrowDropDownIcon />
                </span>
              </Link>
              <div className="">
                <Submenu />
              </div>
            </li>

            <li className={classes.Menu_mobile}>
              <Link to="/rma-policy">{header.rma_poloicy}</Link>
            </li>
            <li className={classes.Menu_mobile}>
              <Link to="/contact-us">{header.contact_us}</Link>
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
                alt="log-Image"
                className="lg:w-82 md:w-72 w-52"
              />
            </Link>
          </div>
          <div className="lg:md:block hidden">
            <ul className={classes.Header_Subcat}>
              <li className="Menu">
                <Link
                  to="/about-us"
                  className={({ isActive }) =>
                    isActive
                      ? `${classes.headerItem} ${classes.active}`
                      : `${classes.headerItem}`
                  }
                >
                  {header.about}
                </Link>
              </li>
              <li className="Menu">
                <Link
                  to="/branch"
                  className={({ isActive }) =>
                    isActive
                      ? `${classes.headerItem} ${classes.active}`
                      : `${classes.headerItem}`
                  }
                >
                  {header.branches}
                </Link>
              </li>
              <li className={classes.Menu}>
                <Link to="/product">{header.products}</Link>
                <div className={classes.Submenu}>
                  <Submenu prodList={Productlist} />
                </div>
              </li>
              <li className="Menu">
                <Link to="/rma-policy">{header.rma_poloicy}</Link>
              </li>
              <li className="Menu">
                <Link to="/contact-us">{header.contact_us}</Link>
              </li>
            </ul>
          </div>
          <div className={classes.User_Header}>
            <button type="" className="">
              {/* {header.search} */}
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            {/* <button type="" className=""> */}
            {/* {header.user} */}
            {/* <i class="fa-solid fa-user"></i>
          </button> */}
            <Userlogin />
            <button type="" className="">
              {/* {header.cart} */}
              <i class="fa-solid fa-cart-shopping"></i>
            </button>

            <button className="block lg:md:hidden" onClick={OpenDrawerHandler}>
              <i class="fa-solid fa-bars"></i>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
