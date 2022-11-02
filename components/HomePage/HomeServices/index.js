/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from 'react'
import { DUMMY_SERVICES } from '../../dummyData/dummyService'
import Button from '../../modules/Button'
import ServiceCard from '../../modules/ServiceCard'
function HomeServices() {
    return (
        <section className='bg-black/90'>
            {/* <img src='background.png' alt='back' className='absolute w-full h-full object-cover' /> */}
            <div className='flex flex-col gap-10 px-6 pb-20 md:flex-row md:px-20 md:gap-[8rem] max-w-7xl mx-auto'>
                <h1 className='text-white font-bold text-4xl pt-20 md:mt-5'>Our services</h1>
                <div className='md:flex md:flex-col mt-20'>
                    <div className='md:grid md:grid-cols-2 md:gap-40'>
                        {DUMMY_SERVICES?.map((service, index) => {
                            return (
                                <Fragment key={index}>
                                    <ServiceCard service={service} />
                                </Fragment>
                            )
                        })}
                    </div>
                    <div className='mt-20 mb-20 '>
                        <Button title="See our services" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeServices