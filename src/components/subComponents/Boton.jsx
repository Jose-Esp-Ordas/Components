import React from 'react'

const boton = ({background, color, link = "#", text, onclick=""}) => {
  return (
    <div
      className="w-24 sm:w-28 lg:w-34 h-8 sm:h-9 lg:h-10 rounded-full mt-2 cursor-pointer hover:opacity-80 transition-opacity duration-300"
      style={{ backgroundColor: background }}
    >
      <a href={link} onClick={onclick} className="flex items-center justify-center h-full">
        <p style={{ color: color }} className="mx-1 sm:mx-2 text-xs sm:text-sm lg:text-base">{text}</p>
        <img src="./marker.svg" alt="icon" className="h-4 w-5 sm:h-5 sm:w-6 lg:h-6 lg:w-8"/>
      </a>
    </div>
  )
}

export default boton