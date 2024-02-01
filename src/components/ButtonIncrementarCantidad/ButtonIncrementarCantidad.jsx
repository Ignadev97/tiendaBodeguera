import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

const ButtonIncrementarCantidad = () => {
  return (
    <ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled elevation buttons"
      className='pt-4 pb-4'
    >
      <Button>-</Button>
      <Button>7</Button>
      <Button>+</Button>
    </ButtonGroup>
  );
}

export default ButtonIncrementarCantidad