import React from 'react';
import ButtonIncrementarCantidad from "../ButtonIncrementarCantidad/ButtonIncrementarCantidad";
import ButtonAniadirACarrito from "../ButtonAniadirACarrito/ButtonAniadirACarrito";
import ButtonTalle from "../ButtonTalle/ButtonTalle.jsx";
import CartWidget from "../CartWidget/CartWidget";

const ItemDetail = ({item}) => {
  return (
    <div className=" grid grid-cols-2">
    <div className="w-1/2 p-1">
      <img
        src={item.imagen}
        alt="imágen de referencia"
        className="rounded-2xl w-full h-full object-cover"
      />
    </div>
    <div className="2-1/2 p-4">
      <h2 className="font-bold text-2xl">{item.descripcion}</h2>
      <p>${item.precio}</p>
      <ButtonTalle />
      <ButtonIncrementarCantidad/>
      <ButtonAniadirACarrito dato={item} />
      <CartWidget />
    </div>
  </div>
  )
}

export default ItemDetail
