/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Button from '../../modules/Button'

function Position() {
    return (
        <section className='bg-hero bg-black/90 text-white'>
            {/* <img src='background.png' alt='back' className='absolute h-full w-full object-cover' /> */}
            <div className='flex flex-col justify-center px-6 py-20 gap-8 md:flex-row md:justify-start md:gap-[10rem] max-w-7xl mx-auto md:px-20 md:py-40'>
                <div className='flex-col flex md:gap-10 gap-10'>
                <h1 className='text-white text-4xl font-bold md:text-7xl'>
                    We&apos;re growing
                </h1>
                <p className=''>
                    Jump on board with Cinnamon and get the privilege of<br className='hidden md:block'/> working on challenging projects for leading global<br className='hidden md:block'/>  companies! Make the world a better, more connected<br className='hidden md:block'/>  place.
                </p>
                <div className=''>
                <Button title="See All Positions" />
                </div>
                </div>
                <div className='flex flex-col'>
                    <div className='border-b border-white flex gap-[6rem] flex-row md:py-2 md:gap-[8rem]'>
                        <p className='text-2xl font-bold py-[2.2rem] md:text-xl'>Android Developer</p>
                        <img src='arrowRightWhite.webp' alt='arrow' className='h-[2rem] w-[3.5rem] mt-[3.1rem]' />
                    </div>
                    <div className='border-b border-white flex gap-[6rem] flex-row md:gap-[8rem]'>
                        <p className='text-2xl font-bold py-[2.2rem] md:text-xl'>Android Developer</p>
                        <img src='arrowRightWhite.webp' alt='arrow' className='h-[2rem] w-[3.5rem] mt-[3.1rem]' />
                    </div>
                    <div className='border-b border-white flex gap-10 flex-row '>
                        <p className='text-2xl font-bold py-[2.2rem] md:text-xl'>Backend Development<br className='md:hidden'/> Team<br className='hidden md:block'/> Lead</p>
                        <img src='arrowRightWhite.webp' alt='arrow' className='h-[2rem] w-[3.5rem] mt-[3.1rem]' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Position