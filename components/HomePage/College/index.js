/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../../modules/Button";

function College() {
  return (
    <section>
      <div className="md:relative">
        <div className="flex flex-col px-6 gap-6 py-20 max-w-7xl mx-auto md:px-20 md:py-40 ">
      <div className="flex flex-col justify-center items-center gap-10 md:flex-row md:gap-[10rem] md:justify-start">
        <img src="college.webp" alt="college" className="h-[13rem] w-full md:h-[10rem] md:w-[20rem]" />
        <div className="md:flex md:flex-col md:gap-8">
        <p className="text-black/80 text-lg">
          Seize the unique opportunity to participate<br/> in a wide range of courses
          conducted by<br className="hidden md:block"/> professionals with an impeccable<br className="hidden md:block"/> reputation in the
          digital industry.
        </p>
        <div className="hidden md:block">
        <Button title='See how it works' />
        </div>
        </div>
      </div>
      <div className="md:hidden">
      <Button title='See how it works' />
      </div>
      </div>
      <img src="collegeImage.webp" alt="college" className="hidden md:h-[25rem] md:w-[38rem] md:block md:bottom-0 md:mt-20 md:ml-10 md:absolute md:right-0 "/>
      </div>
    </section>
  );
}

export default College;
