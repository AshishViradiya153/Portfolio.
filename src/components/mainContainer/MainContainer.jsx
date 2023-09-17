"use client";
import Link from "next/link";
import React from "react";

const MainContainer = () => {
  const recipientEmail = "ashishviradiya153@gmail.com";
  return (
    <div className="flex bg-hero-pattern fixed top-0 left-0 bg-cover bg-no-repeat w-screen min-h-screen">
      <div className="bg-primary/40  w-full flex-col justify-between  font-dosis min-h-screen  flex pt-10">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="lineUp flex justify-center   w-full h-full text-center mt-28 md:mt-44 text-white/90 uppercase md:font-semibold text-5xl px-2 md:text-6xl">
            Hello, I am Ashish Viradiya
          </h1>
          <h2 className="flex text-white  justify-center flex-col text-lg  md:text-xl max-w-2xl px-12 text-center font-medium text-effect">
            A tech alchemist, turning ideas into code-driven gold. I have a
            passion for all thing technology and creative things development.
          </h2>
          <div className="flex flex-row gap-12 uppercase flex-wrap mt-10  text-white">
            <Link
              href={"/projects"}
              className="uppercase background_color hover:shadow-xl  py-3 px-5 rounded-lg lineRight"
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
            <Link href="https://github.com/AshishViradiya153">
              <svg
                viewBox="0 0 22.5 22"
                className="h-7 w-7 fill-black/80 hover:fill-gray-300"
              >
                <path d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path>
              </svg>
            </Link>
            <Link target="_top" href="https://wa.me/8200345835">
              <svg
                className="h-7 w-7 fill-black/80 hover:fill-gray-300"
                viewBox="0 0 28 28"
              >
                <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"></path>
              </svg>
            </Link>
            <Link href="https://www.linkedin.com/in/ashish-viradiya-0a712b239/">
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-7 fill-black/80 hover:fill-gray-300"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </Link>
            <Link target="_top" href={`mailto:${recipientEmail}`}>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7 hover:fill-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
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
