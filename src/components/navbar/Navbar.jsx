"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React, { useEffect, useState } from "react";

const Navbar = () => {
  const path = usePathname();
  console.log("🚀 ~ file: Navbar.jsx:9 ~ Navbar ~ path:", path);
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 639) {
        setOpenSidebar(false);
      }
    };

    // Attach the resize event listener
    window.addEventListener("resize", handleResize);
    handleResize();
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggalOpenSidebar = () => {
    setOpenSidebar((prev) => !prev);
  };
  return (
    <div
      className={`absolute z-40   flex px-5  sm:px-12 md:px-28 xl:px-36 pt-8 justify-between 
      ${path === "/thankYou" ? "hidden" : ""}  w-full text-white`}
    >
      <div className="flex flex-col items-center leading-[0.375rem]">
        <Link
          href="/"
          className="text-eff font-dosis whitespace-nowrap uppercase tracking-[0.3rem] font-semibold text-xl sm:text-2xl "
        >
          Ashish Viradiya
        </Link>
        <div className="w-full whitespace-nowrap flex justify-end text-blue-400 pr-1">
          Software Developer
        </div>
      </div>

      <div className="hidden sm:flex gap-8 justify-between items-center  text-md text-lg font-normal">
        <div className="py-1 hover:border-b-2 rounded-sm border-blue-400 transition hover:-translate-y-1 cursor-pointer duration-300 ">
          <Link className="outline-b-2 text-white uppercase" href="/about">
            About
          </Link>
        </div>
        <div className="py-1 hover:border-b-2  rounded-sm border-blue-400 transition hover:-translate-y-1 cursor-pointer duration-300">
          <Link className="uppercase text-white" href="/projects">
            Projects
          </Link>
        </div>
        <div className="py-1 hover:border-b-2  rounded-sm border-blue-400 transition hover:-translate-y-1 cursor-pointer duration-300 ">
          <Link className="uppercase text-white" href="/contact">
            Contact
          </Link>
        </div>
      </div>
      {openSidebar && (
        <div className="fixed font-dosis font-light text-6xl gap-8 overflow-y-hidden  flex justify-center items-center sm:hidden flex-col w-screen z-50 backdrop-blur-md  lineRight h-screen top-0 right-0">
          <div className="absolute top-10 right-10">
            <svg
              onClick={toggalOpenSidebar}
              viewBox="0 0 22 22"
              strokeWidth={2}
              stroke="deepskyblue"
              className="w-8 h-8 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div
            onClick={toggalOpenSidebar}
            className=" hover:scale-110 py-1   hover:tracking-wider  transition hover:-translate-y-1 cursor-pointer duration-300 "
          >
            <Link className="outline-b-2 text-[deepskyblue] uppercase" href="/">
              Home
            </Link>
          </div>
          <div
            onClick={toggalOpenSidebar}
            className="py-1 hover:scale-110  hover:tracking-wider  transition hover:-translate-y-1 cursor-pointer duration-300 "
          >
            <Link
              className="outline-b-2 text-[deepskyblue] uppercase"
              href="/about"
            >
              About
            </Link>
          </div>
          <div
            onClick={toggalOpenSidebar}
            className="py-1 hover:scale-110  hover:tracking-wider transition hover:-translate-y-1 cursor-pointer duration-300"
          >
            <Link className="uppercase text-[deepskyblue]" href="/projects">
              Projects
            </Link>
          </div>
          <div
            onClick={toggalOpenSidebar}
            className="py-1 hover:scale-110 hover:tracking-wider transition hover:-translate-y-1 cursor-pointer duration-300 "
          >
            <Link className="uppercase text-[deepskyblue]" href="/contact">
              Contact
            </Link>
          </div>
        </div>
      )}
      <div className="flex sm:hidden justify-center items-center">
        {!openSidebar && (
          <svg
            onClick={toggalOpenSidebar}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Navbar;
