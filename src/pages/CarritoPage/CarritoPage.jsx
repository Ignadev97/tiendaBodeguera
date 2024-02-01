import React from "react";
import TextField from "../../components/TextField/TextField";
import { useContext, useState } from "react";
import { ItemsContext } from "../../context/ItemContext";
import MensajeExitoso from '../../components/MensajeExitoso/MensajeExitoso'




const CarritoPage = ( ) => {



  const { cartItems } = useContext(ItemsContext);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center flex-row font-black">
        <h2 className="pb-10 pt-10">En tu carrito se encuentran los siguientes artículos:</h2>
      </div>
      <div className="flex flex-col gap-5 ">
        {cartItems.map((item) => {
          return (
            <>
              <div className="bg-gray-200"> 
              <img src={item.dato.imagen} className="w-20 h-20"  />
              <p className="font-black">{item.dato.descripcion}</p>
              <p>${item.dato.precio}</p>
              </div>
             
            </>
          );
        })}
      </div>
      <div className="flex justify-center flex-row font-black">
        <h2 className="pb-10 pt-10">Para confirmar la compra, ingresá los datos y envialos</h2>
      </div>
      <div>
        <TextField/>
      </div>
    </div>
  );
};

export default CarritoPage;
