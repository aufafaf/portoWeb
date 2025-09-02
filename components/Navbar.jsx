import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="bg.png" className="w-full" />
      </div>
      <nav
        className={`w-full fixed px-5 flex items-center justify-between lg:px-8 xl:px-[8%] py-4 z-50 ${
          isScroll ? "bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <a href="">
          <Image
            alt="logo.png"
            src={assets.logo}
            className="w-28 mr-14 cursor-pointer"
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 px-12 py-3 rounded-full lg:gap-8 ${
            isScroll ? "" : "bg-white shadow-sm bg-opacity-50"
          } `}
        >
          <li>
            <a className="font-Ovo" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              Contact Me
            </a>
          </li>
        </ul>

        <div className="flex gap-3 items-center">
          <button>
            <Image src={assets.moon_icon} alt="" className="w-6" />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo"
            alt="contact.logo"
          >
            Contact{" "}
            <Image alt="contact.png" src={assets.arrow_icon} className="w-3" />
          </a>
          <button
            className="block md:hidden ml-3 cursor-pointer"
            onClick={openMenu}
          >
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* ------------ mobile menu -------------- */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#about">
              About
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
