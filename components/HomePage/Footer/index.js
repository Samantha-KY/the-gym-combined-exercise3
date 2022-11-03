/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import Button from '../../modules/Button'

function Footer() {
    return (
        <section className="bg-hero bg-black/90 text-white">
            <div className="px-5 pt-20 pb-8 lg:px-10 xl:max-w-6xl xl:mx-auto xl:px-0">
                <div className="flex flex-col gap-8 md:flex-row">
                    <div className="md:w-56 lg:w-2/4">
                        <h1 className='text-3xl font-cinnamonextrabold mt-20'>CINNAMON</h1>

                        <ul className="text-semi-gray hidden text-base font-cinnamonextralight font-extrabold  md:grid grid-cols-2 md:grid-cols-1 justify-between items-center py-10">
                            <ul className="space-y-5 md:space-y-4">
                                <li>Home</li>
                                <li>Projects</li>
                                <li>Services</li>
                            </ul>
                            <ul className="space-y-5 md:space-y-4 md:mt-4">
                                <li>About Us</li>
                                <li>Careers</li>
                                <li>Blog</li>
                            </ul>
                        </ul>
                    </div>

                    <div className="lg:w-full">
                        <h4 className="text-white text-2xl font-cinnamonextrabold lg:text-[32px] md:mt-20">
                            All software,
                            <br className="md:hidden" /> zero bullshit.
                        </h4>
                        <div className="md:grid grid-cols-2 gap-6 text-semi-gray hidden md:grid-cols-3 md:mt-8">
                            <div className="">
                                <p className="font-cinnamonbold py-1">Zagreb</p>
                                <p className="text-base font-cinnamonextralight font-extrabold  md:leading-6">
                                    Slavonska <br className="hidden md:block lg:hidden" /> avenija
                                    6,
                                    <br className="hidden lg:block" />
                                    <br className="hidden md:block lg:hidden" /> 10000, Zagreb,
                                    Croatia
                                </p>
                                <p className="text-base font-cinnamonextralight font-extrabold  md:leading-6">
                                    +385 99 347
                                    <br className="hidden md:block lg:hidden" /> 3103
                                </p>
                            </div>
                            <div>
                                <p className="font-cinnamonbold py-1">New York</p>
                                <p className="text-base font-cinnamonextralight font-extrabold  md:leading-6">
                                    500 7th Ave,
                                    <br className="hidden md:block lg:hidden" /> New York,
                                </p>
                                <p className="text-base font-cinnamonextralight font-extrabold  md:leading-6">
                                    NY 10018,
                                    <br className="hidden md:block lg:hidden" /> United States
                                </p>
                            </div>
                            <div>
                                <p className="font-cinnamonbold py-1">Belgrade</p>
                                <p className="text-base font-cinnamonextralight font-extrabold leading-[27px] md:leading-6">
                                    Bulevar <br className="hidden md:block lg:hidden" />
                                    vojvode
                                    <br className="hidden md:block lg:hidden" /> Mišića
                                    <br className="md:hidden lg:hidden" /> 37
                                    <br className="hidden md:block lg:hidden" />
                                </p>
                                <p className="text-base font-cinnamonextralight font-extrabold pt-1 md:leading-6">
                                    11000,
                                    <br className="hidden md:block lg:hidden" /> Belgrade,
                                    <br className="hidden md:block lg:hidden" /> Serbia
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <ul className="text-semi-gray md:hidden text-base font-cinnamonextralight font-extrabold grid grid-cols-2 md:grid-cols-1 justify-between items-center py-10">
                    <ul className="space-y-5 md:space-y-4">
                        <li>Home</li>
                        <li>Projects</li>
                        <li>Services</li>
                    </ul>
                    <ul className="space-y-5 md:space-y-4 md:mt-4">
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Blog</li>
                    </ul>
                </ul>

                <div className="grid grid-cols-2 gap-6 text-semi-gray md:hidden">
                    <div>
                        <p className="font-cinnamonbold py-1">Zagreb</p>
                        <p className="text-base font-cinnamonextralight font-extrabold">
                            Slavonska avenija 6, 10000, Zagreb, Croatia
                        </p>
                        <p className="text-base font-cinnamonextralight font-extrabold">
                            +385 99 347 3103
                        </p>
                    </div>
                    <div>
                        <p className="font-cinnamonbold py-1">New York</p>
                        <p className="text-base font-cinnamonextralight font-extrabold">
                            500 7th Ave, New York,
                        </p>
                        <p className="text-base font-cinnamonextralight font-extrabold">
                            NY 10018, United States
                        </p>
                    </div>
                    <div>
                        <p className="font-cinnamonbold py-1">Belgrade</p>
                        <p className="text-base font-cinnamonextralight font-extrabold leading-[27px]">
                            Bulevar vojvode Mišića <br /> 37
                        </p>
                        <p className="text-base font-cinnamonextralight font-extrabold pt-1">
                            11000, Belgrade, Serbia
                        </p>
                    </div>
                </div>

                <div className="text-white mt-10 md:hidden">
                    <p className="font-cinnamonbold pt-10 pb-8">Our newsletter</p>

                    <div className="flex flex-col">
                        <label
                            htmlFor="email"
                            className="text-semi-gray font-cinnamonextralight font-extrabold -mb-2 text-base"
                        >
                            Your E-mail
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="bg-transparent outline-none border-b-2 mr-8"
                        />
                    </div>

                    <div className="mr-8 py-5">
                        <Button title="Subscribe" fullWidth={true} />
                    </div>
                </div>

                <div className="md:flex md:flex-row-reverse md:items-end md:justify-between">
                    <div className='items-center flex flex-col justify-center'>
                        <img src='footerLogo.svg' alt='footer' className='h-40 w-60' />
                        <img src='footerLogo2.webp' alt='footer' className='h-20 w-60' />
                    </div>

                    <div className="text-white mt-10 hidden md:block lg:w-[285px]">
                        <p className="font-cinnamonbold pt-10 pb-8">Our newsletter</p>

                        <div className="flex flex-col">
                            <label
                                htmlFor="email"
                                className="text-semi-gray font-cinnamonextralight font-extrabold -mb-2 text-base"
                            >
                                Your E-mail
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="bg-transparent outline-none border-b-2 md:border-white/40 mr-8 md:mr-0"
                            />
                        </div>

                        <div className="mr-8 py-5 md:pb-0 md:mr-0">
                            <Button title="Subscribe" className="bg-indigo-700 text-white p-2 w-full text-lg font-medium 
            hover:border-2 hover:border-indigo-700 hover:text-indigo-700 hover:bg-white" />
                        </div>
                    </div>

                    <p className="text-semi-gray text-base font-cinnamonextralight font-extrabold underline mx-auto w-fit mt-14 md:mx-0">
                        hello@cinnamon.agency
                    </p>
                </div>

                <div className="md:flex md:justify-between md:items-center md:border-t md:border-white/20 md:mt-9">
                    <p className="text-white/60 text-base font-cinnamonextralight font-extrabold md:flex justify-center gap-6 mt-5 hidden">
                        <span>© 2022 Cinnamon</span>
                        <span className="underline">Privacy Policy</span>
                    </p>
                    <div className="text-white flex justify-center gap-6 py-7 md:py-2 border-t border-b border-white/20 mt-7 md:border-none">
                        <img src='linkedIn.svg' alt='linkedIn' className='h-5 w-5' />
                        <img src='basketball.svg' alt='linkedIn' className='h-5 w-5' />
                        <img src='be.svg' alt='linkedIn' className='h-5 w-5' />
                        <img src='instangram.svg' alt='linkedIn' className='h-5 w-5' />
                        <img src='facebook.svg' alt='linkedIn' className='h-5 w-5' />
                        <img src='wifi.svg' alt='linkedIn' className='h-5 w-5' />
                        {/* <WifiIcon /> */}
                    </div>
                </div>

                <Link href='#' className="text-white/60 text-base font-cinnamonextralight font-extrabold flex justify-center gap-6 mt-5 md:hidden">
                    <span>© 2022 Cinnamon</span>
                    <span className="underline">Privacy Policy</span>
                </Link>

            </div>
        </section>
    )
}

export default Footer