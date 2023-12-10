import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div className="mt-20 flex justify-center container mx-auto p-4 bg-gray-200 border rounded-lg">
    <h2 className="mr-2 text-xl font-bold mb-2">Mensaje:</h2>
    <p className="text-lg">{greeting}</p>
  </div>
  )
}

export default ItemListContainer
