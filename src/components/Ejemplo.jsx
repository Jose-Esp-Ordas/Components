import React from 'react'
import Boton from './subComponents/boton'

const ejemplo = ({texto}) => {
  return (
    <>
        <div className="relative pl-16 py-16 w-[80vw]">
            <div className="relative z-10">
                <p className="font-bold text-left max-w-60 text-2xl">{texto}</p>
                <Boton color="#290F1A" background="#ffffff" text={"Saber más"} />
            </div>
            
            <div
              className="absolute top-0 right-0 h-[90vh] w-[90vw]"
              style={{
                backgroundImage: "url('/uno.png')",
                backgroundSize: "contain",      
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right top",
              }}
            ></div>
        </div>
    </>
  )
}

export default ejemplo