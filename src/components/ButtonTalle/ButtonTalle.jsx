import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const ButtonTalle = () => {
  return (
    <Stack direction="row" spacing={0} className='pt-4 pb-4'>
      <Button>S</Button>
      <Button>M</Button>
      <Button>L</Button>
      <Button>XL</Button>
      <Button>XXL</Button>
    </Stack>
  );
}

export default ButtonTalle