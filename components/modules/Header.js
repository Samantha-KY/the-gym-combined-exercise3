/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "./Button";

function Header() {
  const [scrollOutOfRange, setScrollOutOfRange] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        window.pageYOffset > 50
          ? setScrollOutOfRange(true)
          : setScrollOutOfRange(false);
      };
    }
  }, []);
  return (
    <section
      className={`text-white w-full z-20 top-0 sticky ${scrollOutOfRange ? "bg-white text-black" : "bg-hero bg-black/90"
        }`}
    >
      <div className="flex items-center justify-between gap:10 w-full p-6 m-0 max-w-7xl mx-auto md:px-20">
        <div>
          <h1 className="text-3xl font-cinnamonbold">CINNAMON</h1>
        </div>
        <div className="md:flex justify-between items-center gap-8 hidden">
          <ul className="md:flex justify-between gap-4 hidden font-cinnamonsemibold">
            <Link href="/project">
              <li>Projects</li>
            </Link>

            <Link href="/service">
              <li>Services</li>
            </Link>

            <Link href="/about">
              <li>About Us</li>
            </Link>

            <Link href="/career">
              <li>Carrers</li>
            </Link>

            <Link href="/blog">
              <li>Blog</li>
            </Link>

          </ul>
          <div className="md:flex justify-between items-center gap-6 hidden -mt-1">
            <div
              className={`w-fit h-fit border-[0.188rem] transition-box-shadow duration-300 ease-in-out hover:shadow-button hover:border-indigo-600 border-white
            rounded-full p-2 cursor-pointer ${scrollOutOfRange ? "bg-white border-indigo-600":"bg-zinc-900"}`}
            >
              <img src={`${scrollOutOfRange ? "headerScroll.svg":"headerIcon.svg"}`} alt="header" className='w-8 h-8 ' />
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
