const Detalle = ({GridState,titulo, descripcion, precio,  src}) => {
  return (
    <>
        <div className="flex flex-col lg:flex-row w-full gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
            {/* Columna izquierda */}
            <div className="w-full lg:w-1/3 h-full flex flex-col justify-center items-center gap-4 sm:gap-8 lg:gap-16">
                <img src={src} alt={titulo} className="w-full max-w-sm lg:max-w-none max-sm:w-3/5 rounded" />
                <button
                onClick={() => GridState(false)}
                className="cursor-pointer bg-white text-cafe px-4 sm:px-6 py-2 rounded hover:shadow-rosita hover:shadow-2xl hover:border-rosita border-2 border-cafe transition-colors duration-300 text-sm sm:text-base"
                >
                Volver
                </button>
            </div>

            {/* Columna derecha */}
            <div className="w-full lg:w-2/3 h-full flex flex-col justify-center">
                <h2 className="text-3xl sm:text-4xl lg:text-6xl text-rosita">{titulo}</h2>
                <hr className="my-4" />
                <div className="text-base sm:text-lg">{descripcion}</div>
                <div className="text-xl sm:text-2xl font-bold mt-4">Precio: ${precio}</div>
            </div>
        </div>
    </>
  )
}

export default Detalle