/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Button from './Button'

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    return (
        <section className={`text-white w-full z-20 top-0 sticky ${isScrolled ? "bg-white" : "bg-black/90"}`}>
            <div className='flex items-center md:justify-between gap:10 w-full p-6 m-0 max-w-7xl mx-auto md:px-20'>
                <div>
                    <h1 className='text-3xl font-bold'>CINNAMON</h1>
                </div>
                <div className='md:flex justify-between gap-8 hidden'>
                    <ul className='md:flex justify-between gap-4 hidden'>
                        <li>Projects</li>
                        <li>Services</li>
                        <li>About Us</li>
                        <li>Carrers</li>
                        <li>Blog</li>

                    </ul>
                    <div className='md:flex justify-between gap-6 hidden -mt-1'>
                        <div className='border-2 border-white rounded-full w-[3rem] h-[3rem] flex justify-center items-center hover:bg-indigo-700 hover:border-0 px-2'>
                            <img src='headerIcon.svg' alt='header' className='w-40 h-40 ' />
                        </div>
                        <Button title="Contact us" className="bg-indigo-700 text-white p-2 w-[10rem] text-lg font-medium -mt-2 
                    hover:border-2 hover:border-indigo-700 hover:text-indigo-700 hover:bg-white" />
                    </div>
                </div>
                <img src='menuIcon.svg' alt='menu' className='md:hidden' />

            </div>
        </section>
    )
}

export default Header