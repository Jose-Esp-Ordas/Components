import React from 'react'

const GridItem = ({ titulo, precio, src }) => {
  return (
    <div className="p-4 text-center ">
      <img src={src} alt={titulo} className="w-full h-40 object-contain mb-2 rounded" />
      <h3 className="font-bold text-lg">{titulo}</h3>
      <p>${precio} mxn.</p>
    </div>
  );
}

export default GridItem