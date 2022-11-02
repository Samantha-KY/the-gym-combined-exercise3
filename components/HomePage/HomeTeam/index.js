/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../../modules/Button";

function HomeTeam() {
  return (
    <section className="bg-slate-100 ">
      <div className="md:relative">
      <div className="flex flex-col justify-center gap-10 px-6 pb-20 md:flex-row  md:gap-[20rem] md:justify-start md:px-20 max-w-7xl mx-auto">
        <h1 className="text-[2.5rem] font-bold pb-5 leading-snug mt-20">Agile team<br/> on demand</h1>
        <img src="teamImage1.webp" alt="agile team" className="h-[11rem] w-[17rem] md:hidden"/>
        <div className="md:flex md:flex-col md:mt-20 md:z-10 md:gap-6">
        <p className="text-black/80 text-lg">
          By hiring and managing talented people<br/> with skills specific to your
          project, we build<br/> you a team that’s accomplished, agile and<br className="hidden md:block"/> scalable
          in both directions.
        </p>
        <Button title="See how it works"/>
      </div>
      </div>
      <img src="teamImage1.webp" alt="agile team" className="h-[11rem] w-[17rem] hidden md:block md:bottom-0 md:mt-20 md:ml-10 md:absolute md:right-0 "/>
      </div>
    </section>
  );
}

export default HomeTeam;
