import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

//context 
import { useContext } from "react";
import { ItemsContext } from "../../context/ItemContext";

const ButtonAniadirACarrito = (dato) => {

  const { setCartItems, cartItems } = useContext(ItemsContext)  

  function añadirACarrito (){
    setCartItems([...cartItems,dato])
  }
  


  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" onClick={añadirACarrito} >Añadir al carrito</Button>
    </Stack>
  );
}


export default ButtonAniadirACarrito