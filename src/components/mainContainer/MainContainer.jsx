"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MainContainer = () => {
  const recipientEmail = "ashishviradiya153@gmail.com";
  return (
    <div className="flex background_color bg-hero-pattern fixed top-0 left-0 bg-cover bg-no-repeat w-screen min-h-screen">
      <div className="bg-primary/40  w-full flex-col justify-between  font-dosis min-h-screen  flex pt-10">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="lineUp flex justify-center   w-full h-full text-center mt-23 md:mt-44 text-white/90 uppercase md:font-semibold text-5xl px-2 md:text-6xl">
            Hello, I am Ashish Viradiya
          </h1>
          <h2 className="flex text-white  justify-center flex-col text-lg  md:text-xl max-w-2xl px-12 text-center font-medium text-effect">
            A tech alchemist, turning ideas into code-driven gold. I have a
            passion for all thing technology and creative things development.
          </h2>
          <div className="flex flex-row gap-12 uppercase flex-wrap mt-10  text-white">
            <Link
              href={"/projects"}
              className="uppercase duration-300 hover:scale-110 tracking-widest background_color hover:shadow-xl  py-3 px-5 rounded-lg lineRight"
            >
              PROJECTS
            </Link>

            {/* <button className="uppercase background_color hover:shadow-xl py-3 px-5 rounded-lg lineLeft">
              Resume
            </button> */}
          </div>
        </div>
        <div className="flex pb-5 sm:pb-3  flex-row justify-between items-center w-full px-3 md:px-6   font-semibold ">
          <div className="flex justify-center gap-1 flex-col ">
            <Link
              href="https://github.com/AshishViradiya153"
              target="_blank"
              rel="noreferrer"
              className="transform scale-100 transition duration-300 ease-in-out hover:scale-125"
            >
              <Image
                src="/icons/github.svg"
                width={23}
                height={23}
                loading="eager"
                alt="git icon"
              />
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/8232345835"
              className="transform scale-100 transition duration-300 ease-in-out hover:scale-125"
            >
              <Image
                src="/icons/whatsapp.svg"
                width={23}
                height={23}
                loading="eager"
                alt="whatsapp icon"
              />
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/ashish-viradiya-0a712b239/"
              className="transform scale-100 transition duration-300 ease-in-out hover:scale-125"
            >
              <Image
                src="/icons/linkedin.svg"
                width={23}
                height={23}
                loading="eager"
                alt="linkedin icon"
              />
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={`mailto:${recipientEmail}`}
              className="transform scale-100 transition duration-300 ease-in-out hover:scale-125"
            >
              <Image
                src="/icons/email.svg"
                width={23}
                height={23}
                loading="eager"
                alt="mail icon"
              />
            </Link>
          </div>
          <div className="flex h-full  items-end">
            <span className=" text_effect text-xl uppercase text-gray-300 hover:text-black ">
              I LOVE TO Learn MORE!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
