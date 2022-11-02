/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Button from "./Button";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  return (
    <section
      className={`text-white w-full z-20 top-0 sticky ${
        isScrolled ? "bg-white" : "bg-hero bg-black/90"
      }`}
    >
      <div className="flex items-center justify-between gap:10 w-full p-6 m-0 max-w-7xl mx-auto md:px-20">
        <div>
          <h1 className="text-3xl font-bold">CINNAMON</h1>
        </div>
        <div className="md:flex justify-between items-center gap-8 hidden">
          <ul className="md:flex justify-between gap-4 hidden">
            <li>Projects</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Carrers</li>
            <li>Blog</li>
          </ul>
          <div className="md:flex justify-between items-center gap-6 hidden -mt-1">
            <div
              className={`w-fit h-fit bg-[#1C1C1C] border-[3px] transition-box-shadow duration-300 ease-in-out hover:shadow-button hover:border-[#5135FF] border-white
            rounded-full p-2 cursor-pointer`}
            >
              <img src="headerIcon.svg" alt="header" className="w-8 h-8 " />
            </div>
            <Button title="Contact us" />
          </div>
        </div>
        <img src="menuIcon.svg" alt="menu" className="md:hidden" />
      </div>
    </section>
  );
}

export default Header;
