import React from 'react'

const Destacado = () => {
  return (
    <>
        <div className="relative pl-4 py-16 w-[28vw] backdrop-blur-3xl rounded-lg ">
            <div className="relative z-10 align-center text-center justify-center flex">
                <p className="font-bold text-left max-w-60 text-2xl border-4 rounded-4xl border-white py-2 px-6 mb-4">3d Destacado</p>
            </div>
            <img
                src="/tres.png"
                className="w-[28vw]"
                style={{
                    filter: "drop-shadow(0 0 5px #FF00FF) drop-shadow(0 0 10px #FF00FF)",
                }}
                alt="imagen"
            />
            <p className=' text-center text-6xl py-8'>+ 50k </p>
            <p className='text-center text-2xl'>Tríangulos + Vertices</p>
        </div>      
    </>
  )
}

export default Destacado