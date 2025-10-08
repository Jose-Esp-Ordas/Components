import React from 'react'

const GridItem = ({ titulo, precio, src }) => {
  return (
    <div className="p-2 sm:p-4 text-center">
      <img src={src} alt={titulo} className="w-full h-32 sm:h-40 object-contain mb-2 rounded" />
      <h3 className="font-bold text-sm sm:text-base lg:text-lg">{titulo}</h3>
      <p className="text-sm sm:text-base">${precio} mxn.</p>
    </div>
  );
}

export default GridItem