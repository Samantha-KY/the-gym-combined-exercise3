/* eslint-disable @next/next/no-img-element */
import React from "react";
import { DUMMY_TECH } from "../../dummyData/dummyTech";

const Tech = () => {
  return (
    <section className="px-5 relative pb-20 ">
      <div className="md:px-20 max-w-7xl mx-auto flex flex-col gap-10 md:gap-[4rem]">

      <h1 className="font-cinnamonextrabold leading-loose text-4xl mt-10 md:text-6xl">
        Stay in the loop<br className="hidden md:block"/> on tech topics
      </h1>

      <div className="flex gap-8 overflow-x-scroll scrollbar-hide ">
        {DUMMY_TECH?.map(
          ({ imageUrl, title, date, readingTime, theme }, index) => {
            return (
              <div key={index} className="flex flex-col gap-3 md:gap-4">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-[175px] h-[107px] md:h-[15rem] md:w-[35rem]"
                />
                <p className="uppercase text-sm font-cinnamonbold">{theme}</p>
                <div className="flex justify-around items-center w-[175px]">
                  <div className="w-[6px] h-[6px] bg-yellow-400 rounded-full" />

                  <p className="text-base font-cinnamonextralight font-extrabold">{date}</p>

                  <div className="w-[6px] h-[6px] bg-yellow-400 rounded-full" />

                  <p className="text-base font-cinnamonextralight font-extrabold">{readingTime}</p>

                </div>

                <h1 className="text-3xl font-cinnamonsemibold leading-snug">{title}</h1>
              </div>
            );
          }
        )}
      </div>

      <div>
        <a href="#" className=" flex gap-4">
          <img src="flesh.svg" alt="flesh" className="h-[1rem] w-[1rem]" />
          <p className="border-b border-indigo-700 text-indigo-700 font-cinnamonextrabold -mt-1 text-base">VIEW MORE BLOGS</p>
        </a>
      </div>
      </div>
    </section>
  );
};

export default Tech;
