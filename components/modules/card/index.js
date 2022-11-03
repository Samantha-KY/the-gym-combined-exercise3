/* eslint-disable @next/next/no-img-element */
import React from "react";

function ProjectCard({ project }) {
  const { image, title, description, themes = [], background, tittle, descriptions } = project;
  return (
    <section className="flex flex-col pb-20 ">
      <div style={{ background }} className="relative overflow-hidden cursor-pointer md:w-full">
        <img src={image} alt={title} className="h-[11rem] w-full md:h-full hover:scale-105 transition-all duration-300 ease-in-out" />
      </div>
      
        <p className="flex flex-wrap gap-4 font-cinnamonsemibold font-extrabold items-start text-black/80 text-sm pt-5">
          {themes?.map((_theme, index) => {
            return (
              <span key={index} className="uppercase">
                {_theme}
              </span>
            );
          })}
        </p>
      
      <h1 className="text-4xl py-2 font-cinnamonbold whitespace-pre-line md:hidden">{title}</h1>
      <h1 className="text-4xl py-2 font-cinnamonbold whitespace-pre-line hidden md:block leading-normal">{tittle}</h1>
      <p className="text-base text-black/80 md:hidden font-cinnamonsemibold font-extrabold">{description}</p>
      <p className="text-base text-black/80 whitespace-pre-line hidden md:block font-cinnamonextralight font-extrabold">{descriptions}</p>
    </section>
  );
}

export default ProjectCard;
