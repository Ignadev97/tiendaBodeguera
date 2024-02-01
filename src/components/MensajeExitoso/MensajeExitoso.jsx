import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function SimpleAlert( {idVenta} ) {
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        Felicidades por tu compra. El ID que corresponde a tu compra es {idVenta}
    </Alert>
  );
}