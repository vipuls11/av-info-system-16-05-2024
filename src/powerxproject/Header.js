import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import Submenu from "./Submenu";

function Header(props) {
  const header = {
    img_log: "./image/logoavs.png",
    about: "About",
    branches: "branches",
    products: "Products",
    rma_poloicy: "RMA Policy",
    contact_us: "Contact Us",
    // search: <FontAwesomeIcon icon="fa-solid fa-user" />,
    // user: <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />,
    // cart: <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />,
  };

  return (
    <>
      <nav className={classes.Main_Header}>
        <div className="Log">
          <Link to="/">
            <img
              src={header.img_log}
              alt="log-Image"
              className="lg:w-full md:w-72 w-52"
            />
          </Link>
        </div>
        <div className="lg:md:block hidden">
          <ul className={classes.Header_Subcat}>
            <li className="Menu">
              <Link to="/footer">{header.about}</Link>
            </li>
            <li className="Menu">
              <Link to="">{header.branches}</Link>
            </li>
            <li className={classes.Menu}>
              {header.products}
              <div className={classes.Submenu}>
                <Submenu />
              </div>
            </li>
            <li className="Menu">
              <Link to="">{header.rma_poloicy}</Link>
            </li>
            <li className="Menu">
              <Link to="">{header.contact_us}</Link>
            </li>
          </ul>
        </div>
        <div className={classes.User_Header}>
          <button type="" className="">
            {/* {header.search} */}
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
          <button type="" className="">
            {/* {header.user} */}
            <i class="fa-solid fa-user"></i>
          </button>
          <button type="" className="">
            {/* {header.cart} */}
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
          <button className="block lg:md:hidden">
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Header;
