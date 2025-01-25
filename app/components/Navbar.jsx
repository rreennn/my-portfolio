import React, { useRef } from "react";
import Image from "next/image";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";

export default function Navbar() {
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  return (
    <nav className=" w-full">
      <div className="md:hidden flex justify-between py-4 px-5 sticky top-0 shadow-md">
        <p className="font-bold">Ren's Portfolio</p>
        <button onClick={openMenu}>
          <Image src={menu} alt="menu-icon" width={30} />
        </button>
      </div>
      <div className="hidden shadow-md md:flex font-bold justify-between sticky z-10 top-0 gap-5 px-5 py-4 w-full lg:px-8 xl:px-[8%]">
        <div>Ren's Portfolio</div>
        <div className="flex justify-end gap-5">
          <a href="#about" className="hover:text-red-400 duration-200">
            About Me
          </a>
          <a href="#project" className="hover:text-red-400 duration-200">
            My Project
          </a>
          <a href="#links" className="hover:text-red-400 duration-200">
            Contact
          </a>
        </div>
      </div>
      <ul
        ref={sideMenuRef}
        className="flex md:hidden shadow-md w-[50%] flex-col gap-4 py-20 px-10 fixed -right-64 bottom-0 top-0 h-screen bg-white transition duration-100"
      >
        <button className="absolute right-6 top-6">
          <Image src={close} alt="close-icon" width={30} onClick={closeMenu} />
        </button>
        <li onClick={closeMenu}>
          <a
            href="#about"
            className="hover:text-red-800 duration-200 font-bold"
          >
            About Me
          </a>
        </li>
        <li onClick={closeMenu}>
          <a
            href="#project"
            className="hover:text-red-800 duration-200 font-bold"
          >
            My Project
          </a>
        </li>
        <li onClick={closeMenu}>
          <a
            href="#links"
            className="hover:text-red-800 duration-200 font-bold"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
