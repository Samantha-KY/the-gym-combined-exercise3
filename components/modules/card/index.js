/* eslint-disable @next/next/no-img-element */
import React from "react";

function ProjectCard({ project }) {
  const { image, title, description, themes = [], background, tittle, descriptions } = project;
  return (
    <section className="flex flex-col pb-20">
      <div style={{ background }} className="relative overflow-hidden cursor-pointer">
        <img src={image} alt={title} className="h-[169px] w-full md:h-[400px] md:w-full hover:scale-105 transition-all duration-300 ease-in-out" />
      </div>
      
        <p className="flex flex-wrap gap-4 font-bold items-start text-black/80 text-sm pt-5">
          {themes?.map((_theme, index) => {
            return (
              <span key={index} className="uppercase">
                {_theme}
              </span>
            );
          })}
        </p>
      
      <h1 className="text-4xl py-2 font-semibold whitespace-pre-line md:hidden">{title}</h1>
      <h1 className="text-4xl py-2 font-semibold whitespace-pre-line hidden md:block leading-normal">{tittle}</h1>
      <p className="text-lg text-black/80 md:hidden">{description}</p>
      <p className="text-lg text-black/80 whitespace-pre-line hidden md:block">{descriptions}</p>
    </section>
  );
}

export default ProjectCard;
