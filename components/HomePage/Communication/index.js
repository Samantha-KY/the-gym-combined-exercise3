/* eslint-disable @next/next/no-img-element */
import React from "react";

function Communication() {
    return (
        <section>
            <div className="flex flex-col gap-6 px-6 mt-[4rem] pb-20 md:px-20 max-w-7xl mx-auto">
                <div className="md:flex md:justify-between">
                    <div className="flex flex-col gap-8">
                    <h1 className="text-4xl font-cinnamonbold leading-[3rem] md:text-5xl md:leading-snug md:font-semibold">
                        They’re consistent,
                        <br className="md:hidden" /> and the<br className="hidden md:block" />
                        <br className="md:hidden" /> communication is
                        <br className="md:hidden" /> good.
                    </h1>
                    <p className='font-cinnamonextralight font-black text-base text-black/75 '>
                        When I have a deadline, they would work<br className="md:hidden" /> extra hours on the weekend and
                        after<br className="md:block hidden" /> hours. Cinnamon gives the impression of being a<br className="md:hidden" /> smaller team
                        that’s focused on<br className="md:block hidden" /> customers.
                    </p>
                    </div>
                    <img src="communicationImage2.webp" alt="communication" className="h-20 w-60 mt-20 hidden md:block" />
                </div>
                <div>
                    <img src="communicationImage1.webp" alt="communication" className="h-20 w-20" />
                    <p className="font-cinnamonbold text-2xl">Garin Toren,</p>
                    <p className="text-base font-cinnamonextralight font-extrabold">CEO, ping</p>
                </div>

                <div className="md:flex md:justify-between">
                    <div className="flex gap-20 mt-5 mb-5">
                        <img src="arrow-left.webp" alt="arrow" className="h-[1.5rem] w-[3rem]" />
                        <img src="arrow-right.webp" alt="arrow" className="h-[1.5rem] w-[3rem]" />
                    </div>
                    <div className="flex flex-row">
                        <a href="#" className=" flex gap-4">
                            <img src="flesh.svg" alt="flesh" className="h-[1rem] w-[1rem]" />
                        </a>
                        <p className="underline text-indigo-700 font-cinnamonextrabold -mt-1 text-base w-fit">VIEW CASE STUDY</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Communication;
