import React from 'react'

const Button = ({ title, fullWidth = false, width = 202 }) => {
  return (
    <button
      className={`bg-indigo-700 after:content-[''] after:w-12 after:mx-auto after:h-full 
      after:top-0 after:bottom-0 overflow-hidden border-2 border-transparent border-spacing-1 hover:border-indigo-700
    after:bg-white  after:absolute relative 
      after:rounded-full after:scale-0 after:transition-all after:ease-in-out after:duration-300 hover:after:scale-[30] 
      hover:after:transition-all hover:after:ease-in-out
      hover:after:duration-500 text-white hover:text-indigo-700 
      text-base font-cinnamonextralight px-7 py-3 h-14`}
      style={{ width: fullWidth ? "100%" : width }}
    >
      <p className="hover:z-20 absolute w-full top-0 left-0 right-0 h-full flex justify-center items-center">
        {title}
      </p>
    </button>
  );
};

export default Button;