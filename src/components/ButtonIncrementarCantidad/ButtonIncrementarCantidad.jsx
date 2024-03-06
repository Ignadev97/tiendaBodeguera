import {useEffect, useContext, useState } from 'react'
import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { ItemsContext } from '../../context/ItemContext';
const ButtonIncrementarCantidad = () => {

  const {cantidad, setCantidad} = useContext(ItemsContext)
  useEffect(() => {
    setCantidad(1)
  },[])
  

   const sumarCantidad = () => {
      const nuevaCantidad = cantidad +1
      setCantidad(nuevaCantidad)
  }
  
  const restarCantidad = () => {
      if (cantidad == 1 ) {
          console.log('no se puede seguir restando')
      }else{
        const nuevaCantidad = cantidad -1
        setCantidad (nuevaCantidad)        
      }
}

  return (
    <ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled elevation buttons"
      className='pt-4 pb-4'
    >
      <Button onClick={restarCantidad}>-</Button>
      <Button> {cantidad} </Button>
      <Button onClick={sumarCantidad} >+</Button>
    </ButtonGroup>
  );
}

export default ButtonIncrementarCantidad