import React from 'react'

const Fondo = ({textofondo}) => {
  return (
    <>
        <h1
        className="fixed top-0 left-0 w-full text-center font-bold -z-10 text-[22vw] leading-none
                    bg-gradient-to-r from-white via-[#595959] to-transparent bg-clip-text text-transparent"
        style={{ backgroundSize: '100% 100%' }}
        >
        {textofondo}
        </h1>
        <img className='fixed top-0 left-0 w-screen h-screen -z-20 object-cover' src='./backg.jpg'/>
    </>
  )
}

export default Fondo