const Detalle = ({GridState,titulo, descripcion, precio,  src}) => {
  return (
    <>
        <div className="flex w-full gap-8 p-8">
            {/* Columna izquierda */}
            <div className="w-1/3 h-full flex flex-col justify-center items-center gap-16">
                <img src={src} alt={titulo} className="w-full rounded" />
                <button
                onClick={() => GridState(false)}
                className="cursor-pointer bg-white text-cafe px-6 py-2 rounded hover:shadow-rosita hover:shadow-2xl hover:border-rosita border-2 border-cafe   transition-colors duration-300"
                >
                Volver
                </button>
            </div>

            {/* Columna derecha */}
            <div className="w-2/3 h-full flex flex-col justify-center">
                <h2 className="text-6xl text-rosita">{titulo}</h2>
                <hr className="my-4" />
                <div className="text-lg">{descripcion}</div>
                <div className="text-2xl font-bold mt-4">Precio: ${precio}</div>
            </div>
        </div>
    </>
  )
}

export default Detalle