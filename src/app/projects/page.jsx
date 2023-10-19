import React from "react";
import { SpotlightCard } from "@/components/cardLight/Spotlight";
import Spotlight from "@/components/cardLight/Spotlight";
import Image from "next/image";
import Link from "next/link";
import RootLayout from "../layout";

const data = [
  {
    imgUrl: "/images/leadInnovationTour.png",
    projectName: "LEAD Innovation Tour",
    tag: ["ReactJs", "NodeJs", "MongoDb"],
    discription:
      "A revolutionary online platform showcasing the forefront of global innovation, where curiosity meets creativity. My role was develop frontend and write backend.",
    websiteUrl: "https://innovationtour.co/#/",
    gitLink: "",
  },
  {
    imgUrl: "/images/ndt.jpg",
    projectName: "Ndt And Quality",
    tag: ["ReactJs", "NestJs", "MongoDb", "GraphQL"],
    discription:
      "It strive to be a leading resource hub, offering a wide range of educational materials, training programs, and industry-specific solutions to meet the evolving needs of their clients. I played a pivotal role in developing 80% of this application frontend.",
    websiteUrl: "https://ndtandquality.com/",
    gitLink: "",
  },
  {
    imgUrl: "/images/chat.png",
    projectName: "Chat & Group Video call webapp",
    tag: ["ReactJs", "NodeJs", "MongoDb", "Soket.io", "webRTC"],
    discription:
      "Experience seamless real-time video calls with Chat & Gropt, a web application leveraging Socket.IO and WebRTC technologies for enhanced communication.",
    websiteUrl: "",
    gitLink:
      "https://github.com/AshishViradiya153/Real-time-Text-chat-and-Video-Calling-Webapp",
  },
  {
    imgUrl: "/images/ejob.png",
    projectName: "EJOB-Job Tracking App",
    tag: ["ReactJs", "NodeJs", "MongoDb", "Styled Components"],
    discription:
      "Empowering admins to effortlessly manage job listings and track their progress through three key stages: pending, interview, and declared.",
    websiteUrl: "",
    gitLink: "https://github.com/AshishViradiya153/E-JOB-job-tracking-system",
  },
  {
    imgUrl: "/images/yourworldtour.jpg",
    projectName: "YourWorldTour.",
    tag: ["NextJs"],
    discription:
      "YourWorlTour. is a immersive tour webapp offering captivating visuals and expert guidance, allowing users to purchase tour-related items. Explore, shop, and enhance your travel experience.",
    websiteUrl: "",
    gitLink: "https://github.com/AshishViradiya153/YourWorldTour.",
  },
  {
    imgUrl: "/images/yourshop.jpg",
    projectName: "YOURShop. Ecom",
    tag: ["ReactJs", "Styled-components"],
    discription:
      "YOURShop. Ecom webapp contains the user interface (UI) design for an interactive and user-friendly e-commerce web application. The UI allows users to explore a wide range of products, add them to their cart, and make purchases with ease.",
    websiteUrl: "",
    gitLink: "https://github.com/AshishViradiya153/YourWorldTour.",
  },
  {
    imgUrl: "/images/resort.jpg",
    projectName: "Beach resort",
    tag: ["ReactJs", "Styled Components"],
    discription:
      "Discover every rooms and choose best rooms for you and your Family. We provide you better experience to enjoy your beach resort. tell us your needs, we give you what best suits to you",
    websiteUrl: "",
    gitLink: "https://github.com/AshishViradiya153/Resort-project",
  },
  {
    imgUrl: "/images/brother.png",
    projectName: "BROTHER.",
    tag: ["ReactJs", "tailwind css"],
    discription:
      "Discover the perfect blend of fashion and convenience with our e-commerce fashion web app, offering a diverse collection of clothing and accessories for both men and women.",
    websiteUrl: "",
    gitLink: "https://github.com/AshishViradiya153/BROTHER.-Cloth-Shop",
  },
];
const page = () => {
  return (
    <div className="flex background_color flex-col  min-h-screen pt-24 ">
      <Spotlight className="px-10  mb-5 grid  gap-6 sm:px-24 md:grid-cols-2 lg:grid-cols-3 items-start  group">
        {/* Card */}
        {data.map((data) => {
          return (
            <SpotlightCard>
              <div className="relative h-full background_color px-6 pt-6 pb-2 rounded-[inherit] z-20 overflow-hidden">
                {/* Radial gradient */}
                <div className="flex flex-col h-full ">
                  {/* Image */}
                  <div className="relative inline-flex w-full ">
                    <div
                      className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                      aria-hidden="true"
                    ></div>
                    <Image
                      className="rounded-md w-full"
                      src={data.imgUrl}
                      width={337}
                      height={250}
                      loading="eager"
                      alt="Card 01"
                    />
                  </div>
                  {/* Text */}
                  <div className="grow mt-3 p-2">
                    <h2 className="text-xl  font-bold mb-1 text-[#CC8BF2]">
                      {data.projectName}
                    </h2>
                    <p className="text-justify font-sans text-base text-white font-light">
                      {data.discription}
                    </p>
                    <p className="text-sm  cursor flex flex-wrap  gap-2 mt-1">
                      {data.tag.map((tag) => {
                        return (
                          <div className="hover:text-white cursor-default font-mono text-slate-200 text-base font-semibold">{`#${tag}`}</div>
                        );
                      })}
                    </p>
                    <div className="flex flex-row gap-3 ">
                      {data?.gitLink.length > 0 && (
                        <Link
                          href={data?.gitLink}
                          target="_blank"
                          rel="noreferrer"
                          className="flex text-lg font-semibold link hover:text-white"
                        >
                          Github
                        </Link>
                      )}
                      {data?.websiteUrl && (
                        <Link
                          href={data?.websiteUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex text-lg font-semibold link hover:text-white"
                        >
                          Live
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          );
        })}
      </Spotlight>
    </div>
  );
};

export default page;
