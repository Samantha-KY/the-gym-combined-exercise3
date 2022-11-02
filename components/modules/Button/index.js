import React from 'react'

function Button({ className='bg-indigo-700 text-white p-2 w-60 text-lg font-medium hover:border-2 hover:border-indigo-700 hover:text-indigo-700 hover:bg-white' , title }) {
  return (
    <button className={className}>{title}</button>
  )
}

export default Button