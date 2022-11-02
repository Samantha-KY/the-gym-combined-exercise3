import React from "react";

function Hero() {
    return (
        <section className="bg-black/90 text-white">
            <div className="flex flex-col md:justify-center gap-6 px-6 pb-20 md:px-20 max-w-7xl mx-auto">
                <h1 className="md:text-7xl text-5xl font-bold mt-20 leading-snug md:w-30 md:mt-40">
                    Results focused design &<br className="hidden md:block"/> development agency
                </h1>
                <p className="text-xl font-medium leading-relaxed text-white/80 md:hidden ">
                    Extend your team with our high<br /> performing specialists or hire us to<br />
                    shape your product from scratch. Either<br /> way, we’ll get your product off
                    the<br /> ground and build a momentum for your success.
                </p>

                <p className="text-xl font-medium leading-relaxed text-white/80 hidden md:block">
                    Extend your team with our high performing specialists or hire us<br /> to
                    shape your product from scratch. Either way, we’ll get your<br /> product off
                    the ground and build a momentum for your<br /> success.
                </p>
            </div>
        </section>
    );
}

export default Hero;
