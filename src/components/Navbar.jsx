import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "@/constants/index.js";
import { logo, menu, close } from "@/assets/index.js";
import { styles } from "../styles.js";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toogle, setToogle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center  mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px]] font-bold cursor-pointer flex">
            Huỳnh Bảo Ngọc &nbsp; <span className="sm:block hidden">| Software Engineer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flew-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toogle ? close : menu}
            alt="menu"
            className="w-7 h-7 object-contain"
            onClick={() => setToogle(!toogle)}
          />

          <div
            className={`${!toogle ? "hidden" : "flex flex-col"} p-6 black-gradient absolute top-10 right-0 mx-4 my-2 min-w-35 z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium hover:text-white text-[18px] cursor-pointer`}
                  onClick={() => {
                    setToogle(!toogle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
