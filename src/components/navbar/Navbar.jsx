// import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="absolute z-40 flex px-36 mt-8 justify-between w-full text-white">
      <div className="flex flex-col items-center leading-[0.375rem]">
        <Link
          href="/"
          className="text-eff font-dosis uppercase tracking-[0.3rem] font-semibold text-2xl "
        >
          Ashish Viradiya
        </Link>
        <div className="w-full flex justify-end text-blue-400 pr-1">
          Fronend developer
        </div>
      </div>
      <div className="flex gap-8 justify-between items-center  text-md text-lg font-normal">
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
    </div>
  );
};

export default Navbar;
