/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../../modules/Button";

function AboutUs() {
  return (
    <section className="bg-slate-100">
      <div className="flex flex-col px-6 py-20 gap-6 md:flex-row md:justify-between md:px-20 max-w-7xl mx-auto">
        <div className="md:flex md:flex-col md:gap-20">
        <h1 className="font-bold text-4xl">Who we are</h1>
        <p className="text-black/80 text-lg">
          Meet our international teams made up of 86<br className="md:block hidden"/> innovators, branched into 8
          departments,<br className="md:hidden"/> that<br className="md:block hidden"/> influence the market throughout 20 different
          countries.
        </p>
        <div className="hidden md:flex md:gap-[14rem] ">
          <ul className="font-bold text-lg flex flex-col gap-5">
            <li>Product Design</li>
            <li>Web Development</li>
            <li>Mobile development</li>
            <li>Quality assurance</li>
            <li>Marketing</li>
          </ul>

          <ul className="font-bold text-lg flex flex-col gap-5">
            <li>Project management</li>
            <li>Human resource</li>
            <li>Sales</li>
            <li>Fluffy friends</li>
            
          </ul>
        </div>
        <div className="hidden md:block">
        <Button title="Read About Us" />
        </div>
        </div>
        <img src="aboutUs.webp" alt="about us" className="h-[27rem] w-[17rem] md:h-[35rem] md:w-[25rem]"/>
        <div className="md:hidden">
        <Button title="Read About Us" />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
