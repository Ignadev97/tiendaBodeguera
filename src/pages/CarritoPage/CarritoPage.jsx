import React from "react";
import TextField from "../../components/TextField/TextField";
import { useContext } from "react";
import { ItemsContext } from "../../context/ItemContext";
import MensajeExitoso from '../../components/MensajeExitoso/MensajeExitoso'

const CarritoPage = ( ) => {

  const { cartItems, vaciarCarrito, quitarObjeto} = useContext(ItemsContext);



  const sumarTotalesQuantity = (item) => {
      const totalProducto = item.precio * item.quantity
      return totalProducto
  }

  const sumarTotales = (cartItems) => {
    if(cartItems.length === 0) {
      console.log('el carrito está vacío')
    }else{
      const sumaPrecios = cartItems.reduce((total, producto) => total + producto.precio * producto.quantity, 0);
      return sumaPrecios
    }
  }

   
  return (
    <div className="flex flex-col">
      <div className="flex justify-center flex-row font-black">
        {cartItems.length > 0 ? <h2 className="pb-10 pt-10">En tu carrito se encuentran los siguientes artículos:</h2>: <h2 className="pb-10 pt-10">El carrito se encuentra vacío</h2>}
      </div>
      <div className="flex flex-col gap-5 ">
        {cartItems.map((item) => {
          return (
            <div key={item.id}>
              <div className="bg-gray-200" > 
              <img src={item.imagen} className="w-20 h-20"  />
              <p className="font-black">{item.descripcion} ({item.quantity}  unidades)  </p>
              <p>${sumarTotalesQuantity(item)}</p>
              <button onClick={() => quitarObjeto(item.id)} class="bg-red-500 text-white px-4 py-2 rounded-lg border border-gray-300 hover:bg-red-600 hover:border-gray-400 transition duration-300 ease-in-out max-w-[150px]">
                 Quitar objeto
              </button>
              </div>
              
            </div>
          );
        })}
      </div>
      <div>
        <p className="font-black">  {cartItems.length > 0 ? <h2 className="pb-10 pt-10">TOTAL $ {sumarTotales(cartItems)}</h2>: null} </p>
      </div>
      {cartItems.length > 0 ? <button onClick={vaciarCarrito} class="bg-red-500 text-white px-4 py-2 rounded-lg border border-gray-300 hover:bg-red-600 hover:border-gray-400 transition duration-300 ease-in-out">
          Vaciar Carrito
      </button>: null}
      <div className="flex justify-center flex-row font-black">
        {cartItems.length > 0 ? <h2 className="pb-10 pt-10" >Para confirmar la compra, ingresá los datos y envialos</h2>: null}
      </div>
      <div>
       {cartItems.length > 0 ?  <TextField/> : null}
      </div>
    </div>
  );
};

export default CarritoPage;
