/* eslint-disable @next/next/no-img-element */
import React from 'react'

function OfficeCard({office}) {
        const { imageUrl, address, town } = office;
  return (
    <div className="w-fit flex flex-col gap-5 md:gap-6">

      <div className="w-fit md:w-[35rem]">
        <img src={imageUrl} alt={town} className="w-[15.3rem] md:h-[25rem] md:w-[35rem]" />
      </div>

      <div className="w-[15.3rem] flex gap-5 items-start font-extrabold">
        {/* <LocationIcon className="w-8 h-8" /> */}
        <img src='location.svg' alt='location' className="w-5 h-5"/>
        <div className="flex flex-col gap-3">
          <p className="font-cinnamonextrabold text-2xl">{town}</p>
          <p className='font-cinnamonextralight font-extrabold text-base md:w-[35rem]'>{address}</p>
          {/* <DescriptionCard>{address}</DescriptionCard> */}
        </div>
      </div>
    </div>
  );
};
    
  


export default OfficeCard