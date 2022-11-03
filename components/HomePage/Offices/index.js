/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from 'react'
import { DUMMY_OFFICE } from '../../dummyData/dummyOffice'
import OfficeCard from '../../modules/OfficeCard'

function Offices() {
  return (
    <section className='text-black/90'>
        <div className='p-5 px-6 md:gap-20 md:flex md:flex-col md:px-20 md:py-40 max-w-7xl mx-auto'>
            <h1 className='font-cinnamonextrabold text-4xl md:text-5xl md:font-semibold'>Our Offices</h1>
            <div className='flex overflow-x-scroll gap-8 scrollbar-hide'>
            {DUMMY_OFFICE?.map((office, index)=>{
                return(
                    <Fragment key={index}>
                        <OfficeCard office={office}/>
                    </Fragment>
                )
            })}
            </div>
            <div className="md:flex gap-20 mt-5 mb-5 hidden ">
                        <img src="arrow-left.webp" alt="arrow" className="h-[1.5rem] w-[3rem]" />
                        <img src="arrow-right.webp" alt="arrow" className="h-[1.5rem] w-[3rem]" />
                    </div>
        </div>
    </section>
  )
}

export default Offices