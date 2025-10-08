import Destacado from './Destacado'
import Grid from './Grid'
import { useState } from 'react'

const Mostrador = ({elementos}) => {
  return (
    <>
      <div className=' md:flex md:gap-8 w-screen mt-16 mb-16'>
        {/*Sección izquierda*/}
        <div>
          {/*Mini header*/}
          <div className=' flex items-start justify-start gap-4  md:w-[60vw] max-sm:mr-8  bg-white text-cafe
          font-bold '>
            <div className=' flex items-center justify-center z-10 bg-white w-[60vw] gap-10'>
              <div className=' w-[20vw] h-[15vh]'>
                <img
                    src="./dos7.png"
                    alt="imagen"
                    className="absolute w-[20vw] h-[30vh] -translate-y-25"
                />        
              </div>
              <h3 className=' max-sm:ml-8'>3D Models - Summer Season </h3>
              <img src='./icon.svg' alt='linea' className='max-w-6 max-h-6' />
            </div>
          </div>

          {/*Grid*/}
          <div className=' backdrop-blur-3xl md:w-[60vw] max-sm:mr-8'>
            <Grid Elementos={elementos} />
          </div>


        </div>
        {/*Sección derecha*/}
        <Destacado/>
      </div>
    </>
  )
}

export default Mostrador