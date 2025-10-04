import { useState } from 'react'
import GridItem from './subComponents/GridItem'
import Detalle from './Detalle'

const Grid = ({Elementos}) => {
    const [detalle, setdetalle] = useState(false)
    const [selectedItem, setselectedItem] = useState({})

  return (
    <>
        <div className=" pt-8">
            {!detalle ? <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {(Elementos.map((item, index) => (
                <div key={index} onClick={() => (setdetalle(true), setselectedItem(index))} className=' cursor-pointer hover:scale-105 duration-300'>
                    <GridItem
                    titulo={item.titulo}
                    precio={item.precio}
                    src={item.src}
                    />
                </div>
            )))}</div> : (
                <div>
                    <Detalle GridState={setdetalle} titulo={Elementos[selectedItem].titulo}
                    descripcion={Elementos[selectedItem].descripcion}
                    precio={Elementos[selectedItem].precio}
                    src={Elementos[selectedItem].src}/>
                </div>
            )}
        </div>
    </>
  )
}

export default Grid