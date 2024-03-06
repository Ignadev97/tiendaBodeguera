import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

//context 
import { useContext } from "react";
import { ItemsContext } from "../../context/ItemContext";

const ButtonAniadirACarrito = (dato) => {

  const { setCartItems, cartItems, cantidad } = useContext(ItemsContext) 

  const añadirACarrito =  () => {
    const item =  dato.dato
    
    setCartItems([... cartItems, item])

    const itemExistente = cartItems.find(producto => producto.id === item.id)
    
    if (itemExistente) {
      const nuevosItems = cartItems.map ( producto => {
        const nuevaCantidad = itemExistente.quantity + cantidad 
       return producto.id === item.id ? { ... producto, quantity: nuevaCantidad } : producto
      })
      setCartItems(nuevosItems)
    
    }else{
      const itemConCantidad1 = { ... item, quantity:cantidad }
      setCartItems([... cartItems, itemConCantidad1])
    }
  }
  


  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" onClick={añadirACarrito} >Añadir al carrito</Button>
    </Stack>
  );
}


export default ButtonAniadirACarrito