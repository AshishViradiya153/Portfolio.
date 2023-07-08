import SkillCard from "@/components/skillCard/SkillCard";
import React from "react";
import { skills } from "../../../data";
const page = () => {
  return (
      <div className="flex background_color  min-h-screen pt-20">
        <div className="flex flex-col items-center  w-full h-full ">
          <div className="flex flex-col pt-5 items-center gap-2 ">
            <p className="lineUp font-dosis text-3xl text-[#CC8BF2] uppercase font-semibold">
              About me
            </p>
            <span className="w-12 h-1 rounded-md mb-2 bg-slate-400 " />
            <p className="text-effect  text-center  text-slate-300 flex flex-col font-normal max-w-5xl px-10 md:px-32 text-lg md:text-xl">
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </p>
          </div>
          <div className="flex pt-12 flex-col md:flex-row px-8 md:px-24 xl:px-28 gap-16  pb-6">
            <div className="flex flex-col flex-1  ">
              <div className="flex items-end gap-3 flex-col ">
                <p className=" lineUp uppercase text-[#CC8BF2] text-xl font-medium ">
                  Get to Know myself
                </p>
                <span className="w-12 h-1 rounded-md mb-2 bg-slate-400 " />
              </div>

              <div className="lineRight flex text-white flex-col gap-2 pt-6 text-justify  font-medium  font-dosis text-lg">
                <p className=" leading-snug">
                  A{" "}
                  <span className="font-bold text-slate-300/80">
                    Passionate Frontend Developer
                  </span>{" "}
                  currently working at Artrue Infotech. With 2.5 years of
                  learning experience in frontend development and 1 year of
                  professional work experience.
                </p>
                <p className="leading-snug">
                  In my role as a frontend developer, I approach my work with
                  unwavering
                  <span className="font-bold text-slate-300/80">
                    {" "}
                    Focus And Dedication
                  </span>
                  . I take pride in creating websites that meet the specific
                  requirements and needs of clients.
                </p>
                <p className="leading-snug">
                  I am always eager to take on new challenges and believe that
                  everything is possible in frontend development. I find
                  inspiration in my own work ethic and the support of my
                  brother, who is an experienced developer, as well as my
                  colleagues at my workplace.
                </p>
                <p className="leading-snug">
                  To{" "}
                  <span className="font-bold text-slate-300/80">
                    Stay Updated
                  </span>{" "}
                  with the latest trends and advancements in frontend
                  development, I consistently engage in learning new
                  technologies and techniques.
                </p>
                <p className="leading-snug">
                  In addition to my professional pursuits, I am a{" "}
                  <span className="font-bold text-slate-300/80">
                    {" "}
                    Calm, Genuine, and Curious{" "}
                  </span>
                  individual who is always hungry for new knowledge and
                  experiences.
                </p>
                <p>
                  I'm open to{" "}
                  <span className="font-bold text-slate-300/80">
                    Job Opportunities
                  </span>{" "}
                  where I can contribute, learn and grow. If you have a good
                  opportunity that matches my skills than{" "}
                  <span className="font-bold">Contact</span> me.
                </p>
                <p>
                  {" "}
                  <span className="font-bold text-slate-300/80">
                    Thank You
                  </span>{" "}
                  for reading about me 🙂
                </p>
              </div>
            </div>
            <div className="flex flex-col flex-1  uppercase">
              <div className="flex items-end md:items-start  gap-3 flex-col ">
                <p className=" lineUp uppercase  text-[#CC8BF2] text-xl font-medium ">
                  technical skills
                </p>
                <span className="w-12 h-1 rounded-md mb-2 bg-slate-400 " />
              </div>
              <div className="flex lineLeft gap-4 justify-between pt-6 py-6 text-justify  flex-row flex-wrap items-center ">
                {skills.map((tag, index) => {
                  return (
                    <SkillCard tag={tag?.tag} key={index} link={tag.link} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default page;
