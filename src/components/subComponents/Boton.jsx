import React from 'react'

const boton = ({background, color, link = "#", text}) => {
  return (
    <div
      className="w-34 h-10 rounded-full mt-2 cursor-pointer hover:opacity-80 transition-opacity duration-300"
      style={{ backgroundColor: background }}
    >
      <a href={link} className="flex items-center justify-center h-full">
        <p style={{ color: color }} className="mx-2">{text}</p>
        <img src="./marker.svg" alt="icon" className="h-6 w-8"/>
      </a>
    </div>
  )
}

export default boton