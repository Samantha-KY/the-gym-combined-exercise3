/* eslint-disable @next/next/no-img-element */
import React from 'react'

function ServiceCard({ service }) {
    const { image, title, description } = service;
    return (
        <section className='flex flex-col gap-4 mt-5 z-10'>
            <img src={image} alt={title} className='h-10 w-10'/>
            <h1 className='font-bold text-2xl text-white'>{title}</h1>
            <p className='font-medium text-lg text-white/75 w-[256px]'>{description}</p>
        </section>
    )
}

export default ServiceCard